import { Outlet } from "react-router-dom";
import Header from "@/components/header/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
