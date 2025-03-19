// src/pages/Home.tsx
import { FC } from 'react';
import LoginForm from '../components/LoginForm';


const Login: FC = () => {

  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;