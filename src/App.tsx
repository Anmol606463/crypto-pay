import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Plugins from './pages/Plugins';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-dark text-white font-sans selection:bg-primary-500/30 selection:text-white">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/plugins" element={<Plugins />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
