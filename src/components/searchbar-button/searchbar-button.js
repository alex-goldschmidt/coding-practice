import Button from "@mui/material/Button";

const SearchBarButton = ({ handleSearch }) => {
  //If user clicks "Search" button on page
  const handleSearchButton = () => {
    const searchInput = document.getElementById("searchInput");
    const ticker = searchInput.value;
    handleSearch(ticker);
  };

  return (
    <div className="searchButton">
      <Button
        id="searchButton"
        variant="contained"
        sx={{ width: 100 }}
        onClick={handleSearchButton}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBarButton;
