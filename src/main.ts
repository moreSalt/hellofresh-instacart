import prompts from 'prompts'
import { hfRecipe } from './hellofresh/recipe.js'
import { IngredientsArray } from './hellofresh/types.js'
async function main () {
    try {
        const response = await prompts([
            {
                type: "text",
                name: 'recipe',
                initial: 'https://www.hellofresh.com/recipes/de-mozzarella-crusted-chicken-w0-5845b27b2e69d7646110f1c2',
                message: 'What is the recipe URL?'
            },
            {
                type: "select",
                name: 'servings',
                message: 'How many servings?',
                choices: [
                    { 'title': '2', value: 2},
                    { 'title': '4', value: 4},

                ]
            },
            {
                type: "select",
                name: 'store',
                message: 'What store would you like to shop at?',
                choices: [
                    { 'title': 'Costco', value: 'costco'},
                    { 'title': 'Hy-Vee', value: 'hy-vee'},
                    { 'title': 'King Soopers', value: 'king-soopers'},
                    { 'title': 'Natural Grocers', value: 'natural-grocers'},
                    { 'title': 'Safeway', value: 'safeway'},
                    { 'title': 'Sprouts', value: 'sprouts'},
                    { 'title': 'Target', value: 'target'},
                    { 'title': 'ALL STORES', value: 'all'},
                ]
            },
        ])
        const ingredients: IngredientsArray[] = await hfRecipe(response.recipe.trim(), response.servings)
        await console.table(ingredients.map(i => {
            return {
                type: i.type,
                amount: i.amount,
                unit: i.unit,
                url: response.store === 'all' ? `https://www.instacart.com/store/s?k=${i.type.split(' ').join('+')}` : `https://www.instacart.com/store/${response.store}/search/${i.type.split(' ').join('+')}`
            }
        }))


    } catch (error) {
        await console.log(error)
    }
}

main()