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
        console.log('تم تسجيل الخروج');
        navigate('/'); // توجيه المستخدم إلى الصفحة الرئيسية عند تسجيل الخروج
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div >
      {authUser && (
        <div style={{display:"flex",alignItems:"center"}}>
          <p style={{margin:"0",padding:"2px",border:"2px solid #f59e0b",height:"32px",borderRadius:"5px",margin:"0 0 0 5px",background:"#f59e0b",color:"#000",fontWeight:"bold"}}>{authUser.displayName || authUser.email}</p>
          <button style={{margin:"0 0 2px 5px",border:"2px solid #008CBA",height:"32px",borderRadius:"5px",background:"#008CBA",fontWeight:"bold"}} type="button" onClick={userSignOut}>
          Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthData;

