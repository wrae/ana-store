import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

type Language = 'en' | 'es';

const App: React.FC = () => {
    const [language, setLanguage] = useState<Language>('en');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLanguage = (lang: Language) => {
        if (language !== lang) {
            setLanguage(lang);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Router>
            <div className="App">
                {/* Header Wrapper */}
                <header className="header-wrapper">
                    {/* Top Bar (Language Selector + Hamburger Menu) */}
                    <div className="header-top">
                        {/* Language Toggle Buttons */}
                        <div className="language-toggle-container">
                            <button
                                className={`language-toggle ${language === 'en' ? 'selected' : ''}`}
                                onClick={() => toggleLanguage('en')}
                            >
                                English
                            </button>
                            |
                            <button
                                className={`language-toggle ${language === 'es' ? 'selected' : ''}`}
                                onClick={() => toggleLanguage('es')}
                            >
                                Español
                            </button>
                        </div>

                        {/* Hamburger Menu Button */}
                        <button className="hamburger" onClick={toggleMenu}>
                            &#9776;
                        </button>

                        {/* Dropdown Menu */}
                        <nav className={`hamburger-menu-container ${isMenuOpen ? 'open' : ''}`}>
                            <ul>
                                <li><Link to="/home" onClick={() => setIsMenuOpen(false)}>{language === 'en' ? 'Home' : 'Inicio'}</Link></li>
                                <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>{language === 'en' ? 'About' : 'Acerca de'}</Link></li>
                                <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>{language === 'en' ? 'Services' : 'Servicios'}</Link></li>
                                <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>{language === 'en' ? 'Contact' : 'Contacto'}</Link></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Header Image */}
                    <div className="header-image-wrapper">
                        <img src="/assets/header-image.JPG" alt="Header" className="header-image" />
                    </div>
                </header>

                {/* Routes */}
                <Routes>
                    <Route path="/home" element={<Home language={language} />} />
                    <Route path="/about" element={<About language={language} />} />
                    <Route path="/services" element={<Services language={language} />} />
                    <Route path="/contact" element={<Contact language={language} />} />
                    <Route path="/" element={<Home language={language} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
