import React from 'react';
import { Header, CTA, Features, Footer } from './components';

function App() {
  return (
    <div className="bg-background">
      <div className="container mx-auto min-h-screen md:px-2 lg:px-0">
        <Header />
        <Features />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
