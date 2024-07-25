import { TextField } from "@mui/material";
import { useStore } from "../context/useStore";

const Search = () => {
  const store = useStore();

  return (
    <div className="search">
      <TextField
        fullWidth
        style={{
          margin: "5px auto",
        }}
        type="text"
        placeholder="Search"
        onChange={(e) => {
            store.todos.setSearch(e.target.value);
            console.log(store.todos.search);
        }}
      />
    </div>
  );
};

export default Search;
