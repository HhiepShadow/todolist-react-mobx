import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

const Search = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="search">
      <TextField
        fullWidth
        style={{
          margin: "5px auto",
        }}
        type="text"
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
