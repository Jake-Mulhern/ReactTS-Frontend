import { useState, FC } from 'react';
import axios from 'axios';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [submitted, setSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [errorMessageText, setErrorMessageText] = useState<string>('Please enter name and password');


    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setSubmitted(false);
    }

    const handleSubmit = async () => {
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
                    setSubmitted(true);
                    setError(false);
                }

            }
        } catch (err: any) {
            console.error('Problem Logging In: ', err.message);
        }

    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Clicking now')
        e.preventDefault();
        handleSubmit();
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
            </div>

            <div className="messages">
                {errorMessage()}
            </div>

            <form>
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

                <button onClick={handleClick} className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default LoginForm;