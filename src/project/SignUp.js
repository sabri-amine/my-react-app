import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import img1 from '../Images/imge1.jpg'

const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignUpForm = styled.form`
  width: 370px;
  padding:30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #000;
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
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;

const SignInLink = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const SignInText = styled.span`
  color: #fff;
`;

const SignInButton = styled(Link)`
  color: red;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #ff0000ae;
  }
`;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const register = async (e) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User registered:', user, 'with username:', username);
    } catch (error) {
      console.error('Error Code:', error.code);
      console.error('Error Message:', error.message);
    }
  };

  return (
    <SignUpWrapper style={{ background: `url(${img1})no-repeat center center fixed`,backgroundSize: 'cover', }}>
      <SignUpForm onSubmit={register}>
        <FormTitle>Sign Up</FormTitle>
        <FormLabel htmlFor="username">Username :</FormLabel>
        <FormInput
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <FormLabel htmlFor="email">Email :</FormLabel>
        <FormInput
          type="email"
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

        <FormButton type="submit">Sign Up</FormButton>

        <SignInLink>
          <SignInText>Already have an account? </SignInText>
          <SignInButton to="/">Sign In</SignInButton>
        </SignInLink>
      </SignUpForm>
    </SignUpWrapper>
  );
};

export default SignUp;
