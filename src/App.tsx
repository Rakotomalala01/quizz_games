// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuessCodeGame from './pages/guessCodeGame';
import FuturePlans from './pages/futurPlanPage';
import JarOfChoicesWin from './pages/jarOfChoicesPage';
import ChooseOrders from './pages/chooseOrders';
import QuizGame from './pages/quizzGame';
import DareGame from './pages/dareGame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GuessCodeGame />} />
        <Route path="/jarOfChoices" element={<JarOfChoicesWin />} />
        <Route path="/chooseOrders" element={<ChooseOrders />} />
        <Route path="/futurePlans" element={<FuturePlans />} />
        <Route path="/quizGames" element={<QuizGame />} />
        <Route path="/dareGames" element={<DareGame />} />







      </Routes>
    </Router>
  );
}

export default App;