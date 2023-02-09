import * as React from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import { useGetProfileQuery } from '../app/actions/profile';
// import { useGetMyCompanyQuery } from '../app/actions/companyApi';

let AuthContext = React.createContext(null);

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
    let [user, setUser] = React.useState(null);

    let signin = (newUser, callback) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            callback();
        });
    };

    let signout = (callback) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    let value = { user, signin, signout };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export function useAuth() {
    return React.useContext(AuthContext);
}

// eslint-disable-next-line react/prop-types
export function RequireAuth({ children }) {
    const navigate = useNavigate();
    const { isError: unComplateCompany } = useGetProfileQuery();
    let auth = localStorage.getItem('token');
    // let location = useLocation();
    React.useEffect(() => {
        if (unComplateCompany) {
            localStorage.removeItem('token');
            localStorage.removeItem('profile_completed');
            window.location = `${
                import.meta.env.VITE_REDIRECT_URL
            }?isError=true`;
        }
    }, [unComplateCompany]);
    // console.log(auth, 'import.meta.env.VITE_REDIRECT_URL');

    if (!auth) {
        localStorage.removeItem('token');
        localStorage.removeItem('profile_completed');
        return (window.location = `${
            import.meta.env.VITE_REDIRECT_URL
        }?logout=true`);
    }

    return children;
}

export const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback) {
        fakeAuthProvider.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signout(callback) {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    }
};
