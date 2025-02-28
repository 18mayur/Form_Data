import { Fragment, React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Show from "./components/Show";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <Form />
              </Fragment>
            }
          />
          <Route path="/show" element={<Show />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
