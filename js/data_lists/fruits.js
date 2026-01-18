export const fruits = [
    {
        id: 'tomato_beefsteak', name: 'Tomato (Beefsteak)', type: 'Fruit (Veg)', priority: 10,
        description: 'Large slicing tomato. Juicy.',
        season: [6, 7, 8, 9],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Slice', blurb: 'Sandwiches', instruction: 'Slice horizontally (parallel to the equator) using a serrated knife to keep the seed pockets intact and prevent all the jelly from spilling out.' },
            { title: 'Wedge', blurb: 'Salads', instruction: 'Remove the core with a paring knife, then cut down through the center into even wedges.' },
            { title: 'Dice', blurb: 'Cooking', instruction: 'Cut into thick slices, stack them (or lay flat), and cut into a grid. For less liquid, use your finger to scoop out the jelly seeds before dicing.' }
        ],
        serving_suggestion: { dish: 'Sandwich', instruction: 'Mayo, salt, pepper.' },
        pairs_with: ['Basil', 'Mozzarella', 'Salt'],
        video: 'https://www.youtube.com/results?search_query=slice+tomato', recipe: 'https://www.google.com/search?q=tomato+recipes'
    },
    {
        id: 'tomato_cherry', name: 'Tomato (Cherry)', type: 'Fruit (Veg)', priority: 10,
        description: 'Sweet popping tomato.',
        season: [6, 7, 8, 9],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Halve', blurb: 'Salad', instruction: 'Slice individual tomatoes in half lengthwise. To cut many at once: place them continuously on a plate, put a second plate on top, and run a knife horizontally through the gap.' },
            { title: 'Whole', blurb: 'Roast/Snack', instruction: 'Leave them entirely whole. If roasting, they will burst and create their own sauce.' }
        ],
        serving_suggestion: { dish: 'Pasta', instruction: 'Burst in pan with oil.' },
        pairs_with: ['Garlic', 'Pasta', 'Basil'],
        video: 'https://www.youtube.com/results?search_query=cut+cherry+tomatoes', recipe: 'https://www.google.com/search?q=cherry+tomato+recipes'
    },
    {
        id: 'tomato_roma', name: 'Tomato (Roma)', type: 'Fruit (Veg)', priority: 9,
        description: 'Plum tomato. Paste/Sauce.',
        season: [6, 7, 8, 9],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Dice', blurb: 'Salsa/Bruschetta', instruction: 'Quarter the tomato lengthwise. Use a knife to slice out the seed pulp from each quarter, leaving just the firm flesh. Dice the flesh into small uniform squares.' },
            { title: 'Roast', blurb: 'Sauce', instruction: 'Halve lengthwise. Toss with oil and roast cut-side down on a baking sheet to concentrate the flavor.' }
        ],
        serving_suggestion: { dish: 'Salsa', instruction: 'Dice with onion/cilantro.' },
        pairs_with: ['Cilantro', 'Lime', 'Chili'],
        video: 'https://www.youtube.com/results?search_query=dice+roma+tomato', recipe: 'https://www.google.com/search?q=roma+tomato+recipes'
    },
    {
        id: 'tomato_grape', name: 'Tomato (Grape)', type: 'Fruit (Veg)', priority: 9,
        description: 'Crunchy sweet tomato.',
        season: [6, 7, 8, 9],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Whole', blurb: 'Snack', instruction: 'Rinse and serve whole. Great for raw snacking or veggie trays.' },
            { title: 'Halve', blurb: 'Salad', instruction: 'Slice lengthwise (pole to pole). Grape tomatoes are less watery than cherries, so they hold their shape better in salads.' }
        ],
        serving_suggestion: { dish: 'Snack', instruction: 'Raw.' },
        pairs_with: ['Dip', 'Cheese'],
        video: 'https://www.youtube.com/results?search_query=grape+tomato+uses', recipe: 'https://www.google.com/search?q=grape+tomato+recipes'
    },
    {
        id: 'tomato_heirloom', name: 'Tomato (Heirloom)', type: 'Fruit (Veg)', priority: 10,
        description: 'Ugly beautiful tomato. Best flavor.',
        season: [7, 8, 9],
        pre_prep: 'Rinse gently.',
        prep_guides: [
            { title: 'Slice', blurb: 'Carpaccio', instruction: 'Use a very sharp serrated knife to cut thick slab slices. Arrange flat on a platter to show off the marbling.' },
            { title: 'Wedge', blurb: 'Salad', instruction: 'Remove the hard core. Cut into large, irregular wedges (oblique cut) for a rustic salad.' }
        ],
        serving_suggestion: { dish: 'Caprese', instruction: 'Simple with good oil.' },
        pairs_with: ['Balsamic', 'Burrata'],
        video: 'https://www.youtube.com/results?search_query=cut+heirloom+tomato', recipe: 'https://www.google.com/search?q=heirloom+tomato+recipes'
    },
    {
        id: 'bell_pepper', name: 'Bell Pepper', type: 'Fruit (Veg)', priority: 8,
        description: 'Sweet crunch.',
        season: [6, 7, 8, 9, 10],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Dice', blurb: 'Sauté', instruction: 'Slice off the top and bottom. Make one slit down the side and roll the skin out flat like a carpet. Trim the white ribs. Dice the flat skin into squares.' },
            { title: 'Julienne', blurb: 'Stir Fry/Fajita', instruction: 'Remove the top, bottom, and seeds. Flatten the pepper skin and slice into long, thin matchsticks.' },
            { title: 'Rings', blurb: 'Salad/Burger', instruction: 'Slice the pepper crosswise from top to bottom. Pull the seed core out of the center of each ring.' },
            { title: 'Roast', blurb: 'Peel', instruction: 'Place whole pepper directly on a gas burner flame until black. Steam in a paper bag for 10 mins, then rub the charred skin off with a paper towel.' }
        ],
        serving_suggestion: { dish: 'Stuffed', instruction: 'Rice and meat.' },
        pairs_with: ['Onion', 'Rice'],
        video: 'https://www.youtube.com/results?search_query=cut+bell+pepper', recipe: 'https://www.google.com/search?q=bell+pepper+recipes'
    },
    {
        id: 'jalapeno', name: 'Jalapeño', type: 'Pepper', priority: 6,
        description: 'Medium heat.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Deseed', blurb: 'Lower Heat', instruction: 'Slice in half lengthwise. Use a small spoon to scrape out the white ribs and seeds (this is where the heat lives).' },
            { title: 'Mince', blurb: 'Spice', instruction: 'After deseeding, slice into thin strips, then cut crosswise into tiny pieces.' },
            { title: 'Rings', blurb: 'Pickle/Nachos', instruction: 'Slice the whole pepper crosswise into coins. Leave the seeds in if you want the heat!' }
        ],
        serving_suggestion: { dish: 'Popper', instruction: 'Cream cheese stuffed.' },
        pairs_with: ['Cream Cheese', 'Bacon'],
        video: 'https://www.youtube.com/results?search_query=deseed+jalapeno', recipe: 'https://www.google.com/search?q=jalapeno+recipes'
    },
    {
        id: 'serrano', name: 'Serrano', type: 'Pepper', priority: 5,
        description: 'Hotter than jalapeno.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Mince', blurb: 'Spice', instruction: 'For high heat, mince the whole pepper, seeds and all. For medium heat, halve and remove the seeds first.' },
            { title: 'Coins', blurb: 'Garnish', instruction: 'Slice extremely thin rounds to float on top of curries or tacos.' }
        ],
        serving_suggestion: { dish: 'Salsa', instruction: 'Fire roasted salsa.' },
        pairs_with: ['Tomatillo', 'Onion'],
        video: 'https://www.youtube.com/results?search_query=cut+serrano', recipe: 'https://www.google.com/search?q=serrano+pepper+recipes'
    },
    {
        id: 'poblano', name: 'Poblano', type: 'Pepper', priority: 6,
        description: 'Mild, dark green.',
        season: [6, 7, 8, 9],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Roast/Peel', blurb: 'Essential', instruction: 'Skin is tough; roast until black, steam in bag, peel.' },
            { title: 'Strips', blurb: 'Rajas', instruction: 'Slice roasted peppers into strips.' }
        ],
        serving_suggestion: { dish: 'Chile Relleno', instruction: 'Stuffed with cheese.' },
        pairs_with: ['Cheese', 'Corn'],
        video: 'https://www.youtube.com/results?search_query=roast+poblano', recipe: 'https://www.google.com/search?q=poblano+recipes'
    },
    {
        id: 'anaheim', name: 'Anaheim', type: 'Pepper', priority: 5,
        description: 'Mild long green pepper.',
        season: [6, 7, 8, 9],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Dice', blurb: 'Green Chili', instruction: 'Remove seeds and dice.' },
            { title: 'Roast', blurb: 'Flavor', instruction: 'Char skin for deeper flavor.' }
        ],
        serving_suggestion: { dish: 'Stew', instruction: 'Pork green stew.' },
        pairs_with: ['Pork', 'Tomatillo'],
        video: 'https://www.youtube.com/results?search_query=prep+anaheim', recipe: 'https://www.google.com/search?q=anaheim+pepper+recipes'
    },
    {
        id: 'habanero', name: 'Habanero', type: 'Pepper', priority: 4,
        description: 'Very HOT. Fruity.',
        season: [5, 6, 7, 8, 9],
        pre_prep: 'Gloves essential.',
        prep_guides: [
            { title: 'Mince', blurb: 'Careful', instruction: 'Remove seeds/placenta to reduce heat, then mince finely.' },
            { title: 'Whole', blurb: 'Infuse', instruction: 'Drop whole into stew/salsa, remove later.' }
        ],
        serving_suggestion: { dish: 'Hot Sauce', instruction: 'Ferment with carrots.' },
        pairs_with: ['Mango', 'Carrot'],
        video: 'https://www.youtube.com/results?search_query=cut+habanero', recipe: 'https://www.google.com/search?q=habanero+recipes'
    },
    {
        id: 'cucumber_slicing', name: 'Cucumber (Slicing)', type: 'Fruit (Veg)', priority: 8,
        description: 'Thick dark skin. Waxy.',
        season: [5, 6, 7, 8, 9],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Peel', blurb: 'Bitter', instruction: 'The skin is often thick and bitter. Peel it partially (stripes) or fully.' },
            { title: 'Seed', blurb: 'Watery', instruction: 'Becomes watery in salads. Halve lengthwise and use a spoon to scrape out the seed channel.' },
            { title: 'Slice', blurb: 'Salad', instruction: 'Once prepared, slice into half-moons.' }
        ],
        serving_suggestion: { dish: 'Salad', instruction: 'Vinegar and sugar.' },
        pairs_with: ['Vinegar', 'Dill'],
        video: 'https://www.youtube.com/results?search_query=deseed+cucumber', recipe: 'https://www.google.com/search?q=cucumber+recipes'
    },
    {
        id: 'cucumber_english', name: 'Cucumber (English)', type: 'Fruit (Veg)', priority: 8,
        description: 'Long, thin skin. Seedless.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Rinse (plastic wrap).',
        prep_guides: [
            { title: 'Coins', blurb: 'Salad', instruction: 'No peeling needed. Slice into thin rounds.' },
            { title: 'Spears', blurb: 'Dip', instruction: 'Cut into long quarters lengthwise for dipping.' },
            { title: 'Smash', blurb: 'Asian Salad', instruction: 'Lay knife flat on chunks and smack to shatter the flesh, then dress.' }
        ],
        serving_suggestion: { dish: 'Sandwich', instruction: 'Cream cheese and dill.' },
        pairs_with: ['Cream Cheese', 'Salmon'],
        video: 'https://www.youtube.com/results?search_query=smash+cucumber', recipe: 'https://www.google.com/search?q=english+cucumber+recipes'
    },
    {
        id: 'cucumber_persian', name: 'Cucumber (Persian)', type: 'Fruit (Veg)', priority: 8,
        description: 'Mini, crunchy.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Snack', blurb: 'Whole', instruction: 'Small enough to eat whole or just halved.' },
            { title: 'Chunk', blurb: 'Salad', instruction: 'Cut into oblique (roll cut) chunks for crunch.' }
        ],
        serving_suggestion: { dish: 'Snack', instruction: 'Plain with salt.' },
        pairs_with: ['Hummus', 'Salt'],
        video: 'https://www.youtube.com/results?search_query=persian+cucumber+salad', recipe: 'https://www.google.com/search?q=persian+cucumber+recipes'
    },
    {
        id: 'zucchini', name: 'Zucchini', type: 'Summer Squash', priority: 9,
        description: 'Green summer squash.',
        season: [5, 6, 7, 8],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Coins', blurb: 'Sauté', instruction: 'Slice into uniform rounds. Don\'t cut too thin or they turn to mush.' },
            { title: 'Spears', blurb: 'Grill', instruction: 'Quarter lengthwise into long spears. Season and grill.' },
            { title: 'Noodles', blurb: 'Zoodles', instruction: 'Use a spiralizer or julienne peeler to make long noodle strands.' },
            { title: 'Grate', blurb: 'Bread', instruction: 'Grate on a box grater for baking. Squeeze out liquid first.' }
        ],
        serving_suggestion: { dish: 'Sauté', instruction: 'High heat, don\'t overcook.' },
        pairs_with: ['Garlic', 'Parmesan'],
        video: 'https://www.youtube.com/results?search_query=cut+zucchini', recipe: 'https://www.google.com/search?q=zucchini+recipes'
    },
    {
        id: 'yellow_squash', name: 'Yellow Squash', type: 'Summer Squash', priority: 8,
        description: 'Yellow straight/crookneck.',
        season: [5, 6, 7, 8],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Half-Moons', blurb: 'Sauté', instruction: 'Halve lengthwise then slice crosswise.' },
            { title: 'Casserole', blurb: 'Baked', instruction: 'Slice into rounds and boil/steam before mixing.' }
        ],
        serving_suggestion: { dish: 'Casserole', instruction: 'Cheese and crackers.' },
        pairs_with: ['Onion', 'Cheese'],
        video: 'https://www.youtube.com/results?search_query=cut+yellow+squash', recipe: 'https://www.google.com/search?q=yellow+squash+recipes'
    },
    {
        id: 'eggplant_globe', name: 'Eggplant (Globe)', type: 'Fruit (Veg)', priority: 7,
        description: 'Large purple teardrop.',
        season: [6, 7, 8, 9],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Sweat', blurb: 'Bitterness', instruction: 'Cut into slices/cubes, salt heavily, and let sit 20m to draw out bitter water. Rinse and dry.' },
            { title: 'Rounds', blurb: 'Parm', instruction: 'Slice into thick 1-inch discs for breading.' },
            { title: 'Cube', blurb: 'Ratatouille', instruction: 'Cut into 1-inch cubes for stewing.' }
        ],
        serving_suggestion: { dish: 'Parmesan', instruction: 'Breaded and fried.' },
        pairs_with: ['Tomato', 'Mozzarella', 'Basil'],
        video: 'https://www.youtube.com/results?search_query=prepare+eggplant', recipe: 'https://www.google.com/search?q=eggplant+recipes'
    },
    {
        id: 'eggplant_japanese', name: 'Eggplant (Japanese)', type: 'Fruit (Veg)', priority: 7,
        description: 'Long thin purple.',
        season: [6, 7, 8, 9],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Roll Cut', blurb: 'Stir Fry', instruction: 'Cut on diagonal, roll 90 degrees, cut again. Maximizes surface area.' },
            { title: 'Halve', blurb: 'Grill', instruction: 'Slice lengthwise, score the flesh in a cross-hatch, and glaze while roasting.' }
        ],
        serving_suggestion: { dish: 'Miso Glazed', instruction: 'Roast with miso.' },
        pairs_with: ['Miso', 'Sesame', 'Ginger'],
        video: 'https://www.youtube.com/results?search_query=cut+japanese+eggplant', recipe: 'https://www.google.com/search?q=japanese+eggplant+recipes'
    },
    {
        id: 'tomatillo', name: 'Tomatillo', type: 'Fruit (Veg)', priority: 6,
        description: 'Green husk tomato.',
        season: [5, 6, 7, 8, 9, 10],
        pre_prep: 'Remove husk.',
        prep_guides: [
            { title: 'De-husk', blurb: 'Sticky', instruction: 'Peel off the papery husk. Rinse well to remove the sticky residue on the skin.' },
            { title: 'Halve', blurb: 'Roast', instruction: 'Cut in half and broil until blackened.' }
        ],
        serving_suggestion: { dish: 'Salsa Verde', instruction: 'Roast and blend.' },
        pairs_with: ['Cilantro', 'Onion', 'Chili'],
        video: 'https://www.youtube.com/results?search_query=prep+tomatillo', recipe: 'https://www.google.com/search?q=tomatillo+recipes'
    },
    {
        id: 'green_beans', name: 'Green Beans', type: 'Legume', priority: 8,
        description: 'String beans.',
        season: [5, 6, 7, 8, 9],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Trim', blurb: 'Essential', instruction: 'Line them up in a handful and slice off the stem ends (the woody part). The tail end is fine to eat.' },
            { title: 'Blanch', blurb: 'Technique', instruction: 'Boil for 3-4 mins until bright green, then plunge immediately into ice water to stop cooking.' }
        ],
        serving_suggestion: { dish: 'Almondine', instruction: 'Butter and almonds.' },
        pairs_with: ['Almond', 'Butter'],
        video: 'https://www.youtube.com/results?search_query=trim+beans', recipe: 'https://www.google.com/search?q=green+beans+recipes'
    },
    {
        id: 'wax_beans', name: 'Wax Beans', type: 'Legume', priority: 6,
        description: 'Yellow green beans.',
        season: [6, 7, 8],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Trim', blurb: 'Ends', instruction: 'Snip off the tough stem ends.' },
            { title: 'Blanch', blurb: 'Technique', instruction: 'Brief boil then chill to keep texture crisp-tender.' }
        ],
        serving_suggestion: { dish: 'Salad', instruction: 'Bean salad.' },
        pairs_with: ['Vinegar', 'Onion'],
        video: 'https://www.youtube.com/results?search_query=wax+beans', recipe: 'https://www.google.com/search?q=wax+beans+recipes'
    },
    {
        id: 'baby_corn', name: 'Baby Corn', type: 'Grain/Veg', priority: 4,
        description: 'Tiny cob.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Drain (usually canned).',
        prep_guides: [
            { title: 'Whole', blurb: 'Stir fry', instruction: 'Leave whole for best texture and appearance in stir fries.' },
            { title: 'Bias', blurb: 'Salad', instruction: 'Slice diagonally to expose the beautiful cross-section.' }
        ],
        serving_suggestion: { dish: 'Stir Fry', instruction: 'Add texture.' },
        pairs_with: ['Soy', 'Ginger'],
        video: 'https://www.youtube.com/results?search_query=cook+baby+corn', recipe: 'https://www.google.com/search?q=baby+corn+recipes'
    },
    {
        id: 'avocado', name: 'Avocado', type: 'Fruit (Veg)', priority: 8,
        description: 'Creamy fat.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Halve & Pit', blurb: 'Open', instruction: 'Cut lengthwise around the pit. Twist halves to separate. Carefully strike the pit with a knife blade, twist, and remove.' },
            { title: 'Score', blurb: 'Dice', instruction: 'With the flesh still in the shell, slice a grid pattern. Use a spoon to scoop out perfect cubes.' },
            { title: 'Slice', blurb: 'Toast', instruction: 'Scoop out the whole half with a spoon, place flat side down, and slice thinly.' }
        ],
        serving_suggestion: { dish: 'Toast', instruction: 'Mash on bread.' },
        pairs_with: ['Toast', 'Salt'],
        video: 'https://www.youtube.com/results?search_query=safe+avocado+cut', recipe: 'https://www.google.com/search?q=avocado+recipes'
    },
    {
        id: 'fava_beans', name: 'Fava Beans', type: 'Legume', priority: 6,
        description: 'Broad beans. Labor of love.',
        season: [3, 4, 5],
        pre_prep: 'Shell/Peel.',
        prep_guides: [
            { title: 'Double Shell', blurb: 'Prep', instruction: 'Shell from pod, blanch for 30s, then peel the waxy outer skin from each bean.' }
        ],
        serving_suggestion: { dish: 'Falafel', instruction: 'Traditional base.' },
        pairs_with: ['Pecorino', 'Mint', 'Lemon'],
        video: 'https://www.youtube.com/results?search_query=prep+fava+beans', recipe: 'https://www.google.com/search?q=fava+bean+recipes'
    },
    {
        id: 'squash_butternut', name: 'Squash (Butternut)', type: 'Winter Squash', priority: 8,
        description: 'Sweet, nutty, orange flesh.',
        season: [8, 9, 10, 11, 0, 1],
        pre_prep: 'Peel.',
        prep_guides: [
            { title: 'Cube', blurb: 'Roast', instruction: 'Peel skin, scoop seeds, dice.' },
            { title: 'Halve', blurb: 'Roast', instruction: 'Cut lengthwise, scoop seeds, roast cut side down.' }
        ],
        serving_suggestion: { dish: 'Soup', instruction: 'Puree with sage.' },
        pairs_with: ['Sage', 'Nutmeg', 'Maple'],
        video: 'https://www.youtube.com/results?search_query=butternut+squash+prep', recipe: 'https://www.google.com/search?q=butternut+squash+recipes'
    },
    {
        id: 'squash_acorn', name: 'Squash (Acorn)', type: 'Winter Squash', priority: 7,
        description: 'Deep ridges, sweet.',
        season: [8, 9, 10, 11, 0],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Rings', blurb: 'Roast', instruction: 'Slice into rings (flower shape), roast with skin on.' },
            { title: 'Halve', blurb: 'Stuff', instruction: 'Halve and stuff center.' }
        ],
        serving_suggestion: { dish: 'Stuffed', instruction: 'Rice and sausage.' },
        pairs_with: ['Brown Sugar', 'Sausage'],
        video: 'https://www.youtube.com/results?search_query=acorn+squash+prep', recipe: 'https://www.google.com/search?q=acorn+squash+recipes'
    },
    {
        id: 'pumpkin', name: 'Pumpkin', type: 'Winter Squash', priority: 7,
        description: 'Sugar pie variety (not carving).',
        season: [8, 9, 10, 11],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Roast', blurb: 'Puree', instruction: 'Halve, clean seeds, roast until soft for pie.' },
            { title: 'Cube', blurb: 'Curry', instruction: 'Peel and cube for stews.' }
        ],
        serving_suggestion: { dish: 'Pie', instruction: 'Custard tart.' },
        pairs_with: ['Cinnamon', 'Nutmeg', 'Ginger'],
        video: 'https://www.youtube.com/results?search_query=sugar+pumpkin+prep', recipe: 'https://www.google.com/search?q=pumpkin+recipes'
    }
];
