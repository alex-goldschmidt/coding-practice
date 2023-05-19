import "./App.css";
import SearchBar from "./components/searchbar/searchbar";
//https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&apikey=${apiKey}
//https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ticker}&apikey=${apiKey}

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const fetchStockData = async (ticker) => {
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ticker}&apikey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  const handleSearch = (ticker) => {
    fetchStockData(ticker);
  };

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
    </div>
  );
};

export default App;
