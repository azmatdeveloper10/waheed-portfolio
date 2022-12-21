import React from 'react';
import Nav from './component/Nav';
import Hero from './component/Hero';
import About from './component/About';
import Experience from './component/Experience';
import Work from './component/Work';
import Footer from './component/Footer';

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
