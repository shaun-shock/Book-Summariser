import express from 'express';
import bodyParser from 'body-parser';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const port = 3000;

const API_KEY = process.env.API_KEY;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});


app.post('/summary', async (req, res) => {
    try {
        console.log('Received data:', req.body);


        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        console.log(req.body.bChap);
        const prompt = `
            Generate a safe-for-work summary for the Book "${req.body.bName}" up to Chapter "${req.body.bChap}" 
            based on the specific topic: "${req.body.bSpecific}". 
            Do not include any explicit, harmful, or offensive content in the summary. 
            Focus on providing neutral, factual information. If there is any garbage value or anything else just respond 
            with " Please Enter valid details" . Make sure there are no special characters or anything else being used, I just want a 
            plaintext summary.
            `;

        const result = await model.generateContent(prompt);
        const summary = result.response.text();

        // testing code
        // await new Promise(resolve => setTimeout(resolve, 2000));

        // const summary = "Summary has been generated.";

        console.log("Summary generated");

        res.render('summary', {summary});
    } catch (error) {
        console.error('Error fetching summary:', error);
        res.status(500).send('Failed to fetch summary');
    }
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
