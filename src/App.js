import "./App.css";
import SearchBar from "./components/searchbar/searchbar";
import DataBox from "./components/databox/databox";
import { useState } from "react";

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [stockData, setStockData] = useState(null);

  const fetchStockData = async (ticker) => {
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ticker}&apikey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const firstMatch = data.bestMatches[0];
    setStockData(firstMatch);
  };

  const handleSearch = (ticker) => {
    fetchStockData(ticker);
  };

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      <div className="dataContainer">
        {stockData && (
          <>
            <DataBox label="Symbol" value={stockData["1. symbol"]} />
            <DataBox label="Name" value={stockData["2. name"]} />
            <DataBox label="Type" value={stockData["3. type"]} />
            <DataBox label="Region" value={stockData["4. region"]} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
