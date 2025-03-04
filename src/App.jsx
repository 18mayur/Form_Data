import { Fragment, React } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Show from "./components/Show";
import "./App.css";
// import Test from "./components/test";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/show" element={<Show />} />
          {/* <Route path="/test" element={<Test />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
