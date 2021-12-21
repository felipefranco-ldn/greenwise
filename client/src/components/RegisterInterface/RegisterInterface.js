import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useHistory } from 'react-router-dom';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../../firebase';
import './RegisterInterface.scss';
import planetIcon from '../../assets/images/icons/planet-icon.png';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  // const [user, loading, error] = useAuthState(auth);
  const [user, loading] = useAuthState(auth);
  const history = useHistory();
  const register = () => {
    if (!name) alert('Please enter name');
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) history.replace('/my-account');
  }, [user, loading, history]);

  return (
    <div className="account">
      <h1 className="account__title">
        {' '}
        <span className="span">{'>>'}</span> Register to create a GreenWise
        account
      </h1>
      <div className="account__container">
        <input
          type="text"
          className="account__text-box"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <input
          type="text"
          className="account__text-box"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
        />
        <input
          type="password"
          className="account__text-box"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="account__button" onClick={register}>
          Register! <span className="span">{'>>'}</span>
        </button>

        <div className="account__text">
          <span className="span">{'>>'}</span> Alternatively, you can also:
        </div>

        <button
          className="account__button account__button__google"
          onClick={signInWithGoogle}
        >
          Register with Google <span className="span">{'>>'}</span>
        </button>
        <div className="account__text">
          <span className="span">{'>>'}</span> Already have an account?{' '}
          <Link className="account__link" to="/login">
            Login
          </Link>{' '}
          now
        </div>
      </div>
      <img
        className="account__planet-icon"
        alt="planet earth icon"
        src={planetIcon}
      />
    </div>
  );
}
export default Register;
