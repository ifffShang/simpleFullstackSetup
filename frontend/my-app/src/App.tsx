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
