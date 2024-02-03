import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoSinglPage = styled.div`
margin:40px;
    .Logo {
        font-size: 40px;
        font-weight: 900;
        color: #008CBA;
        text-decoration: none;
    }
    span {
        color: #f59e0b;
    }
`;

export default function ReactModel() {
    return (
    <LogoSinglPage>
        <Link className='Logo' to="/"><span>Movie</span>Time</Link>
    </LogoSinglPage>
    )
}




