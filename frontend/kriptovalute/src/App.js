import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import TransactionDetails from './components/TransactionDetails';
import BlockDetails from './components/BlockDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/transactionDetails/:transactionId" element={<TransactionDetails />} />
          <Route path="/blockDetails/:blockId" element={<BlockDetails />} />
          <Route path="/blockDetailsByHeight/:blockHeight" element={<BlockDetails />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
