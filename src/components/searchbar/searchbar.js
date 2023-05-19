import TextField from "@mui/material/TextField";

const SearchBar = ({ handleSearch }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const ticker = event.target.value;
      handleSearch(ticker);
    }
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        onKeyDown={handleKeyDown}
        label="Ticker"
        variant="outlined"
        sx={{ width: 300, marginTop: "10px" }}
      />
    </>
  );
};

export default SearchBar;
