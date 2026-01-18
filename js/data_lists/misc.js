export const misc = [
    {
        id: 'corn', name: 'Corn', type: 'Grain/Veg', priority: 8,
        description: 'Sweet summer gold.',
        season: [5, 6, 7, 8],
        pre_prep: 'Shuck.',
        prep_guides: [
            { title: 'Cut off Cob', blurb: 'Salad', instruction: 'Stand the shucked cob upright in a large bowl. Slice downward with a sharp knife to strip the kernels off.' },
            { title: 'Grill', blurb: 'Whole', instruction: 'Pull husks back but leave attached. Remove silk, rub with butter, pull husks back up, and soak in water before grilling.' },
            { title: 'Boil', blurb: 'Classic', instruction: 'Drop shucked ears into boiling salted water for 3-5 minutes.' }
        ],
        serving_suggestion: { dish: 'Elote', instruction: 'Mayo, cotija cheese, chili powder.' },
        pairs_with: ['Butter', 'Lime', 'Chili'],
        video: 'https://www.youtube.com/results?search_query=cut+corn+off+cob', recipe: 'https://www.google.com/search?q=corn+recipes'
    },
    {
        id: 'asparagus', name: 'Asparagus', type: 'Stalk', priority: 8,
        description: 'Spring shoots.',
        season: [2, 3, 4, 5],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Snap', blurb: 'Trim', instruction: 'Hold the stalk at both ends and bend gently. It will naturally snap exactly where the woody part ends.' },
            { title: 'Peel', blurb: 'Fancy', instruction: 'For thick stalks, use a peeler to remove the tough skin from the bottom half for a tender bite.' },
            { title: 'Bias', blurb: 'Stir Fry', instruction: 'Slice diagonally into 2-inch pieces to expose more surface area for quick cooking.' }
        ],
        serving_suggestion: { dish: 'Grilled', instruction: 'High heat char with lemon.' },
        pairs_with: ['Lemon', 'Egg', 'Hollandaise'],
        video: 'https://www.youtube.com/results?search_query=trim+asparagus', recipe: 'https://www.google.com/search?q=asparagus+recipes'
    },
    {
        id: 'celery', name: 'Celery', type: 'Stalk', priority: 7,
        description: 'Crunchy water.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Wash dirt.',
        prep_guides: [
            { title: 'Dice', blurb: 'Mirepoix', instruction: 'Slice the stalk lengthwise into 2-3 thin strips, then chop crosswise into small dice.' },
            { title: 'Bias', blurb: 'Stir Fry', instruction: 'Hold the knife at a 45-degree angle and slice the stalk into elegant elongated pieces.' },
            { title: 'Sticks', blurb: 'Snack', instruction: 'Cut the stalks into 3-inch lengths for dipping in peanut butter or ranch.' }
        ],
        serving_suggestion: { dish: 'Ants on Log', instruction: 'Peanut butter and raisins.' },
        pairs_with: ['Peanut Butter', 'Onion', 'Carrot'],
        video: 'https://www.youtube.com/results?search_query=dice+celery', recipe: 'https://www.google.com/search?q=celery+recipes'
    },
    {
        id: 'fennel', name: 'Fennel', type: 'Bulb', priority: 5,
        description: 'Anise/Licorice bulb.',
        season: [9, 10, 11, 0, 1, 2, 3],
        pre_prep: 'Remove fronds.',
        prep_guides: [
            { title: 'Slice', blurb: 'Salad', instruction: 'Cut off stalks. Halve the bulb, cut out the triangular core, and slice very thinly (mandoline best).' },
            { title: 'Wedge', blurb: 'Roast', instruction: 'Cut vertically into wedges, leaving the core attached so they don\'t fall apart while roasting.' },
            { title: 'Fronds', blurb: 'Garnish', instruction: 'Chop the leafy green tops and use them like an herb garnish.' }
        ],
        serving_suggestion: { dish: 'Shaved Salad', instruction: 'Thin slices with orange and olive oil.' },
        pairs_with: ['Orange', 'Pork', 'Fish'],
        video: 'https://www.youtube.com/results?search_query=cut+fennel', recipe: 'https://www.google.com/search?q=fennel+recipes'
    },
    {
        id: 'artichoke', name: 'Artichoke', type: 'Flower', priority: 5,
        description: 'Thistle flower.',
        season: [2, 3, 4, 5],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Trim', blurb: 'Whole', instruction: 'Slices off the top inch. Use kitchen shears to snip the thorny tip off every single outer leaf.' },
            { title: 'Heart', blurb: 'Advanced', instruction: 'Pull off all dark outer leaves until pale yellow. Cut off top. Scoop out fuzzy choke.' }
        ],
        serving_suggestion: { dish: 'Steamed', instruction: 'Dip leaves in butter.' },
        pairs_with: ['Butter', 'Lemon', 'Mayo'],
        video: 'https://www.youtube.com/results?search_query=prep+artichoke', recipe: 'https://www.google.com/search?q=artichoke+recipes'
    },
    {
        id: 'mushroom_button', name: 'Mushroom (White)', type: 'Fungi', priority: 7,
        description: 'Mild, standard.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Wipe clean.',
        prep_guides: [
            { title: 'Quarter', blurb: 'Roast', instruction: 'Simple cut: just slice in half, then half again.' },
            { title: 'Slice', blurb: 'Sauté', instruction: 'Slice parallel to the stem for uniform pieces.' }
        ],
        serving_suggestion: { dish: 'Sautéed', instruction: 'Brown butter and thyme.' },
        pairs_with: ['Thyme', 'Butter'],
        video: 'https://www.youtube.com/results?search_query=clean+mushrooms', recipe: 'https://www.google.com/search?q=white+mushroom+recipes'
    },
    {
        id: 'mushroom_cremini', name: 'Mushroom (Cremini)', type: 'Fungi', priority: 7,
        description: 'Baby bellas. Brown.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Wipe.',
        prep_guides: [
            { title: 'Slice', blurb: 'Risotto', instruction: 'Remove stems if tough, then slice caps thinly to melt into risotto.' },
            { title: 'Whole', blurb: 'Roast', instruction: 'Toss with oil and roast whole caps for juicy bites.' }
        ],
        serving_suggestion: { dish: 'Risotto', instruction: 'Stir into creamy rice.' },
        pairs_with: ['Parmesan', 'Garlic'],
        video: 'https://www.youtube.com/results?search_query=cook+cremini', recipe: 'https://www.google.com/search?q=cremini+mushroom+recipes'
    },
    {
        id: 'mushroom_portobello', name: 'Mushroom (Portobello)', type: 'Fungi', priority: 6,
        description: 'Giant steak mushroom.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Wipe/Gill.',
        prep_guides: [
            { title: 'Gill', blurb: 'Prep', instruction: 'Gently scrape out the black gills with a spoon (they can turn your food a muddy gray).' },
            { title: 'Cap', blurb: 'Burger', instruction: 'Marinate the whole cap and grill it like a burger patty.' }
        ],
        serving_suggestion: { dish: 'Burger', instruction: 'Grill and put on bun.' },
        pairs_with: ['Balsamic', 'Beef'],
        video: 'https://www.youtube.com/results?search_query=prep+portobello', recipe: 'https://www.google.com/search?q=portobello+recipes'
    },
    {
        id: 'mushroom_shiitake', name: 'Mushroom (Shiitake)', type: 'Fungi', priority: 6,
        description: 'Umami bomb.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Wipe.',
        prep_guides: [
            { title: 'De-stem', blurb: 'Necessary', instruction: 'You MUST remove the stems. They are too woody to eat. Twist them off (save for stock).' },
            { title: 'Slice', blurb: 'Stir Fry', instruction: 'Slice the caps widely. They have a meaty texture.' }
        ],
        serving_suggestion: { dish: 'Stir Fry', instruction: 'With snap peas and soy.' },
        pairs_with: ['Soy', 'Ginger', 'Scallion'],
        video: 'https://www.youtube.com/results?search_query=prep+shiitake', recipe: 'https://www.google.com/search?q=shiitake+recipes'
    },
    {
        id: 'peas_snap', name: 'Snap Peas', type: 'Pod', priority: 6,
        description: 'Edible pod. Sweet.',
        season: [3, 4, 5, 6],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'String', blurb: 'Prep', instruction: 'Snap the stem end partialy and pull it down the spine to zip off the tough string.' },
            { title: 'Bias', blurb: 'Salad', instruction: 'Slice on a diagonal to reveal the little peas inside.' }
        ],
        serving_suggestion: { dish: 'Raw', instruction: 'Dip in ranch.' },
        pairs_with: ['Mint', 'Ranch'],
        video: 'https://www.youtube.com/results?search_query=string+snap+peas', recipe: 'https://www.google.com/search?q=snap+pea+recipes'
    },
    {
        id: 'peas_snow', name: 'Snow Peas', type: 'Pod', priority: 5,
        description: 'Flat edible pod.',
        season: [3, 4, 5],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'String', blurb: 'Prep', instruction: 'Even though they are flat, they still have a string. Snap and zip it off.' },
            { title: 'Julienne', blurb: 'Slaw', instruction: 'Stack them and slice into thin matchsticks lengthwise.' }
        ],
        serving_suggestion: { dish: 'Stir Fry', instruction: 'Quick toss in wok.' },
        pairs_with: ['Soy', 'Garlic'],
        video: 'https://www.youtube.com/results?search_query=prep+snow+peas', recipe: 'https://www.google.com/search?q=snow+pea+recipes'
    },
    {
        id: 'peas_english', name: 'English Peas', type: 'Pod', priority: 5,
        description: 'Shelling peas.',
        season: [3, 4, 5],
        pre_prep: 'Shell.',
        prep_guides: [
            { title: 'Shell', blurb: 'Prep', instruction: 'Squeeze the pod to pop it open, then run your thumb down the inside to push the peas out.' }
        ],
        serving_suggestion: { dish: 'Buttered Peas', instruction: 'Simmer with mint.' },
        pairs_with: ['Mint', 'Butter', 'Prosciutto'],
        video: 'https://www.youtube.com/results?search_query=shell+peas', recipe: 'https://www.google.com/search?q=english+pea+recipes'
    },
    {
        id: 'okra', name: 'Okra', type: 'Pod', priority: 4,
        description: 'Slimy if wrong. Fried or pickled.',
        season: [5, 6, 7, 8, 9],
        pre_prep: 'Rinse/Dry.',
        prep_guides: [
            { title: 'Slice', blurb: 'Gumbo', instruction: 'Slice into thick rounds. The slime (mucilage) acts as a thickener in stew.' },
            { title: 'Split', blurb: 'Fry', instruction: 'Slice in half lengthwise, dredge in cornmeal, and fry.' }
        ],
        serving_suggestion: { dish: 'Fried', instruction: 'Cornmeal crust.' },
        pairs_with: ['Tomato', 'Cornmeal'],
        video: 'https://www.youtube.com/results?search_query=cut+okra', recipe: 'https://www.google.com/search?q=okra+recipes'
    }
];
