// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import ReactModel from './LogoGrand';
// import { signInWithEmailAndPassword } from 'firebase/auth'; // Fix import
// import { auth } from './firebase'; // Fix import
// import AuthData from  './AuthData';

// const SignInWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const SignInForm = styled.form`
//   width: 350px;
//   padding: 30px;
//   background-color: #fff;
//   border: 1px solid #ddd;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// const FormTitle = styled.h2`
//   text-align: center;
//   margin-bottom: 20px;
//   color: #333;
// `;

// const FormLabel = styled.label`
//   display: block;
//   margin-bottom: 8px;
//   color: #555;
// `;

// const FormInput = styled.input`
//   width: 95%;
//   padding: 10px;
//   margin-bottom: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const FormButton = styled(Link)`
//   width: 100%;
//   padding: 12px;
//   background-color: #008CBA;
//   color: #fff;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #006080;
//   }
// `;

// const SignUpLink = styled.div`
//   text-align: center;
//   margin-top: 10px;
// `;

// const SignUpText = styled.span`
//   color: #555;
// `;

// const SignUpButton = styled(Link)`
//   color: #008CBA;
//   cursor: pointer;
//   text-decoration: underline;

//   &:hover {
//     color: #006080;
//   }
// `;

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const login = async () => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       console.log(userCredential);
//     } catch (error) {
//       console.error('Error Code:', error.code);
//       console.error('Error Message:', error.message);
//     }
//   };
  

//   return (
//     <>
    
//       <SignInWrapper>
//         <SignInForm onSubmit={login}>
//           <FormTitle>Sign In</FormTitle>
//           <FormLabel htmlFor="email">Email</FormLabel>
//           <FormInput
//             type="text"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <FormLabel htmlFor="password">Password</FormLabel>
//           <FormInput
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <FormButton to='/Cards' type="submit">Sign In</FormButton>
//           <SignUpLink>
//             <SignUpText>Don't have an account? </SignUpText>
//             <SignUpButton to="/signup">Sign Up</SignUpButton>
//           </SignUpLink>
          
//         </SignInForm>
//       </SignInWrapper>
//     </>
//   );
// };

// export default SignIn;

// #############################################################################################################

// SignIn.jsx
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth'; // Fix import
// import { auth } from './firebase'; // Fix import
// import AuthData from './AuthData';

// const SignInWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const SignInForm = styled.form`
//   width: 350px;
//   padding: 30px;
//   background-color: #fff;
//   border: 1px solid #ddd;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// const FormTitle = styled.h2`
//   text-align: center;
//   margin-bottom: 20px;
//   color: #333;
// `;

// const FormLabel = styled.label`
//   display: block;
//   margin-bottom: 8px;
//   color: #555;
// `;

// const FormInput = styled.input`
//   width: 95%;
//   padding: 10px;
//   margin-bottom: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const FormButton = styled(Link)`
//   width: 100%;
//   padding: 12px;
//   background-color: #008CBA;
//   color: #fff;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #006080;
//   }
// `;

// const SignUpLink = styled.div`
//   text-align: center;
//   margin-top: 10px;
// `;

// const SignUpText = styled.span`
//   color: #555;
// `;

// const SignUpButton = styled(Link)`
//   color: #008CBA;
//   cursor: pointer;
//   text-decoration: underline;

//   &:hover {
//     color: #006080;
//   }
// `;

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const login = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       console.error('Error Code:', error.code);
//       console.error('Error Message:', error.message);
//     }
//   };

//   return (
//     <>
//       <SignInWrapper>
//         <SignInForm onSubmit={login}>
//           <FormTitle>Sign In</FormTitle>
//           <FormLabel htmlFor="email">Email</FormLabel>
//           <FormInput
//             type="text"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <FormLabel htmlFor="password">Password</FormLabel>
//           <FormInput
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <FormButton to='/Cards' type="submit">Sign In</FormButton>
//           <SignUpLink>
//             <SignUpText>Don't have an account? </SignUpText>
//             <SignUpButton to="/signup">Sign Up</SignUpButton>
//           </SignUpLink>
//         </SignInForm>
//       </SignInWrapper>
//       <AuthData />
//     </>
//   );
// };

// export default SignIn;


import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const SignInWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignInForm = styled.form`
  width: 350px;
  padding: 30px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #555;
`;

const FormInput = styled.input`
  width: 95%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #008CBA;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #006080;
  }
`;

const SignUpLink = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const SignUpText = styled.span`
  color: #555;
`;

const SignUpButton = styled(Link)`
  color: #008CBA;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #006080;
  }
`;

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);

      if (userCredential.user.email === email) {
        alert('تم تسجيل الدخول بنجاح!');
        navigate('/Cards');
      } else {
        alert('تم تسجيل الدخول، لكن هناك خطأ في المعلومات!');
      }
    } catch (error) {
      console.error('Error Code:', error.code);
      console.error('Error Message:', error.message);
    }
  };

  return (
    <>
      <SignInWrapper>
        <SignInForm onSubmit={login}>
          <FormTitle>Sign In</FormTitle>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FormButton type="submit">Sign In</FormButton>
          <SignUpLink>
            <SignUpText>Don't have an account? </SignUpText>
            <SignUpButton to="/signup">Sign Up</SignUpButton>
          </SignUpLink>
        </SignInForm>
      </SignInWrapper>
    </>
  );
};

export default SignIn;
