import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { auth, db, logout } from '../../firebase';
import './ProfileInterface.scss';

function ProfileInterface() {
  // const [user, loading, error] = useAuthState(auth);
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState('');
  const history = useHistory();

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection('users')
        .where('uid', '==', user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace('/login');
    fetchUserName();
    // }, [user, loading, fetchUserName, history]);
  }, [user, loading, history, fetchUserName]);

  return (
    <div className="account">
      <div className="account__profile-container">
        <h1 className="account__title">
          <span className="span">{'>>'}</span> My Green Wise Account
        </h1>
        <p className="account__text--large">
          Hello {name}. Welcome to your Dashboard!
        </p>

        {localStorage.getItem('userElCo2') ||
        localStorage.getItem('userElCo2') ||
        localStorage.getItem('userFlCo2') ? (
          <div className="account__estimates">
            <div>
              <span className="span--bold">Your latest estimates are:</span>
            </div>
            <div className="account__estimates-box">
              <p className="account__estimates-key">
                Home electricity consumption:
              </p>
              <p className="account__estimates-value">
                {parseInt(localStorage.getItem('userElCo2'))} kg of CO2 released
              </p>
            </div>
            <div className="account__estimates-box">
              <p className="account__estimates-key">Travelling by plane:</p>
              <p className="account__estimates-value">
                {parseInt(localStorage.getItem('userFlCo2'))} kg of CO2 released
              </p>
            </div>

            <div className="account__estimates-box">
              <p className="account__estimates-key"> Travelling by car:</p>
              <p className="account__estimates-value">
                {parseInt(localStorage.getItem('userVeCo2'))}
                kg of CO2 released
              </p>
            </div>
            <div className="account__estimates-box">
              <p className="account__estimates-value">Total emissions:</p>
              <p className="account__estimates-value">
                {parseInt(localStorage.getItem('userElCo2')) +
                  parseInt(localStorage.getItem('userFlCo2')) +
                  parseInt(localStorage.getItem('userVeCo2'))}{' '}
                kg of CO2 released
              </p>
            </div>
          </div>
        ) : (
          <div className="account__estimates">
            Come back later to see a summary of your estimates
          </div>
        )}

        <Link className="profile__button" to="/estimate">
          <span className="span">{'<<'}</span> Go back to Estimate
        </Link>

        <p className="account__text--small">
          You are logged in with this email: <br />
          {user?.email}
        </p>
        <button
          className="profile__button--light profile__button"
          onClick={logout}
        >
          Log out <span className="span">{'>>'}</span>
        </button>
      </div>
    </div>
  );
}
export default ProfileInterface;
