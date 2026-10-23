import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import FutureProjects from './pages/FutureProjects';
import Gallery from './pages/Gallery';
import GalleryShow from './pages/GalleryShow';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/future-projects" element={<FutureProjects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/:showId" element={<GalleryShow />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;