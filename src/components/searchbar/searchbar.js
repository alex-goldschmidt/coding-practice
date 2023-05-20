import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./searchbar.module.css";

const SearchBar = ({ handleSearch }) => {
  // If user clicks "Enter" on keyboard
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const ticker = event.target.value;
      handleSearch(ticker);
    }
  };

  //If user clicks "Search" button on page
  const handleSearchButton = () => {
    const searchInput = document.getElementById("searchInput");
    const ticker = searchInput.value;
    handleSearch(ticker);
  };

  return (
    <div className={styles.searchContainer}>
      <TextField
        id="searchInput"
        onKeyDown={handleKeyDown}
        label="Ticker"
        variant="outlined"
        sx={{ width: 300, marginTop: "10px" }}
      />
      <div className={styles.searchButton}>
        <Button
          id="searchButton"
          variant="contained"
          sx={{ width: 100 }}
          onClick={handleSearchButton}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
