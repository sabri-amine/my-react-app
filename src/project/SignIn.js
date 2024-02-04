


import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactModel from './LogoGrand';

const SignInWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin:-120px;
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
    return (
        <>
        <ReactModel/>
        <SignInWrapper>
            <SignInForm>
                <FormTitle>Sign In</FormTitle>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput type="text" id="username" name="username" required />

                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput type="password" id="password" name="password" required />

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


