import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { PartsPage } from './components/PartsPage';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';
import { AdminPanel } from './components/AdminPanel';
import { AdminLogin } from './components/AdminLogin';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/parts" element={<PartsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route 
              path="/admin" 
              element={
                isLoggedIn ? (
                  <AdminPanel />
                ) : (
                  <AdminLogin onLogin={() => setIsLoggedIn(true)} />
                )
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;