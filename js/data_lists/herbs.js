export const herbs = [
    {
        id: 'basil', name: 'Basil', type: 'Herb', priority: 0,
        description: 'Sweet, aromatic herb. Key for Italian & Thai cooking.',
        season: [5, 6, 7, 8],
        pre_prep: 'Wash gently and dry completely. Water causes black spots.',
        prep_guides: [
            { title: 'Chiffonade', blurb: 'Thin ribbons', instruction: 'Stack several leaves on top of each other, roll them up tightly like a cigar, and slice crosswise into thin ribbons.' },
            { title: 'Tear', blurb: 'Salads', instruction: 'Tear leaves by hand instead of cutting to prevent edges from turning black/bruising.' },
            { title: 'Whole', blurb: 'Garnish', instruction: 'Pick small, perfect leaves from the top of the bunch to use as a whole garnish.' }
        ],
        serving_suggestion: { dish: 'Caprese', instruction: 'Layer with tomato and mozzarella.' },
        pairs_with: ['Tomato', 'Mozzarella', 'Pine Nuts'],
        video: 'https://www.youtube.com/results?search_query=how+to+cut+basil', recipe: 'https://www.google.com/search?q=basil+recipes'
    },
    {
        id: 'cilantro', name: 'Cilantro', type: 'Herb', priority: 0,
        description: 'Bright, citrusy herb. Love it or hate it.',
        season: [0, 1, 2, 3, 4, 10, 11],
        pre_prep: 'Wash roots/stems well.',
        prep_guides: [
            { title: 'Chop', blurb: 'Stems & Leaves', instruction: 'The stems are soft and packed with flavor. Chop the upper stems along with the leaves.' },
            { title: 'Pick', blurb: 'Garnish', instruction: 'Pick individual whole leaves for a prettier taco garnish.' }
        ],
        serving_suggestion: { dish: 'Guacamole', instruction: 'Fold into mashed avocado with lime.' },
        pairs_with: ['Lime', 'Avocado', 'Chili'],
        video: 'https://www.youtube.com/results?search_query=chop+cilantro', recipe: 'https://www.google.com/search?q=cilantro+recipes'
    },
    {
        id: 'parsley', name: 'Parsley', type: 'Herb', priority: 0,
        description: 'Fresh, grassy herb. Flat-leaf (Italian) or Curly.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Rinse well.',
        prep_guides: [
            { title: 'Mince', blurb: 'Finely chopped', instruction: 'Bunch the leaves into a tight ball and rock your knife over them repeatedly until fine.' },
            { title: 'Rough Chop', blurb: 'Rustic', instruction: 'Run knife through leaves once or twice for larger pieces in salads.' }
        ],
        serving_suggestion: { dish: 'Tabbouleh', instruction: 'Bulgur salad loaded with chopped parsley.' },
        pairs_with: ['Lemon', 'Garlic', 'Butter'],
        video: 'https://www.youtube.com/results?search_query=chop+parsley', recipe: 'https://www.google.com/search?q=parsley+recipes'
    },
    {
        id: 'mint', name: 'Mint', type: 'Herb', priority: 0,
        description: 'Refreshing cool herb.',
        season: [4, 5, 6, 7, 8],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Chiffonade', blurb: 'Ribbons', instruction: 'Stack leaves, roll up, and slice thin ribbons for salads or desserts.' },
            { title: 'Bruise', blurb: 'Cocktails', instruction: 'Clap the leaves between your hands to release oils before garnishing drinks.' }
        ],
        serving_suggestion: { dish: 'Mint Tea', instruction: 'Steep fresh leaves in hot water.' },
        pairs_with: ['Lamb', 'Chocolate', 'Lime'],
        video: 'https://www.youtube.com/results?search_query=prepare+mint', recipe: 'https://www.google.com/search?q=mint+recipes'
    },
    {
        id: 'rosemary', name: 'Rosemary', type: 'Herb', priority: 0,
        description: 'Piney, woody herb.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Strip', blurb: 'Remove leaves', instruction: 'Hold the tip and run your fingers down the stem against the grain to zip off the needles.' },
            { title: 'Mince', blurb: 'Break down', instruction: 'The needles are tough, so mince them very finely unless roasting for a long time.' },
            { title: 'Whole Sprig', blurb: 'Infuse', instruction: 'Add the whole branch to a pan to flavor butter/oil, then remove.' }
        ],
        serving_suggestion: { dish: 'Roasted Potatoes', instruction: 'Toss needles with potatoes and oil.' },
        pairs_with: ['Lamb', 'Potato', 'Chicken'],
        video: 'https://www.youtube.com/results?search_query=chop+rosemary', recipe: 'https://www.google.com/search?q=rosemary+recipes'
    },
    {
        id: 'thyme', name: 'Thyme', type: 'Herb', priority: 0,
        description: 'Tiny leaves, earthy flavor.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Strip', blurb: 'Tiny leaves', instruction: 'Pinch the sprig at the top and slide fingers down to strip the leaves.' },
            { title: 'Whole Sprig', blurb: 'Infuse', instruction: 'Toss untrimmed sprigs into soups or roasts and fish out the woody stems later.' }
        ],
        serving_suggestion: { dish: 'Butter Baste', instruction: 'Add whole sprigs to pan with butter when searing steak.' },
        pairs_with: ['Chicken', 'Mushroom', 'Butter'],
        video: 'https://www.youtube.com/results?search_query=leaves+thyme', recipe: 'https://www.google.com/search?q=thyme+recipes'
    },
    {
        id: 'oregano', name: 'Oregano', type: 'Herb', priority: 0,
        description: 'Pungent, savory herb.',
        season: [5, 6, 7, 8],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Strip', blurb: 'Woddier stems', instruction: 'Hold the top and zip leaves down the stem.' },
            { title: 'Chop', blurb: 'Sauces', instruction: 'Pile the leaves and run a knife through them.' }
        ],
        serving_suggestion: { dish: 'Greek Salad', instruction: 'Sprinkle fresh leaves over feta and tomatoes.' },
        pairs_with: ['Tomato', 'Feta', 'Lemon'],
        video: 'https://www.youtube.com/results?search_query=chop+oregano', recipe: 'https://www.google.com/search?q=oregano+recipes'
    },
    {
        id: 'dill', name: 'Dill', type: 'Herb', priority: 0,
        description: 'Feathery, grassy, tangy.',
        season: [4, 5, 6, 7, 8, 9],
        pre_prep: 'Rinse gentle.',
        prep_guides: [
            { title: 'Chop', blurb: 'Fronds', instruction: 'Roughly chop the feathery fronds. Use the thicker stems for stocks or pickles.' },
            { title: 'Pick', blurb: 'Garnish', instruction: 'Pick small feathery tufts for garnishing salmon or potato salad.' }
        ],
        serving_suggestion: { dish: 'Salmon', instruction: 'Top baked salmon with chopped dill and lemon.' },
        pairs_with: ['Salmon', 'Cucumber', 'Yogurt'],
        video: 'https://www.youtube.com/results?search_query=chop+dill', recipe: 'https://www.google.com/search?q=dill+recipes'
    },
    {
        id: 'sage', name: 'Sage', type: 'Herb', priority: 0,
        description: 'Soft, fuzzy leaves. Savory.',
        season: [9, 10, 11, 0, 1],
        pre_prep: 'Do not wash until use.',
        prep_guides: [
            { title: 'Chiffonade', blurb: 'Strips', instruction: 'Stack large leaves and slice into ribbons.' },
            { title: 'Whole (Fried)', blurb: 'Crispy', instruction: 'Fry whole leaves in hot butter until crisp.' }
        ],
        serving_suggestion: { dish: 'Brown Butter', instruction: 'Fry whole leaves in butter until crisp.' },
        pairs_with: ['Squash', 'Pork', 'Butter'],
        video: 'https://www.youtube.com/results?search_query=chop+sage', recipe: 'https://www.google.com/search?q=sage+recipes'
    },
    {
        id: 'chives', name: 'Chives', type: 'Herb', priority: 0,
        description: 'Mild onion grass.',
        season: [3, 4, 5, 6, 7, 8, 9],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Snip', blurb: 'Use shears', instruction: 'Hold the bunch and snip into tiny rings with kitchen scissors.' },
            { title: 'Mince', blurb: 'Knife', instruction: 'Use a rubber band to hold the bunch, then slice very thinly with a knife.' }
        ],
        serving_suggestion: { dish: 'Baked Potato', instruction: 'Top with sour cream and chives.' },
        pairs_with: ['Potato', 'Egg', 'Cream Cheese'],
        video: 'https://www.youtube.com/results?search_query=chop+chives', recipe: 'https://www.google.com/search?q=chives+recipes'
    },
    {
        id: 'bay_leaves', name: 'Bay Leaves', type: 'Herb', priority: 0,
        description: 'Aromatic leaf. Remove before eating.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Whole', blurb: 'Simmer', instruction: 'Add whole leaf to soups/stews/sauces. Remember to fish it out before serving.' },
            { title: 'Crush', blurb: 'Release oil', instruction: 'Crush dried leaves in your hand or grinder for spice rubs.' }
        ],
        serving_suggestion: { dish: 'Soup Stock', instruction: 'Simmer with onions and carrots.' },
        pairs_with: ['Soup', 'Stew', 'Beans'],
        video: 'https://www.youtube.com/results?search_query=fresh+bay+leaves', recipe: 'https://www.google.com/search?q=bay+leaf+recipes'
    },
    {
        id: 'tarragon', name: 'Tarragon', type: 'Herb', priority: 0,
        description: 'Anise/licorice flavor.',
        season: [4, 5, 6, 7, 8],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Strip', blurb: 'Leaves only', instruction: 'Hold the top and pull leaves down the stem.' },
            { title: 'Chop', blurb: 'Sauces', instruction: 'Bruise and chop slightly; flavor is strong.' }
        ],
        serving_suggestion: { dish: 'Chicken Salad', instruction: 'Mix into mayo for chicken salad.' },
        pairs_with: ['Chicken', 'Egg', 'Mustard'],
        video: 'https://www.youtube.com/results?search_query=prep+tarragon', recipe: 'https://www.google.com/search?q=tarragon+recipes'
    },
    {
        id: 'marjoram', name: 'Marjoram', type: 'Herb', priority: 0,
        description: 'Floral, sweet oregano cousin.',
        season: [6, 7, 8],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Chop', blurb: 'Finishing', instruction: 'Add at the very end of cooking. Heat destroys its delicate flavor.' }
        ],
        serving_suggestion: { dish: 'Poultry', instruction: 'Rub under skin of chicken.' },
        pairs_with: ['Chicken', 'Tomato', 'Eggplant'],
        video: 'https://www.youtube.com/results?search_query=marjoram+uses', recipe: 'https://www.google.com/search?q=marjoram+recipes'
    },
    {
        id: 'lemongrass', name: 'Lemongrass', type: 'Herb', priority: 0,
        description: 'Citrusy woody stalk.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Remove dry outer layers.',
        prep_guides: [
            { title: 'Bruise', blurb: 'Release oil', instruction: 'Smash the stalk with the heavy back of a knife to open it up for steeping.' },
            { title: 'Mince', blurb: 'Curry Paste', instruction: 'Slice the soft white core (bottom 3 inches) extremely thinly.' }
        ],
        serving_suggestion: { dish: 'Curry Paste', instruction: 'Mince the soft inner core for pastes.' },
        pairs_with: ['Ginger', 'Chili', 'Coconut Milk'],
        video: 'https://www.youtube.com/results?search_query=prep+lemongrass', recipe: 'https://www.google.com/search?q=lemongrass+recipes'
    },
    {
        id: 'thai_basil', name: 'Thai Basil', type: 'Herb', priority: 0,
        description: 'Spicy anise-flavor basil. Purple stems.',
        season: [6, 7, 8, 9],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Whole Leaves', blurb: 'Garnish', instruction: 'Pick whole leaves and stir into curry just before serving.' },
            { title: 'Flowering Tops', blurb: 'Edible', instruction: 'The purple flowers are edible and make a great garnish.' }
        ],
        serving_suggestion: { dish: 'Green Curry', instruction: 'Stir in at the very end.' },
        pairs_with: ['Curry', 'Chili', 'Lime'],
        video: 'https://www.youtube.com/results?search_query=thai+basil+uses', recipe: 'https://www.google.com/search?q=thai+basil+recipes'
    }
];
