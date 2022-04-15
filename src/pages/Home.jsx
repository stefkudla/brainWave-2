import React from 'react';
import { CTA, Features, Header } from '../components';

const Home = () => {
    return (
        <div className="container mx-auto px-2">
            <Header />
            <Features />
            <CTA />
        </div>
    );
};

export default Home;
