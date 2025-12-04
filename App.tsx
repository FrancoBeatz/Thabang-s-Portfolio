import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;