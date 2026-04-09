import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Plugins from './pages/Plugins';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import TelegramPopup from './components/TelegramPopup';

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
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <TelegramPopup />
      </div>
    </Router>
  );
}

export default App;
