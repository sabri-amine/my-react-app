import React from 'react';
import styled from 'styled-components';
import ReactModel from './LogoGrand';
import { Link } from 'react-router-dom';

const SignUpWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin:-120px;
`;

const SignUpForm = styled.form`
    width: 350px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`;

const FormLabel = styled.label`
    display: block;
    margin-bottom: 8px;
`;

const FormInput = styled.input`
    width: 95%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const FormButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #f59e0b;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const SignInLink = styled.div`
    text-align: center;
    margin-top: 10px;
`;

const SignInText = styled.span`
    color: #555;
`;

const SignInButton = styled(Link)`
    color: #008CBA;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
        color: #006080;
    }
`;

const SignUp = () => {
    return (
        <>
        <ReactModel/>
        <SignUpWrapper>
            <SignUpForm>
                <FormTitle>Sign Up</FormTitle>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput type="text" id="username" name="username" required />

                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput type="email" id="email" name="email" required />

                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput type="password" id="password" name="password" required />

                <FormButton type="submit">Sign Up</FormButton>

                <SignInLink>
                    <SignInText>Don't have an account? </SignInText>
                    <SignInButton to="/signin">Sign In</SignInButton>
                </SignInLink>
            </SignUpForm>
        </SignUpWrapper>
        </>
    );
};

export default SignUp;
