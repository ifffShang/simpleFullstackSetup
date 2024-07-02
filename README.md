# simpleFullstackSetup
To create a backend web server in TypeScript using Node.js
# Setup the Project:
Create a new directory for your project.

Initialize a new Node.js project with npm init -y.

Install the necessary dependencies.

# Install Dependencies:
npm install express body-parser

npm install typescript ts-node @types/node @types/express --save-dev

# initialize TypeScript:

npx tsc --init

# Configure TypeScript:
Modify tsconfig.json to include necessary configurations. Here's a basic setup:

{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}

# Create the Server:
Create a src directory in your project root.

Inside src, create an index.ts file

import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

# Add Scripts to package.json:

Add the following scripts to your package.json to build and run the server.

"scripts": {
  "start": "ts-node src/index.ts",
  "build": "tsc",
  "serve": "node dist/index.js"
}

# Run the Server:

npm start

-----------

# frontend setup


