import "./App.css";
import Add from "./components/Add";
import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { observer } from "mobx-react-lite";
import Update from "./components/Update";

const App = observer(() => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="add" element={<Add />} />
        <Route path=":id" element={<Update />} />
      </Route>
    </Routes>
  );
});

export default App;
