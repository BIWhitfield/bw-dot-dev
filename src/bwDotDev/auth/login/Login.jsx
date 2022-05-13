import { useState } from 'react';
import { Auth } from 'aws-amplify';
import Modal from '../../components/modal/Modal';

import './login.css';

function Login({ handleClose, isOpen }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await Auth.signIn(email, password);
      alert('Logged in');
    } catch (e) {
      alert(e.message);
    }
  }
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <form className='login-form'>
        <h6>Log In</h6>
        <div className='login-form-inputs'>
          <label htmlFor='email'>Email</label>
          <input
            autoFocus
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' disabled={!validateForm()} onClick={handleSubmit}>
          Log In
        </button>
      </form>
    </Modal>
  );
}

export default Login;
