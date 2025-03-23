// src/components/LoginForm.tsx
import { useState, FC, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Authentication';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [error, setError] = useState<boolean>(false);
    const [errorMessageText, setErrorMessageText] = useState<string>('Please enter name and password');
    const { authenticated, setAuthenticated, user, setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (authenticated) {
            navigate('/', { replace: true });
        }
    }, [authenticated, navigate]);


    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log('Submitting now')
            if (email === "" || password === "") {
                setError(true);
            } else {
                const getLoginCreds = async (email: string, password: string) => {
                    try {
                        const userLoginData = {"email": email, "password": password};
                        const loginResponse = await axios.post('http://localhost:3000/auth/login', userLoginData);
                        console.log('STATUS: ', loginResponse.status)
                        return loginResponse.data;
                    } catch (err: any) {
                        setError(true);
                        setErrorMessageText('Loging Credentials Incorrect. Try again.');
                    }    
                }
                const loginCreds = await getLoginCreds(email, password);
    
                /* Add JWT token and user info to context here */
                console.log('LOGIN RESPONSE: ', loginCreds);
                if (!loginCreds) {
                    setError(true);
                    setErrorMessageText('Loging Credentials Incorrect. Try again.');
                } else {
                    setAuthenticated(true);
                    setUser(loginCreds.data);
                    setError(false);
                    console.log('should nav here')
                }

            }
        } catch (err: any) {
            console.error('Problem Logging In: ', err.message);
        }

    }


    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? "" : "none",
                }}
            >
                <h1>{errorMessageText}</h1>
            </div>
        );
    };

    return (
        <div className="form">
            <div>
                <h1>User Login</h1>
                <p>{authenticated.toString()}</p>
            </div>

            <div className="messages">
                {errorMessage()}
            </div>

            <form onSubmit={handleSubmit}>
                <label className="label">Email</label>
                <input
                    onChange={handleEmail}
                    className="input"
                    value={email}
                    type="email"
                />

                <label className="label">Password</label>
                <input
                    onChange={handlePassword}
                    className="input"
                    value={password}
                    type="password"
                />

                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default LoginForm;