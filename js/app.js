import { vegetables, seasonalMap, keys, monthlyTopPicks } from './data.js';

// State
const state = {
    month: new Date().getMonth(), // 0-11
    searchQuery: ''
};

// DOM Elements
const els = {
    monthStrip: document.getElementById('month-strip'),
    searchInput: document.getElementById('search-input'),
    grid: document.getElementById('vegetable-showcase'),
    drawer: document.getElementById('drawer-container'),
};

// Init
function init() {
    renderMonthStrip();
    renderGrid();

    els.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim();
        renderGrid();
    });

    els.drawer.addEventListener('click', (e) => {
        if (e.target.id === 'drawer-container' || e.target.id === 'drawer-close' || e.target.closest('.close-btn')) {
            closeDrawer();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
    });
}

function renderMonthStrip() {
    // Abbreviated months for UI
    const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    els.monthStrip.innerHTML = shortMonths.map((m, index) => `
        <div class="month-item ${index === state.month ? 'active' : ''}" data-index="${index}" data-text="${m}">
            ${m}
        </div>
    `).join('');

    // Add click listeners
    els.monthStrip.querySelectorAll('.month-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.dataset.index, 10);
            state.month = index;

            // Update UI Active State
            document.querySelectorAll('.month-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');

            // Reset search and render
            els.searchInput.value = '';
            state.searchQuery = '';
            renderGrid();
        });
    });
}



function getGridItems() {
    if (state.searchQuery.length > 0) {
        const q = state.searchQuery.toLowerCase();
        return vegetables.filter(v => v.name.toLowerCase().includes(q));
    }
    const veggieIds = seasonalMap[state.month] || [];
    const seasonalVeggies = vegetables.filter(v => veggieIds.includes(v.id));

    // Get Top Picks for the current month
    const currentPicks = monthlyTopPicks[state.month] || [];

    // Sort: Manual Top Picks First, then Priority (Desc), then Alphabetical (Asc)
    return seasonalVeggies.sort((a, b) => {
        // 1. Manual Top Picks
        const aIsPick = currentPicks.includes(a.id);
        const bIsPick = currentPicks.includes(b.id);

        if (aIsPick && !bIsPick) return -1;
        if (!aIsPick && bIsPick) return 1;

        // If both are picks, maintain user-defined order
        if (aIsPick && bIsPick) {
            return currentPicks.indexOf(a.id) - currentPicks.indexOf(b.id);
        }

        // 2. Priority Logic: 10 = Seasonal Stars, 0 = Herbs
        const pA = a.priority || 0;
        const pB = b.priority || 0;

        if (pA !== pB) return pB - pA; // Higher priority first

        // 3. Alphabetical
        return a.name.localeCompare(b.name);
    });
}

