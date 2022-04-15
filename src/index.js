import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import ScrollToTop from './components/ScrollToTop';

render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
