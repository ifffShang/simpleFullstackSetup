import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 8080;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript!');
});



// New Route
app.get('/awesome/applicant', (req: Request, res: Response) => {
    const funInfo = {
        name: "John Doe",
        hobby: "Coding",
        favoriteLanguage: "TypeScript",
        funFact: "I can solve a Rubik's cube in under a minute!"
    };

    res.send(funInfo);
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
