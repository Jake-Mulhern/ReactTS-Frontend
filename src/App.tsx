// src/App.tsx
import { FC, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthContext, AuthProvider } from './contexts/Authentication';
import Home from './pages/Home';
import Users from './pages/Users';
import Navbar from './components/Navbar';
import Tasks from './pages/Tasks';
import Login from './pages/Login';

// Define route component type
// type RouteComponent = FC;

// Define route configuration type
// type RouteConfig = {
//   path: string;
//   element: RouteComponent;
// };

type Props = {}

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}


const App: FC = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users title={'Users'}/>} />
          <Route path="/tasks" element={<Tasks title={'Tasks'}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