function renderGrid() {
    const items = getGridItems();
    els.grid.innerHTML = '';

    if (items.length === 0) {
        els.grid.innerHTML = '<p style="grid-column: 1/-1; padding: 1rem; font-style: italic; color: var(--color-text-muted);">No results found.</p>';
        return;
    }

    // Split into Featured and Standard
    // Logic: If there is a search query, show everything in one list (no features).
    // If no search query, show Top Picks (limit 4) then Rest.

    let topPicks = [];
    let standardItems = [];

    if (state.searchQuery.length > 0) {
        standardItems = items;
    } else {
        // Since items are already sorted by Priority (Desc) via getGridItems,
        // we can simply slice the array.

        // Take top 4 for Featured Section
        topPicks = items.slice(0, 4);

        // The rest go to Standard Section
        standardItems = items.slice(4);

        // RE-SORT standard items alphabetically so the user can find things easily
        standardItems.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Render Helper
    const createCard = (veggie) => {
        const card = document.createElement('div');
        card.className = 'text-card';
        card.onclick = () => openDrawer(veggie);
        card.innerHTML = `
            <div class="card-header">
                <span class="card-type">${veggie.type}</span>
                <h3 class="card-name">${veggie.name}</h3>
            </div>
            <p class="card-desc">${veggie.description}</p>
        `;
        return card;
    };

    // Render Top Picks Section
    if (topPicks.length > 0) {
        // "Top Picks" header removed per user request
        topPicks.forEach(v => els.grid.appendChild(createCard(v)));
    }

    // Render Standard Section
    if (standardItems.length > 0) {
        const standardContainer = document.createElement('div');
        standardContainer.style.display = 'contents'; // Use contents so grid layout is preserved for children if needed, or we just append to grid
        // Actually, we are appending directly to grid which is display:grid.
        // We can't wrap them easily if we want them to flow in the same grid.

        // Simpler approach: create a function to render standard items
        const renderStandard = () => {
            // Add separator and title only if we have Top Picks above
            if (topPicks.length > 0) {
                const separator = document.createElement('div');
                separator.className = 'grid-separator';
                separator.style.gridColumn = "1 / -1";
                separator.style.height = "2rem";
                els.grid.appendChild(separator);

                const sectionTitle = document.createElement('h2');
                sectionTitle.textContent = "All Varieties";
                sectionTitle.className = 'section-title';
                sectionTitle.style.gridColumn = "1 / -1";
                sectionTitle.style.marginBottom = "1rem";
                sectionTitle.style.fontFamily = "var(--font-main)";
                sectionTitle.style.fontSize = "1.5rem";
                sectionTitle.style.color = "var(--color-text-main)";
                sectionTitle.style.borderBottom = "1px solid var(--color-border)";
                sectionTitle.style.paddingBottom = "0.5rem";
                els.grid.appendChild(sectionTitle);
            }
            standardItems.forEach(v => els.grid.appendChild(createCard(v)));
        };

        // If search query is active, always show everything
        if (state.searchQuery.length > 0) {
            renderStandard();
        } else {
            // "Show More" Button Logic
            const btnContainer = document.createElement('div');
            btnContainer.style.gridColumn = "1 / -1";
            btnContainer.style.textAlign = "center";
            btnContainer.style.marginTop = "2rem";

            const btn = document.createElement('button');
            btn.textContent = "More";
            btn.className = 'show-more-btn';

            btn.onclick = () => {
                btnContainer.remove(); // Remove button
                renderStandard(); // Show items
            };

            btnContainer.appendChild(btn);
            els.grid.appendChild(btnContainer);
        }
    }
}

function openDrawer(veggie) {
    // 1. Pre-Prep Section (Removed per user request)
    // let prePrepHtml = '';

    // 2. Accordion Prep Guides
    let prepHelpersHtml = '';
    if (veggie.prep_guides && veggie.prep_guides.length > 0) {
        const details = veggie.prep_guides.map(g => {
            // Dynamic Video Link
            const query = encodeURIComponent(`how to ${g.title} ${veggie.name}`);
            const videoUrl = `https://www.youtube.com/results?search_query=${query}`;

            return `
            <details style="border-bottom: 1px solid var(--color-border-light); padding: 0.5rem 0;">
                <summary style="cursor: pointer; padding: 0.5rem 0; font-weight: bold; list-style: none; display: flex; justify-content: space-between; align-items: center; color: var(--color-text-main);">
                    <span>${g.title} <em style="font-weight: normal; color: var(--color-text-muted); font-size: 0.9em; margin-left: 0.5rem;">— ${g.blurb}</em></span>
                    <span style="font-size: 0.8em;">▼</span>
                </summary>
                <div style="padding: 1rem 0 0.5rem; color: var(--color-text-main); line-height: 1.5;">
                    <p style="margin-top: 0;">${g.instruction}</p>
                    <a href="${videoUrl}" target="_blank" style="display: inline-block; margin-top: 0.5rem; font-size: 0.85rem; color: var(--color-text-main); text-decoration: underline; font-weight: 600;">
                        ▶ Watch ${g.title} Tutorial
                    </a>
                </div>
            </details>
            `;
        }).join('');

        prepHelpersHtml = `
            <div style="margin-bottom: 2rem;">
                <h3 style="font-size: 1rem; text-transform: uppercase; margin-bottom: 1rem; border-bottom: 2px solid var(--color-border); display: inline-block; color: var(--color-text-main);">Techniques</h3>
                <div class="accordion-container">
                    ${details}
                </div>
            </div>
        `;
    }

    // 3. Serving Suggestion
    let servingHtml = '';
    if (veggie.serving_suggestion) {
        servingHtml = `
            <div style="margin-bottom: 2rem; background: var(--color-card-bg); border: 1px solid var(--color-border); padding: 1rem;">
                <strong style="display: block; font-size: 0.8rem; text-transform: uppercase; margin-bottom: 0.5rem; color: var(--color-text-muted);">Quick Idea</strong>
                <h4 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; color: var(--color-text-main);">${veggie.serving_suggestion.dish}</h4>
                <p style="margin: 0; font-size: 0.95rem; line-height: 1.4; color: var(--color-text-main);">${veggie.serving_suggestion.instruction}</p>
            </div>
        `;
    }

    // 4. Flavor Pairings
    let pairsHtml = '';
    if (veggie.pairs_with && veggie.pairs_with.length > 0) {
        pairsHtml = `
            <div style="margin-bottom: 2rem;">
                <h3 style="font-size: 1rem; text-transform: uppercase; margin-bottom: 0.5rem; display: inline-block; color: var(--color-text-main);">Matches</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem;">
                    ${veggie.pairs_with.map(p => `
                        <span style="background: var(--color-card-hover-bg); color: var(--color-card-hover-text); padding: 0.2rem 0.6rem; font-size: 0.8rem; border-radius: 20px;">${p}</span>
                    `).join('')}
                </div>
            </div>
        `;
    }

    els.drawer.querySelector('#drawer-body').innerHTML = `
        <h2 style="font-family: var(--font-serif); font-size: 2.5rem; margin-bottom: 0.5rem; color: var(--color-text-main);">${veggie.name}</h2>
        <span style="display: block; font-size: 0.9rem; text-transform: uppercase; border-bottom: 1px solid var(--color-border); padding-bottom: 0.5rem; margin-bottom: 2rem; color: var(--color-text-main);">${veggie.type}</span>
        
        <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; color: var(--color-text-main);">${veggie.description}</p>
        
        ${servingHtml}
        ${pairsHtml}
        ${prepHelpersHtml}

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 3rem;">
            <div>
                <h4 style="border-bottom: 1px solid var(--color-border-light); padding-bottom: 0.25rem; margin-bottom: 1rem; color: var(--color-text-main);">Videos</h4>
                <a href="${veggie.video}" target="_blank" style="color: var(--color-text-main); text-decoration: underline;">Search YouTube ▶</a>
            </div>
            <div>
                <h4 style="border-bottom: 1px solid var(--color-border-light); padding-bottom: 0.25rem; margin-bottom: 1rem; color: var(--color-text-main);">More Recipes</h4>
                <a href="${veggie.recipe}" target="_blank" style="color: var(--color-text-main); text-decoration: underline;">Google Search ↗</a>
            </div>
        </div>
    `;
    els.drawer.classList.add('active');
    // Ensure the panel itself is focused for accessibility or simple UX? 
    // Actually the backdrop has the active class, the panel transforms.
}

function closeDrawer() {
    els.drawer.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', init);
