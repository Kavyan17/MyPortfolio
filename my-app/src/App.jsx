import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Education from './components/Education/Education.jsx';

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to My Portfolio</h1>
      <Link to="/education" className="nav-link">Go to Education</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;
