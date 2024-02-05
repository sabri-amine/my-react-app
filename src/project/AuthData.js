import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const AuthData = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

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
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        // console.log('Vous êtes déconnecté');
        alert('Vous êtes déconnecté')
        navigate('/'); // Diriger un utilisateur vers la page login lors de la déconnexion
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div >
      {authUser && (
        <div style={{display:"flex",alignItems:"center"}}>
          <p style={{margin:"0",padding:"2px",border:"2px solid red",height:"32px",borderRadius:"5px",margin:"0 0 0 5px",background:"red",color:"#fff",fontWeight:"bold"}}>{authUser.displayName || authUser.email}</p>
          <button style={{margin:"0 0 2px 5px",border:"2px solid red",height:"32px",borderRadius:"5px",background:"red",fontWeight:"bold"}} type="button" onClick={userSignOut}>
          Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthData;

