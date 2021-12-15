import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './LoginInterface.scss';

function LoginInterface() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [user, loading, error] = useAuthState(auth);
  const [user, loading] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace('/my-account');
  }, [user, loading, history]);
  return (
    <div className="account">
      <h1 className="account__title">
        <span className="span">{'>>'}</span> Log in to your GreenWise account
      </h1>
      <div className="account__container">
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
        <button
          className="account__button"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Log in! <span className="span">{'>>'}</span>
        </button>

        <div className="account__text">
          <span className="span">{'>>'}</span> Alternatively, you can also:
        </div>

        <button
          className="account__button account__button__google"
          onClick={signInWithGoogle}
        >
          Log in with Google <span className="span">{'>>'}</span>
        </button>
        <div className="account__text">
          <span className="span">{'>>'}</span> Help,
          <Link className="account__link" to="/help">
            I forgot my password
          </Link>
        </div>
        <div className="account__text account__text--bottom">
          <span className="span">{'>>'}</span> Don't have an account?
          <Link className="account__link" to="/register">
            Register
          </Link>
          now
        </div>
      </div>
    </div>
  );
}
export default LoginInterface;
