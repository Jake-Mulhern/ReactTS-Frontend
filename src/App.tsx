// src/App.tsx
import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import Navbar from './components/Navbar';
import Tasks from './pages/Tasks';

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
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
