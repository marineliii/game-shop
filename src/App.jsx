import { useState, useEffect } from 'react';
import './App.css';
import GameCard from './components/GameCard';
import SideMenuBar from './components/SideMenuBar';
import HamburgerMenuItem from './components/HamburgerMenu';

const API_URL = 'https://api.rawg.io/api/games?key=ea06f9ea28e846c6b4011bef946342d7';

const App = () => {
  const years = [2024, 2023, 2022, 2021, 2020, 'Other'];

  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const fetchGames = async () => {
    const response = await fetch(`${API_URL}&search=${searchTerm}&page=${pageNumber}`);
    const data = await response.json();
    setGames(data.results || []);
    setTotalPages(data.total_pages || 0);
  };

  const loadMoreGames = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handleYearClick = async (year) => {
    if (year === 'Other') {
      const response = await fetch(`${API_URL}&page=${pageNumber}&dates=1990-01-01,2019-12-31&ordering=-rating`);
      const data = await response.json();
      setGames(data.results || []);
      setTotalPages(data.total_pages || 0);
      setPageNumber(1);
    } else {
      const response = await fetch(`${API_URL}&page=${pageNumber}&dates=${year}-01-01,${year}-12-31&ordering=-rating`);
      const data = await response.json();
      setGames(data.results || []);
      setTotalPages(data.total_pages || 0);
      setPageNumber(1);
    }
  };

  const searchGames = async (name) => {
    setSearchTerm(name); // Update the search term state
    setPageNumber(1); // Reset page number when performing a new search
  };

  useEffect(() => {
    fetchGames();
  }, [searchTerm, pageNumber]); // Include pageNumber in the dependencies array

  useEffect(() => {
    searchGames(''); // Initial search with empty string
  }, []);

  const resetContent = async () => {
    setSearchTerm(''); // Reset search term to empty string
    setPageNumber(1); // Reset page number 
    searchGames(''); // Perform search with empty string to reset the game list
    await fetchGames();
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    console.log('clicked');
  }



  return (
    <div className="app">
      <h1 onClick={resetContent}>Gaming World</h1>
      <div className="search">
        <input
          placeholder="Search for games"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="search"
          onClick={fetchGames} // Change to fetchGames for search functionality
        />
      </div>

      <div className="container">
        {games?.length > 0 ? (
          games.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <div className="empty">
            <h2>No Games Found</h2>
          </div>
        )}

        {pageNumber < totalPages && (
          <button className="load-more-btn" onClick={loadMoreGames}>
            Show More
          </button>
        )}
      </div>
      <SideMenuBar years={years} onClick={handleYearClick} />
      <HamburgerMenuItem onClick={toggleMenu} />
    </div>
  );
};

export default App;
