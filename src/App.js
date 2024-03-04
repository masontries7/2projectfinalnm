import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import Navigation from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import Amc from "./components/amc";
import Regal from "./components/regal";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Navigation />
        <Header />
        <h2>Tell us who you enjoy the best!</h2>
        <button>
          <Link to="/create">Create</Link>
        </button>
        <Link to="/amc"></Link>
        <Link to="/regal"></Link>

        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
          <Route path="/amc" element={<Amc />} />
          <Route path="/regal" element={<Regal />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
//tried to connect the navbar to the amc.js and regal.js to load the logo images and
//about pages. It did not work. Used <Link and looked up <NavLink but nothing seemed
//to work well without throwing off entire page. Also, struggled with aligning the
//page the way I wanted to with CSS. Overall the CRUD aspect worked and I was able
//to link a header and footer in and change the format of the size and background
//elements.
