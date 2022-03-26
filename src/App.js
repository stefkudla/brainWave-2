import React from 'react';
import { Navbar, CTA } from './components';
import { Header, Features, Footer } from './containers';

function App() {
  return (
    <div className="App bg-background">
      <div className="container mx-auto">
        <Navbar />
        <Header />
        <Features />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
