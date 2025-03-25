// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuessCodeGame from './pages/guessCodeGame';
import FuturePlans from './pages/futurPlanPage';
import JarOfChoicesWin from './pages/jarOfChoicesPage';
import ChooseOrders from './pages/chooseOrders';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GuessCodeGame />} />
        <Route path="/jarOfChoices" element={<JarOfChoicesWin />} />
        <Route path="/chooseOrders" element={<ChooseOrders />} />
        <Route path="/futurePlans" element={<FuturePlans />} />




      </Routes>
    </Router>
  );
}

export default App;