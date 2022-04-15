import React from 'react'
import { createContext, useState } from 'react'
import * as SecureStore from 'expo-secure-store'

const AuthContext = createContext(null);
const { Provider } = AuthContext;

function AuthProvider({ children }) {
    const [AuthState, setAuthState] = useState({
        accessToken: null,
        refreshToken: null,
        authenticated: null
    });

    const Logout = () => {
        // reset token to null in secure store
        SecureStore.deleteItemAsync('token')
        // set AuthState 
        setAuthState({
            accessToken: null,
            refreshToken: null,
            authenticated: false
        });
    };

        // funtion get access token in AuthState a the time
    const getAccessToken = () => {
        return AuthState.accessToken;
    }
    return (
        <Provider value={
            {
                AuthState,
                setAuthState,
                Logout,
                getAccessToken,

            }
        }>
            {children}
        </Provider>
    )
}

export {AuthProvider,AuthContext}