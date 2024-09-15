import express from 'express';
import axios from 'axios';
import { CohereClient } from 'cohere-ai';
import { readFile } from 'fs/promises';
import bodyParser from 'body-parser';
import cors from 'cors';

const port = 9000;

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Frontend URL
    methods: ['POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cohere = new CohereClient({
    token: "dwkI321YkL1bXCz9qHkM9Hf85dLcBJ4BJL0JEHWZ"
});

let grids = [];
let loading = true;

const fetchGrids = async () => {
    try {
        const res = await axios.get('http://localhost:4000/grid');
        grids = res.data;
        loading = false;
        console.log('Grids fetched successfully.');
    } catch (err) {
        console.error('Error fetching grids:', err);
        loading = false;
    }
};

fetchGrids();

// app.post('/cohere', async (req, res) => {
//     loading = true;
//     await fetchGrids();
//     res.json({ message: 'Grids data is being refreshed.' });
// });

app.post('/cohere', async (req, res) => {
    if (loading) {
        return res.status(503).json({ error: 'Server is still loading data. Please try again shortly.' });
    }

    const query = grids.length > 0 
        ? grids.map(grid => `${grid.value} ${grid.ingredient}`).join(' ') 
        : 'No data available';

    let context = 'N/A';
    try {
        context = await readFile('context.txt', 'utf-8');
    } catch (err) {
        console.error('Error reading context.txt:', err);
    }

    const promptMessage = `
User Information: ${context}
User Inventory: ${query}

Task:
Generate 20 personalized recipes for the user. Use the User Information and User Inventory provided above. The information for each recipe should be in one long string, following this structure: 
"name": "Recipe Name", "ingredients": "Ingredient 1 (Approximate Amount), Ingredient 2 (Approximate Amount), Ingredient 3 (Approximate Amount), ...", "reason": "Brief reason for choosing this recipe, considering the user's context." | next recipe name, ingredients, reason | ...

Extremely important guidelines:
1. Ensure all recipes are valid and feasible.
2. The output should be a long string with each recipe having the keywords name, ingredients, and reason
3. Do not include any text outside the name, ingredients, and reason information
4. Prioritize ingredients from the User Inventory in the recipes.
5. Make sure that the information for each recipe is separated by a horizontal line | 
6. Do not use any escape sequences or tabs in the output - everything should be in one line and one long string
7. Make sure that you do not include \ or / or \n characters. Only the | that separate each recipe is allowed
For example: "name": "Bibimbap", "ingredients": "1 cup rice, 1 egg, 1/2 cup beef, 1/2 cup carrots, 1/2 cup spinach, 1/2 cup mushrooms, 1 tablespoon sesame oil, salt and pepper to taste", "reason for recommendation": "A classic Korean dish that can be customized to your taste and avoids peanuts." | ... | ... | ... | ... | ...
8. Most importantly, ensure that you give 20 recipes. It is imperative that you give at least 20 recipes`;

    const generateRecipes = async () => {
        console.log('Sending request to Cohere AI...');
        try {
            const response = await cohere.generate({
                model: 'command-xlarge-nightly',
                prompt: promptMessage,
                max_tokens: 8000,
                temperature: 0.8,
                k: 0,
                p: 0.5,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
            console.log('Received response from Cohere AI.');
            return response.generations[0].text;
        } catch (error) {
            console.error('Error generating text with Cohere:', error);
            throw error;
        }
    };

    try {
        const cohere_res = await generateRecipes();
        res.json({ result: cohere_res });
        console.log("test1");
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate recipes.' });
    }
});


app.listen(port, () => {
    console.log('Server started! At http://localhost:' + port);
});
