export const roots = [
    {
        id: 'carrot', name: 'Carrot', type: 'Root', priority: 9,
        description: 'Orange staple. Sweet/Crisp.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Wash/Peel.',
        prep_guides: [
            { title: 'Dice', blurb: 'Mirepoix', instruction: 'Cut into strips, then line them up and cut crosswise into small uniform cubes.' },
            { title: 'Coins', blurb: 'Roast/Sauté', instruction: 'Hold the carrot steady and slice straight down into round discs.' },
            { title: 'Matchstick', blurb: 'Salad', instruction: 'Cut into 2-inch lengths, slab them, stack the slabs, and slice into thin sticks.' },
            { title: 'Roll Cut', blurb: 'Stew', instruction: 'Make a diagonal cut, roll the carrot 90 degrees, and cut again at the same angle to make chunks.' }
        ],
        serving_suggestion: { dish: 'Snack', instruction: 'Raw with hummus.' },
        pairs_with: ['Hummus', 'Ranch', 'Peas'],
        video: 'https://www.youtube.com/results?search_query=cut+carrot', recipe: 'https://www.google.com/search?q=carrot+recipes'
    },
    {
        id: 'baby_carrot', name: 'Carrot (Baby)', type: 'Root', priority: 6,
        description: 'Pre-peeled snacks.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Ready.',
        prep_guides: [
            { title: 'Whole', blurb: 'Roast', instruction: 'Just toss them in oil and roast as they are.' },
            { title: 'Halve', blurb: 'Sauté', instruction: 'Slice them lengthwise once if they are thick to help them cook faster.' }
        ],
        serving_suggestion: { dish: 'Glazed', instruction: 'Simmer with butter and brown sugar.' },
        pairs_with: ['Butter', 'Sugar'],
        video: 'https://www.youtube.com/results?search_query=glaze+baby+carrots', recipe: 'https://www.google.com/search?q=baby+carrot+recipes'
    },
    {
        id: 'beets', name: 'Beets', type: 'Root', priority: 7,
        description: 'Red or Gold. Earthy.',
        season: [5, 6, 7, 8, 9, 10],
        pre_prep: 'Scrub.',
        prep_guides: [
            { title: 'Roast Whole', blurb: 'Easiest', instruction: 'Wrap unpeeled beets in foil and roast at 400°F until tender. The skin rubs right off with a paper towel.' },
            { title: 'Cube', blurb: 'Roast', instruction: 'Peel raw with a vegetable peeler, then cut into wedges or cubes. Wear gloves to prevent staining.' },
            { title: 'Matchstick', blurb: 'Raw Salad', instruction: 'Peel raw and slice into thin matchsticks for a crunchy slaw.' }
        ],
        serving_suggestion: { dish: 'Salad', instruction: 'Roasted with goat cheese.' },
        pairs_with: ['Goat Cheese', 'Walnut'],
        video: 'https://www.youtube.com/results?search_query=roast+beets', recipe: 'https://www.google.com/search?q=beet+recipes'
    },
    {
        id: 'radish', name: 'Radish', type: 'Root', priority: 6,
        description: 'Peppery crunch.',
        season: [3, 4, 5, 9, 10],
        pre_prep: 'Wash/Trim.',
        prep_guides: [
            { title: 'Slice', blurb: 'Salad', instruction: 'Slice off roots and greens, then cut into thin coins.' },
            { title: 'Halve', blurb: 'Roast', instruction: 'Cut in half lengthwise and roast cut-side down to mellow the heat.' },
            { title: 'Matchstick', blurb: 'Tacos', instruction: 'Slice thinly, stack, and sliver into matchsticks for garnish.' }
        ],
        serving_suggestion: { dish: 'Butter & Salt', instruction: 'Raw with good butter and sea salt.' },
        pairs_with: ['Butter', 'Salt', 'Taco'],
        video: 'https://www.youtube.com/results?search_query=cut+radish', recipe: 'https://www.google.com/search?q=radish+recipes'
    },
    {
        id: 'daikon', name: 'Daikon Radish', type: 'Root', priority: 5,
        description: 'Giant Asian radish. Mild.',
        season: [9, 10, 11, 0, 1, 2],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Matchstick', blurb: 'Pickle', instruction: 'Peel, slice into oblongs, and cut into fine sticks for pickling (banh mi).' },
            { title: 'Coins', blurb: 'Stew', instruction: 'Peel and slice into thick 1-inch rounds for long braising.' }
        ],
        serving_suggestion: { dish: 'Pickled', instruction: 'Vinegar and sugar brine.' },
        pairs_with: ['Carrot', 'Vinegar', 'Pork'],
        video: 'https://www.youtube.com/results?search_query=julienne+daikon', recipe: 'https://www.google.com/search?q=daikon+recipes'
    },
    {
        id: 'turnip', name: 'Turnip', type: 'Root', priority: 5,
        description: 'White/Purple. Peppery.',
        season: [9, 10, 11, 0, 1, 2],
        pre_prep: 'Peel.',
        prep_guides: [
            { title: 'Cube', blurb: 'Roast', instruction: 'Peel and cut into 1-inch cubes. Roast until tender.' },
            { title: 'Mash', blurb: 'Side', instruction: 'Boil cubes until soft, drain, and mash with butter.' }
        ],
        serving_suggestion: { dish: 'Mashed', instruction: 'Boil and mash with butter.' },
        pairs_with: ['Butter', 'Carrot'],
        video: 'https://www.youtube.com/results?search_query=cook+turnip', recipe: 'https://www.google.com/search?q=turnip+recipes'
    },
    {
        id: 'rutabaga', name: 'Rutabaga', type: 'Root', priority: 4,
        description: 'Large, yellow, sweet turnip.',
        season: [9, 10, 11, 0, 1, 2],
        pre_prep: 'Peel (wax).',
        prep_guides: [
            { title: 'Cube', blurb: 'Roast/Boil', instruction: 'Peel deeply to remove the wax layer. Use a heavy knife to cut through the dense flesh into cubes.' },
            { title: 'Fries', blurb: 'Side', instruction: 'Cut into thick batons, toss in oil, and bake.' }
        ],
        serving_suggestion: { dish: 'Mash', instruction: 'Mix with potatoes.' },
        pairs_with: ['Potato', 'Butter', 'Nutmeg'],
        video: 'https://www.youtube.com/results?search_query=cut+rutabaga', recipe: 'https://www.google.com/search?q=rutabaga+recipes'
    },
    {
        id: 'parsnip', name: 'Parsnip', type: 'Root', priority: 6,
        description: 'White sweet carrot.',
        season: [9, 10, 11, 0, 1, 2],
        pre_prep: 'Peel.',
        prep_guides: [
            { title: 'Sticks', blurb: 'Roast', instruction: 'Cut into fry-like shapes. If the core is wide and woody, slice it out.' },
            { title: 'Coins', blurb: 'Soup', instruction: 'Slice into uniform rounds for simmering.' }
        ],
        serving_suggestion: { dish: 'Roasted', instruction: 'Sweet becomes savory.' },
        pairs_with: ['Carrot', 'Thyme', 'Honey'],
        video: 'https://www.youtube.com/results?search_query=roast+parsnips', recipe: 'https://www.google.com/search?q=parsnip+recipes'
    },
    {
        id: 'sweet_potato', name: 'Sweet Potato', type: 'Tuber', priority: 9,
        description: 'Orange, sweet.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Scrub.',
        prep_guides: [
            { title: 'Bake', blurb: 'Whole', instruction: 'Pierce skin all over with a fork (to vent steam), rub with oil, and bake whole.' },
            { title: 'Wedges', blurb: 'Fries', instruction: 'Cut lengthwise into slabs, then into wedges. Toss with cornstarch for crispiness.' },
            { title: 'Cube', blurb: 'Hash', instruction: 'Peel and dice into small cubes for quicker pan-frying.' }
        ],
        serving_suggestion: { dish: 'Fries', instruction: 'Wedges roasted high heat.' },
        pairs_with: ['Cinnamon', 'Marshmallow'],
        video: 'https://www.youtube.com/results?search_query=cut+sweet+potato', recipe: 'https://www.google.com/search?q=sweet+potato+recipes'
    },
    {
        id: 'yam', name: 'Yam', type: 'Tuber', priority: 4,
        description: 'Real yams are starchy/dry. Often just sweet potatoes.',
        season: [10, 11, 0],
        pre_prep: 'Scrub.',
        prep_guides: [
            { title: 'Boil', blurb: 'Soften', instruction: 'Peel tough skin and boil chunks until tender.' },
            { title: 'Cube', blurb: 'Stew', instruction: 'Dice into large chunks for long-simmered stews.' }
        ],
        serving_suggestion: { dish: 'Candied', instruction: 'Brown sugar glaze.' },
        pairs_with: ['Brown Sugar', 'Pecan'],
        video: 'https://www.youtube.com/results?search_query=cook+real+yam', recipe: 'https://www.google.com/search?q=yam+recipes'
    },
    {
        id: 'potato_russet', name: 'Potato (Russet)', type: 'Tuber', priority: 8,
        description: 'Baking potato.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Scrub.',
        prep_guides: [
            { title: 'Bake', blurb: 'Whole', instruction: 'Pierce with fork, rub with oil & salt. Place directly on rack (no foil) for crispy skin.' },
            { title: 'Mash', blurb: 'Fluffy', instruction: 'Peel, cut into chunks, boil, and mash. High starch makes them fluffy.' },
            { title: 'Fries', blurb: 'Classic', instruction: 'Cut into batons and soak in cold water for 30 mins to remove starch before frying.' }
        ],
        serving_suggestion: { dish: 'Baked Potato', instruction: 'Loaded with cheese/bacon.' },
        pairs_with: ['Sour Cream', 'Chives'],
        video: 'https://www.youtube.com/results?search_query=bake+russet', recipe: 'https://www.google.com/search?q=russet+potato+recipes'
    },
    {
        id: 'potato_yukon', name: 'Potato (Yukon Gold)', type: 'Tuber', priority: 8,
        description: 'Creamy yellow flesh.',
        season: [8, 9, 10, 11, 0, 1],
        pre_prep: 'Scrub.',
        prep_guides: [
            { title: 'Quarter', blurb: 'Roast', instruction: 'Halve or quarter. The skin is thin and tasty, so leave it on.' },
            { title: 'Mash', blurb: 'Creamy', instruction: 'Boil whole or cubed. Their buttery texture creates a rich mash.' }
        ],
        serving_suggestion: { dish: 'Mashed', instruction: 'Best texture for mash.' },
        pairs_with: ['Butter', 'Garlic'],
        video: 'https://www.youtube.com/results?search_query=yukon+gold+mash', recipe: 'https://www.google.com/search?q=yukon+gold+recipes'
    },
    {
        id: 'potato_red', name: 'Potato (Red)', type: 'Tuber', priority: 7,
        description: 'Waxy, holds shape.',
        season: [4, 5, 6, 7],
        pre_prep: 'Scrub.',
        prep_guides: [
            { title: 'Cube', blurb: 'Salad', instruction: 'Cut into bite-sized chunks and boil. They stay firm for potato salad.' },
            { title: 'Roast', blurb: 'Whole/Halve', instruction: 'Roast small ones whole or halved with herbs.' }
        ],
        serving_suggestion: { dish: 'Potato Salad', instruction: 'Mayo and celery.' },
        pairs_with: ['Dill', 'Mayo'],
        video: 'https://www.youtube.com/results?search_query=boil+red+potatoes', recipe: 'https://www.google.com/search?q=red+potato+recipes'
    },
    {
        id: 'potato_fingerling', name: 'Potato (Fingerling)', type: 'Tuber', priority: 7,
        description: 'Small, nutty.',
        season: [8, 9, 10],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Halve', blurb: 'Roast', instruction: 'Slice lengthwise to maximize surface area for crisping.' },
            { title: 'Whole', blurb: 'Boil', instruction: 'Boil gently until tender.' }
        ],
        serving_suggestion: { dish: 'Roasted', instruction: 'Crispy edges.' },
        pairs_with: ['Rosemary', 'Oil'],
        video: 'https://www.youtube.com/results?search_query=roast+fingerlings', recipe: 'https://www.google.com/search?q=fingerling+potato+recipes'
    },
    {
        id: 'onion_yellow', name: 'Onion (Yellow)', type: 'Bulb', priority: 8,
        description: 'All purpose.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Peel.',
        prep_guides: [
            { title: 'Dice', blurb: 'Cook', instruction: 'Halve through root, peel, make horizontal and vertical cuts (don\'t cut through root), then chop downward.' },
            { title: 'Slice', blurb: 'Caramelize', instruction: 'Trim ends, halve, and slice pole-to-pole (French cut) for strips that hold up while cooking.' }
        ],
        serving_suggestion: { dish: 'Sauté Base', instruction: 'Start almost every soup.' },
        pairs_with: ['Garlic', 'Carrot'],
        video: 'https://www.youtube.com/results?search_query=dice+onion', recipe: 'https://www.google.com/search?q=yellow+onion+recipes'
    },
    {
        id: 'onion_white', name: 'Onion (White)', type: 'Bulb', priority: 7,
        description: 'Sharp, crunchy.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Peel.',
        prep_guides: [
            { title: 'Dice', blurb: 'Raw', instruction: 'Finely dice for sprinkling on tacos or hot dogs.' },
            { title: 'Ring', blurb: 'Burger', instruction: 'Slice the whole onion crosswise into discs.' }
        ],
        serving_suggestion: { dish: 'Pico de Gallo', instruction: 'Tomato, onion, cilantro.' },
        pairs_with: ['Cilantro', 'Lime'],
        video: 'https://www.youtube.com/results?search_query=cut+white+onion', recipe: 'https://www.google.com/search?q=white+onion+recipes'
    },
    {
        id: 'onion_red', name: 'Onion (Red)', type: 'Bulb', priority: 7,
        description: 'Mild, sweet, colorful.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Peel.',
        prep_guides: [
            { title: 'Slice', blurb: 'Salad', instruction: 'Slice into thin half-moons for salads.' },
            { title: 'Pickle', blurb: 'Tacos', instruction: 'Soak slices in vinegar/lime for 15 mins to turn them bright pink and cut the bite.' },
            { title: 'Ring', blurb: 'Burger', instruction: 'Slice thick rings for burgers.' }
        ],
        serving_suggestion: { dish: 'Pickled', instruction: 'Vinegar makes them pink.' },
        pairs_with: ['Vinegar', 'Salad'],
        video: 'https://www.youtube.com/results?search_query=pickle+red+onion', recipe: 'https://www.google.com/search?q=red+onion+recipes'
    },
    {
        id: 'onion_sweet', name: 'Onion (Sweet)', type: 'Bulb', priority: 8,
        description: 'Vidalia/Walla Walla. High sugar.',
        season: [4, 5, 6, 7, 8],
        pre_prep: 'Peel.',
        prep_guides: [
            { title: 'Ring', blurb: 'Fry', instruction: 'Slice thick rings for battering and frying.' },
            { title: 'Dice', blurb: 'Relish', instruction: 'Dice for sweet relishes.' }
        ],
        serving_suggestion: { dish: 'Onion Rings', instruction: 'Batter and fry.' },
        pairs_with: ['Batter', 'Burger'],
        video: 'https://www.youtube.com/results?search_query=cut+sweet+onion', recipe: 'https://www.google.com/search?q=sweet+onion+recipes'
    },
    {
        id: 'shallot', name: 'Shallot', type: 'Bulb', priority: 7,
        description: 'Mild gourmet onion/garlic mix.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Peel.',
        prep_guides: [
            { title: 'Mince', blurb: 'Vinaigrette', instruction: 'Peel and make very fine grid cuts for a delicate mince.' },
            { title: 'Ring', blurb: 'Fry', instruction: 'Slice thinly crosswise into rings and fry until crispy.' }
        ],
        serving_suggestion: { dish: 'Vinaigrette', instruction: 'Mince into dressing.' },
        pairs_with: ['Vinegar', 'Oil'],
        video: 'https://www.youtube.com/results?search_query=mince+shallot', recipe: 'https://www.google.com/search?q=shallot+recipes'
    },
    {
        id: 'garlic', name: 'Garlic', type: 'Bulb', priority: 9,
        description: 'Essential flavor.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Separate.',
        prep_guides: [
            { title: 'Smash', blurb: 'Peel', instruction: 'Place flat side of knife over clove and bang with palm to crack skin for peeling.' },
            { title: 'Mince', blurb: 'Standard', instruction: 'Chop finely. Rock knife back and forth.' },
            { title: 'Paste', blurb: 'Strong', instruction: 'Mince, add salt, and smear against board with knife blade.' },
            { title: 'Slice', blurb: 'Chips', instruction: 'Slice paper thin (Goodfellas style) to melt in sauce.' }
        ],
        serving_suggestion: { dish: 'Roasted', instruction: 'Whole head in foil.' },
        pairs_with: ['Everything'],
        video: 'https://www.youtube.com/results?search_query=roast+garlic', recipe: 'https://www.google.com/search?q=garlic+recipes'
    },
    {
        id: 'green_onion', name: 'Scallion', type: 'Allium', priority: 7,
        description: 'Green onion.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Slice', blurb: 'Garnish', instruction: 'Thin rings. Use both white (onion flavor) and green (fresh herbs) parts.' },
            { title: 'Lengths', blurb: 'Grill', instruction: 'Keep whole or cut into 3-inch lengths to char on grill.' },
            { title: 'Bias', blurb: 'Fancy', instruction: 'Slice at a sharp angle for elongated, elegant strips.' }
        ],
        serving_suggestion: { dish: 'Garnish', instruction: 'Tops on everything.' },
        pairs_with: ['Egg', 'Soup'],
        video: 'https://www.youtube.com/results?search_query=cut+scallion', recipe: 'https://www.google.com/search?q=scallion+recipes'
    },
    {
        id: 'leek', name: 'Leek', type: 'Allium', priority: 7,
        description: 'Giant sweet onion.',
        season: [9, 10, 11, 0, 1, 2, 3, 4],
        pre_prep: 'Wash (Dirty).',
        prep_guides: [
            { title: 'Slice', blurb: 'Soup', instruction: 'Halve lengthwise, wash thoroughly between ALL layers (dirt hides there), then slice half-moons.' },
            { title: 'Fine', blurb: 'Melt', instruction: 'Slice very thinly and sauté slowly until they melt into butter.' }
        ],
        serving_suggestion: { dish: 'Potato Leek Soup', instruction: 'Classic puree.' },
        pairs_with: ['Potato', 'Cream'],
        video: 'https://www.youtube.com/results?search_query=clean+leek', recipe: 'https://www.google.com/search?q=leek+recipes'
    }
];
