// src/App.tsx
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import Navbar from './components/Navbar';

// Define route component type
// type RouteComponent = FC;

// Define route configuration type
// type RouteConfig = {
//   path: string;
//   element: RouteComponent;
// };


const App: FC = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
