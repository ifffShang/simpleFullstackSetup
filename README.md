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

# Store this code in GitHub and add nathanbirch as a collaborator
git init
git add .
git commit -m "Initial commit"


-----------

# frontend setup
# Install Create React App with TypeScript:

npx create-react-app my-app --template typescript
cd my-app
# Install Axios for API Calls:
npm install axios

# Create a Component to Display Information:
Create a new file named ApplicantInfo.tsx in the src directory.
import React, { useState } from 'react';
import axios from 'axios';

interface ApplicantInfo {
  name: string;
  hobby: string;
  favoriteLanguage: string;
  funFact: string;
}

const ApplicantInfo: React.FC = () => {
  const [info, setInfo] = useState<ApplicantInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchInfo = async () => {
    try {
      const response = await axios.get<ApplicantInfo>('http://localhost:3000/awesome/applicant');
      setInfo(response.data);
    } catch (err) {
      setError('Failed to fetch applicant information');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img
        src="/path/to/your/picture.jpg"
        alt="Click to see my info"
        style={{ cursor: 'pointer', width: '200px', borderRadius: '50%' }}
        onClick={fetchInfo}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {info && (
        <div style={{ marginTop: '20px' }}>
          <h2>{info.name}</h2>
          <p><strong>Hobby:</strong> {info.hobby}</p>
          <p><strong>Favorite Language:</strong> {info.favoriteLanguage}</p>
          <p><strong>Fun Fact:</strong> {info.funFact}</p>
        </div>
      )}
    </div>
  );
};

export default ApplicantInfo;

# Update App.tsx to Use the New Component:
Replace the contents of src/App.tsx with the following:

import React from 'react';
import './App.css';
import ApplicantInfo from './ApplicantInfo';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Professional Page</h1>
      </header>
      <main>
        <ApplicantInfo />
      </main>
    </div>
  );
};

export default App;

# You can add basic styles in src/App.css:
.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

# Start Your React App:
npm start



