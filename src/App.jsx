import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Main from './pages/main'

function App() {
  return (
    <>
      <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/messenger/*" element={<Main />} />
            </Routes>
          </Router>
      </div>
    </>
  );
}

export default App;
