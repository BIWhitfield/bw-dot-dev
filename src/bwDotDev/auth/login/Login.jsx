import { useState, useContext } from 'react';
import { Auth } from 'aws-amplify';

import Modal from '../../components/modal/Modal';

import { AuthContext } from '../../context/AuthContext';
import { onError } from '../../lib/error-handling/onError';

import './login.css';
import { useFormFields } from '../../lib/hooks/hooksLib';

function Login({ handleClose, isOpen }) {
   const [fields, handleFieldChange] = useFormFields({
     email: '',
     password: '',
   });
  const [isLoading, setIsLoading] = useState(false);
  const { authDispatch } = useContext(AuthContext);

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      await Auth.signIn(fields.email, fields.password);
      authDispatch({ type: 'SET_USER_LOGGED_IN' });
      setIsLoading(false);
      handleClose()
    } catch (e) {
      onError(e);
      setIsLoading(false)
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
            id='email'
            name='email'
            type='email'
            value={fields.email}
            onChange={handleFieldChange}
          />
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            value={fields.password}
            onChange={handleFieldChange}
          />
        </div>
        <button type='submit' disabled={!validateForm()} onClick={handleSubmit}>
          {isLoading ? (
            <p className='loading-text'>Loading...</p>
          ) : (
            <p>Log In</p>
          )}
        </button>
      </form>
    </Modal>
  );
}

export default Login;
