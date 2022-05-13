import { useReducer } from 'react';
import { AuthContext, initialAuthState, authReducer } from './AuthContext';

function ContextProvider({ children }) {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default ContextProvider;
