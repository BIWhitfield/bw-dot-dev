/* eslint-disable import/no-unresolved */
import { createContext } from 'react';

export const AuthContext = createContext();

export const initialAuthState = {
  isAuthenticated: false,
};

export const authReducer = (state, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'SET_USER_LOGGED_IN':
      return {
        isAuthenticated: true,
      };

    case 'SET_USER_LOGGED_OUT':
      return { ...initialAuthState };

    default:
      return nextState;
  }
};
