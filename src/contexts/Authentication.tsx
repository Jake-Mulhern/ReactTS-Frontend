// src/contexts/Authentication.tsx

import { createContext, ReactNode, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { UserAuthenticationModel } from "../App.types";

type Props = {
    children?: ReactNode;
}

type IAuthContext = {
    authenticated: boolean;
    setAuthenticated: (authenticated: boolean) => void
    user?: UserAuthenticationModel;
    setUser: (user: UserAuthenticationModel | undefined) => void;
}

const initialValue = {
    authenticated: false,
    setAuthenticated: () => {},
    setUser: () => {}
}

const AuthContext = createContext<IAuthContext>(initialValue);

const AuthProvider = ({ children }: Props) => {
    const [authenticated, setAuthenticated] = useState(initialValue.authenticated);
    const [user, setUser] = useState<UserAuthenticationModel | undefined>();

    // const navigate = useNavigate();

    return (
        <AuthContext.Provider value={{authenticated, setAuthenticated, user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider};