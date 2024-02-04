// import React, { useEffect, useState } from 'react';
// import { onAuthStateChanged, signOut } from 'firebase/auth';
// import { auth } from './firebase';
// import { useNavigate } from 'react-router-dom';

// const AuthData = () => {
//   const [authUser, setAuthUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setAuthUser(user);
//       } else {
//         setAuthUser(null);
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const userSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         console.log('تم تسجيل الخروج');
//         navigate('/'); // توجيه المستخدم إلى الصفحة الرئيسية عند تسجيل الخروج
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   // رسم المكون باستناد إلى حالة authUser
//   return (
//     <div>
//       {authUser ? (
//         <div>
//           <p>مرحبًا، {authUser.displayName || authUser.email}!</p>
//           <button type="button" onClick={userSignOut}>
//             تسجيل الخروج
//           </button>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default AuthData;

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

  // رسم المكون باستناد إلى حالة authUser
  return (
    <div >
      {authUser && (
        <div style={{border:"5px solid red",display:"flex",alignItems:"center",}}>
          <p style={{margin:"0",padding:"5px"}}>{authUser.displayName || authUser.email}!</p>
          <button type="button" onClick={userSignOut}>
          sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthData;

