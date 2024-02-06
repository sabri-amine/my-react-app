import React, { useEffect, useState } from 'react';
// Import des fonctions nécessaires depuis Firebase
import { onAuthStateChanged, signOut } from 'firebase/auth';
// Import de l'objet auth depuis le fichier firebase
import { auth } from './firebase';
// Import de la fonction utilisée pour la navigation
import { useNavigate } from 'react-router-dom';

const AuthData = () => {
// Utilisation de useState pour gérer l'état des données d'authentification
  const [authUser, setAuthUser] = useState(null);
  // Utilisation de useNavigate pour la navigation
  const navigate = useNavigate();

  useEffect(() => {
  // Appel de la fonction lors du changement d'état d'authentification
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

