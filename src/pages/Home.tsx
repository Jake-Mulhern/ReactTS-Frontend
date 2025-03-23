// src/pages/Home.tsx
import { FC, useContext } from 'react';
import { AuthContext } from '../contexts/Authentication';


const Home: FC = () => {
  const { authenticated, setAuthenticated, user, setUser } = useContext(AuthContext);

  return (
    <div>
      <h1>HOME PAGE!</h1>
      <p>Welcome {user?.name.first} {user?.name.last}!</p>
    </div>
  );
};

export default Home;