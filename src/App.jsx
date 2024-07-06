import { Outlet } from "react-router-dom";
import SearchHeader from "@/components/header/SearchHeader.jsx";

function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}

export default App;
