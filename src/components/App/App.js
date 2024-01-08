import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  sessionStorage.clear();

  return (
    <div className="App">
      <header>
        <h1>Ravenous</h1>
        <div className="Banner-Pic"></div>
      </header>
      <main>
        <SearchBar />
      </main>
    </div>
  );
}

//

export default App;
