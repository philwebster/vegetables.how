export const greens = [
    {
        id: 'lettuce_romaine', name: 'Lettuce (Romaine)', type: 'Leafy Green', priority: 6,
        description: 'Crunchy, sturdy leaves.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Wash well.',
        prep_guides: [
            { title: 'Chop', blurb: 'Salad', instruction: 'Slice the head vertically into halves or quarters, then chop crosswise to create bite-sized ribbons.' },
            { title: 'Leaves', blurb: 'Wraps/Boats', instruction: 'Cut off the root end and separate the leaves gently. Keep them whole for using as taco boats or burger buns.' },
            { title: 'Grill', blurb: 'Whole Heart', instruction: 'Slice the heart in half lengthwise (leaving the root attached to hold it together). Brush with oil and sear cut-side down.' }
        ],
        serving_suggestion: { dish: 'Caesar Salad', instruction: 'Toss with parmesan, croutons, and creamy dressing.' },
        pairs_with: ['Parmesan', 'Lemon', 'Croutons'],
        video: 'https://www.youtube.com/results?search_query=cut+romaine', recipe: 'https://www.google.com/search?q=romaine+lettuce+recipes'
    },
    {
        id: 'lettuce_iceberg', name: 'Lettuce (Iceberg)', type: 'Leafy Green', priority: 5,
        description: 'Crisp, watery head.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Remove outer wilted leaves.',
        prep_guides: [
            { title: 'Wedge', blurb: 'Classic', instruction: 'Remove the loose outer leaves. Slice the head in half through the core, then cut each half into two or three large wedges.' },
            { title: 'Shred', blurb: 'Tacos/Sub', instruction: 'Halve the head and place cut-side down. Slice deeply vertical cuts, then slice thinly crosswise to create shredded lettuce.' },
            { title: 'Cup', blurb: 'Wrap', instruction: 'Core the head by smashing the root stem and pulling it out. Run water into the hole to separate leaves, then carefully peel them off whole.' }
        ],
        serving_suggestion: { dish: 'Wedge Salad', instruction: 'Top wedge with blue cheese and bacon.' },
        pairs_with: ['Blue Cheese', 'Bacon', 'Tomato'],
        video: 'https://www.youtube.com/results?search_query=cut+iceberg', recipe: 'https://www.google.com/search?q=iceberg+lettuce+recipes'
    },
    {
        id: 'lettuce_butter', name: 'Lettuce (Butter)', type: 'Leafy Green', priority: 5,
        description: 'Soft, tender leaves. Bibb/Boston.',
        season: [3, 4, 5, 9, 10],
        pre_prep: 'Gentle wash.',
        prep_guides: [
            { title: 'Whole Leaf', blurb: 'Cups', instruction: 'Cut the small root end off. Gently peel away the cup-shaped leaves one by one. Great for storing chicken salad.' },
            { title: 'Tear', blurb: 'Salad', instruction: 'Tear the delicate leaves by hand into bite-sized pieces. Cutting with a metal knife can sometimes cause the edges to brown faster.' }
        ],
        serving_suggestion: { dish: 'Lettuce Wraps', instruction: 'Fill with chicken or tofu.' },
        pairs_with: ['Chicken', 'Vinaigrette'],
        video: 'https://www.youtube.com/results?search_query=butter+lettuce+wraps', recipe: 'https://www.google.com/search?q=butter+lettuce+recipes'
    },
    {
        id: 'lettuce_green_leaf', name: 'Lettuce (Green Leaf)', type: 'Leafy Green', priority: 5,
        description: 'Ruffled loose leaves.',
        season: [3, 4, 5, 6, 7, 8, 9, 10],
        pre_prep: 'Wash sand out.',
        prep_guides: [
            { title: 'Tear', blurb: 'Salad', instruction: 'Tear the ruffled leaves by hand for salads to keep them fluffy.' },
            { title: 'Bunch', blurb: 'Sandwich', instruction: 'For sandwiches, fold the large leaves over themselves to fit the bread.' }
        ],
        serving_suggestion: { dish: 'Sandwich', instruction: 'Add crunch to burgers.' },
        pairs_with: ['Tomato', 'Cucumber'],
        video: 'https://www.youtube.com/results?search_query=wash+green+leaf', recipe: 'https://www.google.com/search?q=green+leaf+lettuce+recipes'
    },
    {
        id: 'lettuce_red_leaf', name: 'Lettuce (Red Leaf)', type: 'Leafy Green', priority: 5,
        description: 'Ruffled with red tips. Perishable.',
        season: [3, 4, 5, 6, 7, 8, 9, 10],
        pre_prep: 'Wash carefully.',
        prep_guides: [
            { title: 'Tear', blurb: 'Salad', instruction: 'Tear gently; adds nice color contrast.' }
        ],
        serving_suggestion: { dish: 'Mixed Salad', instruction: 'Mix with green leaf for color.' },
        pairs_with: ['Vinaigrette', 'Seeds'],
        video: 'https://www.youtube.com/results?search_query=red+leaf+lettuce', recipe: 'https://www.google.com/search?q=red+leaf+lettuce+recipes'
    },
    {
        id: 'spinach', name: 'Spinach', type: 'Leafy Green', priority: 7,
        description: 'Dark green, iron rich.',
        season: [2, 3, 4, 5, 9, 10, 11],
        pre_prep: 'Wash well (sandy).',
        prep_guides: [
            { title: 'Stem', blurb: 'Remove', instruction: 'Fold the leaf in half lengthwise and pull the stem down towards the leaf tip to zip it off.' },
            { title: 'Chiffonade', blurb: 'Garnish/Soup', instruction: 'Stack several leaves, roll them up tightly, and slice into thin ribbons for garnishing soups or pasta.' }
        ],
        serving_suggestion: { dish: 'Sautéed', instruction: 'Wilt with garlic and oil.' },
        pairs_with: ['Garlic', 'Lemon', 'Egg'],
        video: 'https://www.youtube.com/results?search_query=cook+spinach', recipe: 'https://www.google.com/search?q=spinach+recipes'
    },
    {
        id: 'arugula', name: 'Arugula', type: 'Leafy Green', priority: 6,
        description: 'Peppery, spicy green.',
        season: [3, 4, 5, 9, 10],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Whole', blurb: 'Salad', instruction: 'Usually served whole. Just pick through and remove any yellowed leaves or tough long stems.' },
            { title: 'Wilt', blurb: 'Pasta', instruction: 'No prep needed. Just toss the whole leaves into hot pasta or soup vertically seconds before serving.' }
        ],
        serving_suggestion: { dish: 'Pizza Topping', instruction: 'Add fresh after baking pizza.' },
        pairs_with: ['Parmesan', 'Prosciutto', 'Balsamic'],
        video: 'https://www.youtube.com/results?search_query=arugula+uses', recipe: 'https://www.google.com/search?q=arugula+recipes'
    },
    {
        id: 'kale_curly', name: 'Kale (Curly)', type: 'Leafy Green', priority: 7,
        description: 'Tough, ruffled leaves.',
        season: [0, 1, 2, 3, 4, 9, 10, 11],
        pre_prep: 'Wash well.',
        prep_guides: [
            { title: 'De-stem', blurb: 'Prep', instruction: 'Hold the thick woody stem with one hand and zip your other hand up the stem to tear the leafy greens off. Discard the stem.' },
            { title: 'Massage', blurb: 'Salad', instruction: 'Drizzle the raw leaves with olive oil and salt, then squeeze and knead them with your hands for 2 minutes to break down the tough fibers.' },
            { title: 'Bake', blurb: 'Chips', instruction: 'Tear leaves into large chip-sized pieces (dry them thoroughly!), toss with oil, and bake.' }
        ],
        serving_suggestion: { dish: 'Kale Chips', instruction: 'Bake until crispy.' },
        pairs_with: ['Lemon', 'Garlic', 'Chili'],
        video: 'https://www.youtube.com/results?search_query=prep+kale', recipe: 'https://www.google.com/search?q=kale+recipes'
    },
    {
        id: 'kale_lacinato', name: 'Kale (Lacinato)', type: 'Leafy Green', priority: 7,
        description: 'Dino kale. Bumpy dark leaves.',
        season: [0, 1, 2, 3, 4, 9, 10, 11],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Ribbon', blurb: 'Salad', instruction: 'After de-stemming, stack the long leaves, roll them into a cigar shape, and slice thinly into confetti ribbons.' },
            { title: 'De-stem', blurb: 'Prep', instruction: 'Slice along both sides of the center rib with a knife to remove it.' }
        ],
        serving_suggestion: { dish: 'Raw Salad', instruction: 'Massage with lemon and oil.' },
        pairs_with: ['Lemon', 'Pecorino', 'Pine Nuts'],
        video: 'https://www.youtube.com/results?search_query=lacinato+kale+salad', recipe: 'https://www.google.com/search?q=lacinato+kale+recipes'
    },
    {
        id: 'chard', name: 'Swiss Chard', type: 'Leafy Green', priority: 5,
        description: 'Colorful stems, large leaves.',
        season: [5, 6, 7, 8, 9, 10],
        pre_prep: 'Wash well.',
        prep_guides: [
            { title: 'Separate', blurb: 'Two Vegetables', instruction: 'The stems cook slower than the leaves. Cut the leafy green part off the stems.' },
            { title: 'Chop', blurb: 'Sauté', instruction: 'Dice the colorful stems small like celery. Stack the leaves, roll, and slice into wide ribbons.' }
        ],
        serving_suggestion: { dish: 'Sauté', instruction: 'Garlic, oil, and vinegar.' },
        pairs_with: ['Raisins', 'Garlic', 'Vinegar'],
        video: 'https://www.youtube.com/results?search_query=clean+chard', recipe: 'https://www.google.com/search?q=swiss+chard+recipes'
    },
    {
        id: 'collards', name: 'Collard Greens', type: 'Leafy Green', priority: 5,
        description: 'Big, tough, flat leaves.',
        season: [0, 1, 2, 3, 4, 10, 11],
        pre_prep: 'Wash well.',
        prep_guides: [
            { title: 'De-stem', blurb: 'Prep', instruction: 'Fold the large leaf in half lengthwise (to hide the spine). Slice the tough central rib entirely off.' },
            { title: 'Roll & Cut', blurb: 'Braise', instruction: 'Stack several de-stemmed leaves, roll them into a tight log, and slice crosswise into 1-inch thick strips.' }
        ],
        serving_suggestion: { dish: 'Braised', instruction: 'Slow cook with ham hock or smoky bacon.' },
        pairs_with: ['Bacon', 'Vinegar', 'Hot Sauce'],
        video: 'https://www.youtube.com/results?search_query=clean+collards', recipe: 'https://www.google.com/search?q=collard+greens+recipes'
    },
    {
        id: 'mustard_greens', name: 'Mustard Greens', type: 'Leafy Green', priority: 4,
        description: 'Spicy, pungent bite.',
        season: [1, 2, 3, 4],
        pre_prep: 'Wash.',
        prep_guides: [
            { title: 'Tear/Chop', blurb: 'Cook Down', instruction: 'Remove tough lower stems. Roughly chop or tear the leaves into large pieces as they will shrink significantly when cooked.' },
            { title: 'Blanch', blurb: 'Mellow', instruction: 'Boil briefly (1-2 mins) to reduce the pungent spicy heat if desired.' }
        ],
        serving_suggestion: { dish: 'Sauté with Bacon', instruction: 'Fat cuts the bitterness.' },
        pairs_with: ['Pork', 'Vinegar'],
        video: 'https://www.youtube.com/results?search_query=cook+mustard+greens', recipe: 'https://www.google.com/search?q=mustard+greens+recipes'
    },
    {
        id: 'turnip_greens', name: 'Turnip Greens', type: 'Leafy Green', priority: 4,
        description: 'Leaves of turnip. Sharp flavor.',
        season: [9, 10, 11, 0, 1, 2],
        pre_prep: 'Wash well.',
        prep_guides: [
            { title: 'Chop', blurb: 'Boil', instruction: 'Wash thoroughly (can be sandy). Remove thick stems and chop the leaves into 1-inch strips.' }
        ],
        serving_suggestion: { dish: 'Southern Style', instruction: 'Boil with salt pork.' },
        pairs_with: ['Turnips', 'Pork'],
        video: 'https://www.youtube.com/results?search_query=cook+turnip+greens', recipe: 'https://www.google.com/search?q=turnip+greens+recipes'
    },
    {
        id: 'endive', name: 'Endive', type: 'Leafy Green', priority: 4,
        description: 'Bitter, torpedo shape (Belgian).',
        season: [9, 10, 11, 0, 1, 2],
        pre_prep: 'Wipe clean.',
        prep_guides: [
            { title: 'Separate', blurb: 'Boats', instruction: 'Trim the bottom root slice. Peel leaves off one by one to use as edible spoons.' },
            { title: 'Halve', blurb: 'Braise', instruction: 'Cut in half lengthwise through the core. Braise cut-side down in butter and broth.' },
            { title: 'Slice', blurb: 'Salad', instruction: 'Slice the cone crosswise into thin rings for a crunchy, bitter salad addition.' }
        ],
        serving_suggestion: { dish: 'Appetizer Boat', instruction: 'Fill with blue cheese and walnuts.' },
        pairs_with: ['Blue Cheese', 'Walnut', 'Pear'],
        video: 'https://www.youtube.com/results?search_query=prep+endive', recipe: 'https://www.google.com/search?q=endive+recipes'
    },
    {
        id: 'escarole', name: 'Escarole', type: 'Leafy Green', priority: 4,
        description: 'Broad leaf, bitter endive relative.',
        season: [9, 10, 11, 0, 1],
        pre_prep: 'Wash (sandy).',
        prep_guides: [
            { title: 'Tear', blurb: 'Salad', instruction: 'Tear the inner lighter yellow leaves for raw salads.' },
            { title: 'Chop', blurb: 'Soup', instruction: 'Roughly chop the tougher dark outer leaves for soups.' }
        ],
        serving_suggestion: { dish: 'Bean Soup', instruction: 'Wilt into white bean soup.' },
        pairs_with: ['White Beans', 'Garlic', 'Lemon'],
        video: 'https://www.youtube.com/results?search_query=clean+escarole', recipe: 'https://www.google.com/search?q=escarole+recipes'
    },
    {
        id: 'radicchio', name: 'Radicchio', type: 'Leafy Green', priority: 5,
        description: 'Purple/white, bitter.',
        season: [9, 10, 11, 0, 1, 2],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Wedge', blurb: 'Grill', instruction: 'Cut through the core to make wedges that hold together on the grill.' },
            { title: 'Shred', blurb: 'Salad', instruction: 'Halve, remove the white core triangle, and slice the leaves very thinly to fluff them up.' }
        ],
        serving_suggestion: { dish: 'Grilled Salad', instruction: 'Grill wedges, top with balsamic.' },
        pairs_with: ['Balsamic', 'Orange', 'Hazelnut'],
        video: 'https://www.youtube.com/results?search_query=cut+radicchio', recipe: 'https://www.google.com/search?q=radicchio+recipes'
    },
    {
        id: 'watercress', name: 'Watercress', type: 'Leafy Green', priority: 4,
        description: 'Peppery small leaves.',
        season: [3, 4, 5, 9, 10],
        pre_prep: 'Rinse.',
        prep_guides: [
            { title: 'Trim', blurb: 'Lower Stem', instruction: 'The thick lower stems can be woody. Cut them off, but keep the delicate upper stems attached to the leaves.' }
        ],
        serving_suggestion: { dish: 'Tea Sandwich', instruction: 'Butter, cucumber, watercress.' },
        pairs_with: ['Butter', 'Cucumber', 'Salmon'],
        video: 'https://www.youtube.com/results?search_query=prep+watercress', recipe: 'https://www.google.com/search?q=watercress+recipes'
    },
    {
        id: 'spring_mix', name: 'Spring Mix', type: 'Leafy Green', priority: 6,
        description: 'Baby greens blend.',
        season: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pre_prep: 'Rinse gentle.',
        prep_guides: [
            { title: 'None', blurb: 'Ready', instruction: 'Usually perfectly sized. Just pick through for slimy leaves and dress gently.' }
        ],
        serving_suggestion: { dish: 'Side Salad', instruction: 'Simple vinaigrette.' },
        pairs_with: ['Vinaigrette', 'Tomato', 'Cucumber'],
        video: 'https://www.youtube.com/results?search_query=make+salad+dressing', recipe: 'https://www.google.com/search?q=spring+mix+recipes'
    }
];
