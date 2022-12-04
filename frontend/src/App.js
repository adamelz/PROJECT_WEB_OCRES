import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboards from './components/Dashboards';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';


const App = () => {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />Ò
        <Route path="/dashboard" element={<Dashboard />} />
        {/* si il ne trouve pas alors il rammene au home  */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;