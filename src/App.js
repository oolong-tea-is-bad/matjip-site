import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import List from './screens/List';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/List" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
