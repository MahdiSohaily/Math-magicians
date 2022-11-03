import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import App from './App';
import Home from './pages/Home';
import Quote from './pages/Quote';
import NoMatch from './pages/noMatch';
import './styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<App />} />
          <Route path="quote" element={<Quote />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
    <App />
  </React.StrictMode>
);
