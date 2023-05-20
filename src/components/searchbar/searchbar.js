import TextField from "@mui/material/TextField";
import styles from "./searchbar.module.css";
import SearchBarButton from "../searchbar-button/searchbar-button";

const SearchBar = ({ handleSearch }) => {
  // If user clicks "Enter" on keyboard
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const ticker = event.target.value;
      handleSearch(ticker);
    }
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
      <SearchBarButton handleSearch={handleSearch} />
    </div>
  );
};

export default SearchBar;
