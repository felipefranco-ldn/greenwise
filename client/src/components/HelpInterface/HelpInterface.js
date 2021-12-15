import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { auth, sendPasswordResetEmail } from '../../firebase';
import './HelpInterface.scss';

function Help() {
  const [email, setEmail] = useState('');
  // const [user, loading, error] = useAuthState(auth);
  const [user, loading] = useAuthState(auth);

  const history = useHistory();
  useEffect(() => {
    if (loading) return;
    if (user) history.replace('/my-account');
  }, [user, loading, history]);

  return (
    <div className="account">
      <h1 className="account__title">
        <span className="span">{'>>'}</span> Help resetting your password
      </h1>
      <div className="account__container">
        <input
          type="text"
          className="account__text-box"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
        />
        <button
          className="account__button"
          onClick={() => sendPasswordResetEmail(email)}
        >
          Send password reset email <span className="span">{'>>'}</span>
        </button>
        <div className="account__text">
          <span className="span">{'>>'}</span> Don't have an account?{' '}
          <Link className="account__link" to="/register">
            Register
          </Link>{' '}
          now
        </div>
      </div>
    </div>
  );
}
export default Help;
