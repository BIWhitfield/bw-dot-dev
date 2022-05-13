import { useState } from 'react';

import Home from './bwDotDev/home/Home';
import Login from './bwDotDev/auth/login/Login';
import Journal from './bwDotDev/journal/Journal';
import PNGLogin from './bwDotDev/assets/images/login.png';
import PNGLogout from './bwDotDev/assets/images/logout.png';
import PNGWrite from './bwDotDev/assets/images/write.png';

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isJournalOpen, setIsJournalOpen] = useState(false);
  const [isAuthorised, setIsAuthorised] = useState(false);

  const handleLogIn = () => {
    setIsOpen(true);
    setIsAuthorised(true);
  };

  const handleLogout = () => {
    setIsOpen(false);
    setIsAuthorised(false);
  };

  const handleDailyJournal = (bool) => {
    setIsJournalOpen(bool);
  };

  return (
    <>
      <header>
        {isAuthorised ? (
          <>
            <button onClick={() => handleDailyJournal(true)}>
              <img src={PNGWrite} alt='open journal' />
            </button>
            <button onClick={() => handleLogout()}>
              <img src={PNGLogout} alt='log out' />
            </button>
          </>
        ) : (
          <button onClick={() => handleLogIn()}>
            <img src={PNGLogin} alt='log in' />
          </button>
        )}
      </header>
      <div className='app-container'>
        <Login isOpen={isOpen} handleClose={() => setIsOpen(false)} />
        <Journal isOpen={isJournalOpen} handleClose={() => handleDailyJournal(false)} />

        <div className='tri2'></div>
        <div className='tri4'></div>
        <div className='tri3'></div>
        <div className='circle'></div>
        {/* <div className='tri1'></div> */}
        <Home />
      </div>
    </>
  );
}

export default App;
