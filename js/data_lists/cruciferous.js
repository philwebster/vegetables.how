export const cruciferous = [
    {
        id: 'broccoli', name: 'Broccoli', type: 'Cruciferous', priority: 8,
        description: 'Crowns and stalks.',
        season: [0, 1, 2, 3, 4, 5, 9, 10, 11],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Florets', blurb: 'Standard', instruction: 'Cut the main head into bite-sized florets. Trim the stem ends if they look dry.' },
            { title: 'Stem', blurb: 'Don\'t toss', instruction: 'The stem is sweet! Slice off the tough fibrous outer skin until you see the light green center, then slice into coins.' },
            { title: 'Steak', blurb: 'Roast/Grill', instruction: 'Cut the whole head vertically into thick 1-inch slabs. Great for grilling.' }
        ],
        serving_suggestion: { dish: 'Roasted', instruction: 'High heat char.' },
        pairs_with: ['Cheddar', 'Lemon'],
        video: 'https://www.youtube.com/results?search_query=cut+broccoli', recipe: 'https://www.google.com/search?q=broccoli+recipes'
    },
    {
        id: 'broccolini', name: 'Broccolini', type: 'Cruciferous', priority: 7,
        description: 'Long thin stalks.',
        season: [0, 1, 2, 3, 4, 5, 9, 10, 11],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Trim', blurb: 'Ends', instruction: 'Slice off the very bottom 1/2 inch of the stem, which can be dry.' },
            { title: 'Halve', blurb: 'Sauté', instruction: 'If the stalk is thick, slice it in half lengthwise so it cooks as fast as the florets.' }
        ],
        serving_suggestion: { dish: 'Sauté', instruction: 'Garlic and chili.' },
        pairs_with: ['Garlic', 'Chili'],
        video: 'https://www.youtube.com/results?search_query=cook+broccolini', recipe: 'https://www.google.com/search?q=broccolini+recipes'
    },
    {
        id: 'cauliflower', name: 'Cauliflower', type: 'Cruciferous', priority: 8,
        description: 'White curd.',
        season: [9, 10, 11, 0, 1, 2, 3],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Florets', blurb: 'Standard', instruction: 'Quarter the head, cut out the core diagonally, and snap/cut into florets.' },
            { title: 'Rice', blurb: 'Low Carb', instruction: 'Cut into chunks and pulse in a food processor (or grate) until it resembles rice grains.' },
            { title: 'Steaks', blurb: 'Main', instruction: 'Slice the whole head vertically near the center to get 2-3 solid slabs that hold together.' }
        ],
        serving_suggestion: { dish: 'Roasted', instruction: 'Curry powder.' },
        pairs_with: ['Curry', 'Cheese'],
        video: 'https://www.youtube.com/results?search_query=rice+cauliflower', recipe: 'https://www.google.com/search?q=cauliflower+recipes'
    },
    {
        id: 'romanesco', name: 'Romanesco', type: 'Cruciferous', priority: 5,
        description: 'Fractal green cauliflower.',
        season: [9, 10, 11, 0],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Florets', blurb: 'Fractals', instruction: 'Use a small knife to separate the cone-shaped florets carefully to preserve their beautiful shape.' },
            { title: 'Whole Roast', blurb: 'Showstopper', instruction: 'Trim the base so it sits flat, rub with oil/spices, and roast the entire head whole.' }
        ],
        serving_suggestion: { dish: 'Steam', instruction: 'Serve with butter to show shape.' },
        pairs_with: ['Butter', 'Nutmeg'],
        video: 'https://www.youtube.com/results?search_query=cut+romanesco', recipe: 'https://www.google.com/search?q=romanesco+recipes'
    },
    {
        id: 'brussels_sprouts', name: 'Brussels Sprouts', type: 'Cruciferous', priority: 9,
        description: 'Mini cabbages.',
        season: [9, 10, 11, 0, 1, 2],
        pre_prep: 'Trim.',
        prep_guides: [
            { title: 'Halve', blurb: 'Roast', instruction: 'Trim the woody stem end, peel off any yellow outer leaves, and cut in half vertically.' },
            { title: 'Shave', blurb: 'Raw Salad', instruction: 'Hold by the stem end and slice very thinly crosswise (or use a mandoline).' }
        ],
        serving_suggestion: { dish: 'Bacon', instruction: 'Roast with bacon.' },
        pairs_with: ['Bacon', 'Balsamic'],
        video: 'https://www.youtube.com/results?search_query=prep+brussels', recipe: 'https://www.google.com/search?q=brussels+sprouts+recipes'
    },
    {
        id: 'cabbage_green', name: 'Cabbage (Green)', type: 'Cruciferous', priority: 6,
        description: 'Cannonball.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Peel outer.',
        prep_guides: [
            { title: 'Shred', blurb: 'Slaw', instruction: 'Quarter the head, cut out the solid core diagonally, and slice the quarters into thin ribbons.' },
            { title: 'Wedge', blurb: 'Roast/Braise', instruction: 'Cut deeply through the core into wedges. Leave the core attached so the wedge stays solid while cooking.' },
            { title: 'Leaves', blurb: 'Roll', instruction: 'Carefully peel whole leaves off (blanching the whole head first helps) for stuffing.' }
        ],
        serving_suggestion: { dish: 'Slaw', instruction: 'Mayo dressing.' },
        pairs_with: ['Carrot', 'Mayo'],
        video: 'https://www.youtube.com/results?search_query=shred+cabbage', recipe: 'https://www.google.com/search?q=green+cabbage+recipes'
    },
    {
        id: 'cabbage_red', name: 'Cabbage (Red)', type: 'Cruciferous', priority: 6,
        description: 'Purple/Red.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Peel.',
        prep_guides: [
            { title: 'Shred', blurb: 'Slaw', instruction: 'Quarter, core, and slice very thinly. Wear gloves if you want to avoid purple fingers.' },
            { title: 'Chunk', blurb: 'Braise', instruction: 'Cut into large 2-inch chunks for slow-cooking stews; it holds its texture well.' }
        ],
        serving_suggestion: { dish: 'Braised', instruction: 'Apple and vinegar.' },
        pairs_with: ['Apple', 'Vinegar'],
        video: 'https://www.youtube.com/results?search_query=braise+red+cabbage', recipe: 'https://www.google.com/search?q=red+cabbage+recipes'
    },
    {
        id: 'cabbage_napa', name: 'Cabbage (Napa)', type: 'Cruciferous', priority: 5,
        description: 'Oblong Chinese cabbage.',
        season: [9, 10, 11, 0, 1, 2],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Chop', blurb: 'Stir fry', instruction: 'Slice the whole head crosswise into 1-inch thick ribbons.' },
            { title: 'Quarter', blurb: 'Kimchi', instruction: 'Slice lengthwise into quarters, rinse between layers, and salt brine for kimchi.' }
        ],
        serving_suggestion: { dish: 'Kimchi', instruction: 'Ferment it.' },
        pairs_with: ['Ginger', 'Chili'],
        video: 'https://www.youtube.com/results?search_query=cut+napa+cabbage', recipe: 'https://www.google.com/search?q=napa+cabbage+recipes'
    },
    {
        id: 'cabbage_savoy', name: 'Cabbage (Savoy)', type: 'Cruciferous', priority: 4,
        description: 'Crinkly leaves.',
        season: [9, 10, 11, 0, 1],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Leaves', blurb: 'Wrap', instruction: 'Peel off the textured leaves. They are flexible and perfect for low-carb taco shells or wraps.' },
            { title: 'Shred', blurb: 'Sauté', instruction: 'Quarter and slice thinly. The crinkles grab onto butter and sauces beautifully.' }
        ],
        serving_suggestion: { dish: 'Stuffed', instruction: 'Meat and rice filling.' },
        pairs_with: ['Pork', 'Rice'],
        video: 'https://www.youtube.com/results?search_query=prep+savoy+cabbage', recipe: 'https://www.google.com/search?q=savoy+cabbage+recipes'
    },
    {
        id: 'kohlrabi', name: 'Kohlrabi', type: 'Cruciferous', priority: 4,
        description: 'Alien turnip. Crisp stem.',
        season: [5, 6, 7, 9, 10],
        pre_prep: 'Peel thick skin.',
        prep_guides: [
            { title: 'Slice', blurb: 'Raw', instruction: 'You MUST peel the thick fibrous green skin until you hit the wet white center. Then slice into moons.' },
            { title: 'Matchstick', blurb: 'Salad', instruction: 'Peel deeply and slice into matchsticks for a crunchy apple-like slaw.' },
            { title: 'Cube', blurb: 'Roast', instruction: 'Peel and dice into cubes for roasting like a turnip.' }
        ],
        serving_suggestion: { dish: 'Slaw', instruction: 'Julienne with apple.' },
        pairs_with: ['Apple', 'Mustard'],
        video: 'https://www.youtube.com/results?search_query=peel+kohlrabi', recipe: 'https://www.google.com/search?q=kohlrabi+recipes'
    },
    {
        id: 'bok_choy', name: 'Bok Choy', type: 'Cruciferous', priority: 6,
        description: 'White stem, green leaf.',
        season: [0, 1, 2, 3, 4, 9, 10, 11],
        pre_prep: 'Wash base.',
        prep_guides: [
            { title: 'Halve', blurb: 'Braise', instruction: 'Slice baby bok choy in half lengthwise. Rinse dirt out of the center.' },
            { title: 'Separate', blurb: 'Stir Fry', instruction: 'For large bok choy, separate the stems from the leaves. Mince the stems (cook first) and shred the leaves (add last).' }
        ],
        serving_suggestion: { dish: 'Stir Fry', instruction: 'Garlic and ginger.' },
        pairs_with: ['Soy', 'Ginger'],
        video: 'https://www.youtube.com/results?search_query=clean+bok+choy', recipe: 'https://www.google.com/search?q=bok+choy+recipes'
    }
];
