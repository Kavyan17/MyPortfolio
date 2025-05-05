import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home.jsx';
import Education from './components/Education/Education.jsx';
import WorkExp from './components/WorkExperience/WorkExp.jsx';
import CourseWork from './components/CourseWork/CourseWork.jsx';
import Technologies from './components/Technologies/Technologies.jsx';
import Contact from './components/Contact/Contact.jsx';
import Projects from './components/Projects/Projects.jsx';

function Header() {
  return (
    <header className="header">
      <h2>Kavya Nandigam's Portfolio</h2>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/education" className="nav-link">Education</Link>
        <Link to="/workexp" className="nav-link">Work Exp</Link>
        <Link to="/coursework" className="nav-link">Coursework</Link>
        <Link to="/technologies" className="nav-link">Technologies</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
          <p>&copy; {new Date().getFullYear()} Kavya's Portfolio. All rights reserved.</p>
      </div>
      <div className="footer-right">
          <Contact />
      </div>
    </footer>
  );
}

// function Home() {
//   return (
//     <div className="home-page">
//       <h1>Welcome to My Portfolio</h1>
//       <p>Explore the sections above to learn more about my background and work.</p>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/workexp" element={<WorkExp />} />
            <Route path="/coursework" element={<CourseWork />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
