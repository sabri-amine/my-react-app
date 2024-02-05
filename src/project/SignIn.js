import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import img1 from '../Images/imge1.jpg'

const SignInWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
`;

const SignInForm = styled.form`
  width: 350px;
  padding: 30px;
  background-color: #000;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #fff ;
`;

const FormLabel = styled.label`
  display: block;
  margin:0 0 8px 10px;
  color: #fff ;
`;

const FormInput = styled.input`
  width: 95%;
  padding: 8px;
  margin:0 0 16px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  width:70%;
  padding: 10px;
  margin:0 0 0 50px;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const SignUpLink = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const SignUpText = styled.span`
  color: #fff;
`;

const SignUpButton = styled(Link)`
  color: red;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #ff0000ae;
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
        alert('connection avec succes');
        navigate('/Cards');
      } 
    } catch (error) {
      console.error('Error Code:', error.code);
      console.error('Error Message:', error.message);
      alert('un probleme de donnees');
    }
  };

  return (
    <>
      <SignInWrapper style={{ background: `url(${img1})no-repeat center center fixed`,backgroundSize: 'cover', }}>
        <SignInForm onSubmit={login}>
          <FormTitle>Sign In</FormTitle>
          <FormLabel htmlFor="email">Email :</FormLabel>
          <FormInput
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <FormLabel htmlFor="password">Password :</FormLabel>
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
