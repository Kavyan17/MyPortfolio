import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Education from './components/Education/Education.jsx';
import WorkExp from './components/WorkExperience/WorkExp.jsx';
import CourseWork from './components/CourseWork/CourseWork.jsx';
import Technologies from './components/Technologies/Technologies.jsx';

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to My Portfolio</h1>
      <Link to="/education" className="nav-link">Go to Education</Link>
      <Link to="/workexp" className="nav-link">Go to Work Exp</Link>
      <Link to="/coursework" className="nav-link">Go to CourseWork</Link>
      <Link to="/technologies" className="nav-link">Go to Technologies</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/workexp" element={<WorkExp />} />
        <Route path="/coursework" element={<CourseWork />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
    </Router>
  );
}

export default App;
