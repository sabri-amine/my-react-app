import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import { Link } from 'react-router-dom';

const AuthData = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array to ensure the effect runs only once during component mount

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Logout done');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Render your component based on authUser state
  return (
    <div>
      {authUser ? (
        <div>
          <p>Welcome, {authUser.displayName || authUser.email}!</p>
          <button type="button" onClick={userSignOut}>
            Sign Out
          </button>
        </div>
      ) : (
        <Link to="/" className='signin'>SIGN IN</Link>
      )}
    </div>
  );
};

export default AuthData;
