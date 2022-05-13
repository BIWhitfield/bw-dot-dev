import { useState, useContext, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { AuthContext } from './bwDotDev/context/AuthContext';

import Home from './bwDotDev/home/Home';
import Login from './bwDotDev/auth/login/Login';
import Journal from './bwDotDev/journal/Journal';
import PNGLogin from './bwDotDev/assets/images/login.png';
import PNGLogout from './bwDotDev/assets/images/logout.png';
import PNGWrite from './bwDotDev/assets/images/write.png';

import './App.css';

function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isJournalOpen, setIsJournalOpen] = useState(false);
  const {
    authState: { isAuthenticated },
    authDispatch,
  } = useContext(AuthContext);

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    try {
      await Auth.currentSession();
      authDispatch({ type: 'SET_USER_LOGGED_IN' });
    } catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  const handleLogInForm = () => {
    setIsOpen(true);
  };

  const handleLogout = async () => {
    authDispatch({ type: 'SET_USER_LOGGED_OUT' });
    await Auth.signOut();
  };

  const handleDailyJournal = (bool) => {
    setIsJournalOpen(bool);
  };

  return (
    !isAuthenticating && (
      <>
        <header>
          {isAuthenticated ? (
            <>
              <button onClick={() => handleDailyJournal(true)}>
                <img src={PNGWrite} alt='open journal' />
              </button>
              <button onClick={() => handleLogout()}>
                <img src={PNGLogout} alt='log out' />
              </button>
            </>
          ) : (
            <button onClick={() => handleLogInForm()}>
              <img src={PNGLogin} alt='log in' />
            </button>
          )}
        </header>
        <div className='app-container'>
          <Login isOpen={isOpen} handleClose={() => setIsOpen(false)} />
          <Journal
            isOpen={isJournalOpen}
            handleClose={() => handleDailyJournal(false)}
          />

          <div className='tri2'></div>
          <div className='tri4'></div>
          <div className='tri3'></div>
          <div className='circle'></div>
          {/* <div className='tri1'></div> */}
          <Home />
        </div>
      </>
    )
  );
}

export default App;
