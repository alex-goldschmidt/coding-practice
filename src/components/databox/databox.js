import Chip from "@mui/material/Chip";

const DataBox = ({ label, value }) => {
  return <Chip label={`${label}: ${value}`} />;
};

export default DataBox;
