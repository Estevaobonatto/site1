import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home';
import Planos from './pages/planos';
import Sobre from './pages/about';
import Contato from './pages/contact';
import { useScrollToTop } from './hooks/useScrollToTop';
import './styles/global.css';

function AppContent() {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen bg-[#151515]">
      <Navbar />
      <main className="flex-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App; 