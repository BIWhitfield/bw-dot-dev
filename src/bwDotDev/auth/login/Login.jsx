import React from 'react';
import Modal from '../../components/modal/Modal';

import './login.css';

function Login({ handleClose, isOpen }) {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <div className='login-form'>
        <h6>Log In</h6>
        <div className='login-form-inputs'>
          <label for='username'>Username</label>
          <input name='username' type='text' />
          <label for='password'>Password</label>
          <input name='password' type='password' />
        </div>
      </div>
    </Modal>
  );
}

export default Login;
