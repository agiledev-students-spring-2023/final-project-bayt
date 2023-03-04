import './App.css';
import Header from "./header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Finances from "./finances";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="./finances" element={<Finances />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
