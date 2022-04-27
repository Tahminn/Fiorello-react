import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/Home';
import NavigationBar from './components/layout/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('fiorello'));
root.render(
  <React.StrictMode>
  <NavigationBar />
  <main>
  <Home />
  </main>
  <Footer />
  </React.StrictMode>
);