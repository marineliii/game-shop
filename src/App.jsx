/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react';
import './App.css';
import GameCard from './components/GameCard'


//ea06f9ea28e846c6b4011bef946342d7



const API_URL = 'https://api.rawg.io/api/games?key=ea06f9ea28e846c6b4011bef946342d7'

const App = () => {

  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchGames = async (name) => {
    const response = await fetch(`${API_URL}&s=${name}`);
    const data = await response.json();
    console.log(data);
    setGames(data.Search);


  }

  useEffect(() => {
    searchGames("Portal 2");
  }, []);

  return (
    //components
    <div className="app">
      <h1>Gameing world</h1>
      <div className="search">
        <input placeholder='Search for games' type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="search"
          onClick={() => searchGames(searchTerm)}
        />
      </div>

      {games?.length > 0 ? (
        <div className="container">
          {games.map((game) => (
            <GameCard game={game} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Games Found</h2>
        </div>
      )}


    </div>
  );
}
export default App;