import "./App.css";
import Navbar from "./components/Navbar";
import WishList from "./components/WishList";
import Movies from "./components/Movies";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner/><Movies/></>}></Route>
          <Route path="/watchlist" element={<WishList/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
