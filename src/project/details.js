


import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Coommenter from './mesaage';

const DetailContainer = styled.div`
// display: flex;
margin:30px 50px 0 50px;
height:600px;


`;

const DetailCard = styled.div`
border: 1px solid #ccc;
border-radius: 8px;
max-width:100%;
height:600px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

display: flex;
`;

const DetailImage = styled.img`
max-width:700px;
height:600px;
border-radius: 8px 0 0 8px;
margin-bottom: 20px;
`;

const CommentSection = styled.div`
display: flex;
flex-direction: column;
width:894px;
margin:20px 0 0 40px;



p{
    overflow: hedden;
    margin-top:-10px;
    width:100%;
}
i{
    margin:5px 5px ;
    font-size:23px;
    color:#ffa500;
}


`;

const Button = styled.button`
max-width:50px;
cursor: pointer;
`;

const DetailsPage = () => {
const { id } = useParams();
const [movieDetails, setMovieDetails] = useState(null);
const [comment, setComment] = useState('');

useEffect(() => {
    fetchData();
}, []);

const fetchData = async () => {
    try {
        const response = await fetch(`http://localhost:3001/movies/${id}`);
        const result = await response.json();
        setMovieDetails(result);
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
    }
};



    return (
        <>
        <Header/>
    <DetailContainer>
        {movieDetails && (
        <DetailCard>
            <DetailImage src={movieDetails.photo} alt={movieDetails.nom} />
            <CommentSection>
                <h1 style={{ textAlign:'center',fontWeight:"900"}}>{movieDetails.nom}</h1>
                <div style={{display:'flex' , marginLeft:'10px', marginTop: '40px'}}>
                    <p>{movieDetails.date}</p>
                    <p>{movieDetails.duree}</p>
                    <p>{movieDetails.genre}</p>
                </div>
                <div><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>
                <p style={{ marginTop:'10px'}}>{movieDetails.description}</p>
                <button type='submit' style={{ width:"200px",marginTop:'10px'}}><i class="bi bi-play-fill"></i>Add watchlist</button>
                <div><i class="bi bi-badge-hd"></i><i class="bi bi-badge-4k"></i><i class="bi bi-badge-3d"></i></div>
                
            </CommentSection>
        </DetailCard>
    )}
    </DetailContainer>
    <Coommenter/>
    </>
);
};

export default DetailsPage;

