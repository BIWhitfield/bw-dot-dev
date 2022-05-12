import { useState } from 'react';
import SVGLogin from './bwDotDev/assets/images/login.png';
import SVGLogout from './bwDotDev/assets/images/logout.png';
import Home from './bwDotDev/home/Home';

import './App.css';
import Login from './bwDotDev/auth/login/Login';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthorised, setIsAuthorised] = useState(false);

  const handleLogIn = () => {
    setIsOpen(true);
    setIsAuthorised(true);
  };

  const handleLogout = () => {
    setIsOpen(false);
    setIsAuthorised(false);
  }

  return (
    <>
      <header>
        {isAuthorised ? (
          <button onClick={() => handleLogout()}>
            <img src={SVGLogout} alt='log out' />
          </button>
        ) : (
          <button onClick={() => handleLogIn()}>
            <img src={SVGLogin} alt='log in' />
          </button>
        )}
      </header>
    <div className='app-container'>
      <Login isOpen={isOpen} handleClose={() => setIsOpen(false)} />
      
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
