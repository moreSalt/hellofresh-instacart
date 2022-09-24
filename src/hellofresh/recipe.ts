import got from 'got';
import { parse } from 'node-html-parser';
// import { writeFile } from 'fs';
import { Recipe, Root, IngredientsArray } from './types';
import { stringify } from 'querystring';

export async function hfRecipe (url: string, servings: number = 2) {
    try {
        const response = await got({
            method: 'GET',
            url,
            responseType: 'text',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:105.0) Gecko/20100101 Firefox/105.0',
                Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Accept-Encoding': 'gzip, deflate, br',
                Referer: 'https://www.hellofresh.com/recipes',
                Connection: 'keep-alive',
                'Upgrade-Insecure-Requests': '1',
                'Sec-Fetch-Dest': 'document',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-Site': 'same-origin',
                TE: 'trailers'
              }
        })
        const root = parse(response.body)
        const possibleRecipeObjects = root.querySelectorAll('[type="text/javascript"]').filter(o => o.innerHTML.includes('window.rootInitialState'))
        if (possibleRecipeObjects) {
            const recipes: Root = JSON.parse(possibleRecipeObjects[0].innerHTML.split('window.rootInitialState = ')[1].split('window.optimizelyDatafile')[0].trim().slice(0,-1))
            const recipe: Recipe = Object.values(recipes.recipes)[0]
            const ings: IngredientsArray[] = recipe.ingredients.filter(i => !i.internalName?.includes('(Pantry)')).map(i => {
                const yields = recipe.yields.filter(y => y.yields === servings)[0].ingredients.find(k => k.id === i.id)
                const ig: IngredientsArray = {
                    id: i.id,
                    type: i.name, //i.type.split('-').join(' '),
                    amount: yields?.amount || 0,
                    unit: yields?.unit || 'unit'

                }
                // console.log('\t'+ig.type + ':', ig.amount, ig.unit + '(s)')
                return ig
            })
            return ings
        } else {
            await console.log(`${new Date().toISOString()}: ${response.statusCode} - Unable to parse recipe`)
            return []
        }
    } catch (error) {
        await console.log(error)
        return []
    }
}

// hfRecipe('https://www.hellofresh.com/recipes/de-mozzarella-crusted-chicken-w0-5845b27b2e69d7646110f1c2')