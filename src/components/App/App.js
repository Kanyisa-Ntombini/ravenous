import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ravenous</h1>
        <SearchBar />
      </header>
      <main>
        <BusinessList />
      </main>
    </div>
  );
}

export default App;
