import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
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
      <div className="account__container">
        <h1 className="account__title">
          <span className="span">{'>>'}</span> My Green Wise Account
        </h1>
        <p className="account__text">
          Hello {name}! <br />
          Welcome to your Dashboard
        </p>
        <p className="account__text">
          You are logged in with this email: {user?.email}
        </p>
        <button className="account__button" onClick={logout}>
          Log out <span className="span">{'>>'}</span>
        </button>
      </div>
    </div>
  );
}
export default ProfileInterface;
