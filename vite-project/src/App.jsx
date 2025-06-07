import { Routes, Route } from "react-router-dom";
import Filter from "./components/filter/Filter";
import CreateTable from "./pages/CreateTable";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Filter />
          <CreateTable />
        </>
      } />
    </Routes>
  );
}

export default App;
