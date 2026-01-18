/**
 * Data source for Vegetables.how
 * Aggregated from sub-modules for V10 expansion.
 */

import { herbs } from './data_lists/herbs.js';
import { greens } from './data_lists/greens.js';
import { roots } from './data_lists/roots.js';
import { cruciferous } from './data_lists/cruciferous.js';
import { fruits } from './data_lists/fruits.js';
import { misc } from './data_lists/misc.js';

// Combine all lists
export const vegetables = [
    ...herbs,
    ...greens,
    ...roots,
    ...cruciferous,
    ...fruits,
    ...misc
];

// Sort Alphabetically (App Logic handles Priority sorting, but base sort is good)
vegetables.sort((a, b) => a.name.localeCompare(b.name));

export const seasonalMap = {};

vegetables.forEach(v => {
    v.season.forEach(month => {
        if (!seasonalMap[month]) seasonalMap[month] = [];
        seasonalMap[month].push(v.id);
    });
});

export const keys = {
    months: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
};

export const monthlyTopPicks = {
    0: ['kale_curly', 'brussels_sprouts', 'carrot', 'sweet_potato'],
    1: ['broccoli', 'cauliflower', 'cabbage_green', 'leek'],
    2: ['asparagus', 'spinach', 'artichoke', 'green_onion'],
    3: ['asparagus', 'peas_english', 'radish', 'spinach'],
    4: ['asparagus', 'peas_snap', 'lettuce_butter', 'fava_beans'],
    5: ['zucchini', 'tomato_heirloom', 'cucumber_persian', 'green_beans'],
    6: ['corn', 'tomato_beefsteak', 'eggplant_globe', 'bell_pepper'],
    7: ['tomato_roma', 'zucchini', 'corn', 'okra'],
    8: ['bell_pepper', 'broccoli', 'cauliflower', 'green_beans'],
    9: ['squash_butternut', 'pumpkin', 'sweet_potato', 'beets'],
    10: ['brussels_sprouts', 'carrot', 'kale_curly', 'parsnip'],
    11: ['kale_curly', 'cabbage_green', 'brussels_sprouts', 'squash_acorn']
};
