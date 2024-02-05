import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img1  from '../Images/logo.png';
const LogoSinglPage = styled.div`
margin:40px;
    .Logo {
        font-size: 40px;
        weight: ;
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
        <Link className='Logo' to="/Cards"><img src={img1} style={{width:"210px"}}/></Link>
    </LogoSinglPage>
    )
}




