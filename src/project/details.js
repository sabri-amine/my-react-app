


import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

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
text-align: center;
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
align-items: center;


p{
    overflow: hedden;
    margin-top:-10px;
    width:500px;
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

const handleButtonClick = () => {
    // Implement your logic when the button is clicked
    setComment(movieDetails.description);
};

    return (
    <DetailContainer>
        {movieDetails && (
        <DetailCard>
            <DetailImage src={movieDetails.photo} alt={movieDetails.nom} />
            <CommentSection>
                <h2>{movieDetails.nom}</h2>
                <p>Description :</p>
                <span></span>
                <p>{movieDetails.nom}</p>
                <span></span>
                <h5></h5>
                <p></p>
                <p></p>
                <p>{comment}</p>

                <Button onClick={handleButtonClick}>Show</Button>
            </CommentSection>
        </DetailCard>
    )}
    </DetailContainer>
);
};

export default DetailsPage;

