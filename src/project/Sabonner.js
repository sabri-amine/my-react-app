import React from 'react';
import styled from 'styled-components';
import img1 from "../imagesMarc/tele.webp"
import ReactModel from './LogoGrand';

const Container = styled.div`
display: flex;
justify-content: space-around;
margin-top: 2rem;
`;

const PricingCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 2rem;
width: 250px;
`;

const CardContent = styled.div`
background-color: #fff;
padding: 1.5rem;
border-radius: 1rem;
box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
font-size: 1.25rem;
text-transform: uppercase;
font-weight: 900;
margin-bottom: 1rem;
text-align: center;
`;

const Price = styled.h2`
font-size: 1.5rem;
font-weight: bold;
margin-bottom: 1rem;
text-align: center;

span {
    font-size: 0.75rem;
    font-weight: normal;
    margin-left: 0.5rem;
}
`;

const Separator = styled.div`
height: 0.2rem;
width: 50%;
background-color: #007bff;
margin: 1rem auto;
`;

const FeatureList = styled.ul`
list-style: none;
padding: 0;
margin: 1rem 0;
font-size: 0.875rem;
text-align: left;

    li {
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;

    i {
        margin-right: 0.5rem;
    }
}

    li.text-muted {
        color: #6c757d;
        text-decoration: line-through;
}
`;

const SubscribeButton = styled.a`
display: block;
width: 100%;
padding: 0.5rem;
background-color: #007bff;
color: #fff;
text-align: center;
text-decoration: none;
border-radius: 1rem;
box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
`;

const Sabonner = () => {
const cardData = [
    {
        title: 'Basic',
        price: '$199',
        features: ['Lorem ipsum', 'Dolor sit amet', 'Consectetur adipiscing'],
        features2: ['Lorem ipsum', 'Dolor sit amet', 'Dolor sit amet'],
    },
    {
        title: 'Pro',
        price: '$299',
        features: ['Lorem ipsum', 'Dolor sit amet', 'Consectetur adipiscing', 'Sed do eiusmod', 'Sed do eiusmod'],
        features2: ['Lorem ipsum'],
    },
    {
        title: 'Premium',
        price: '$399',
        features: ['Lorem ipsum', 'Dolor sit amet', 'Sed do eiusmod', 'Dolor sit amet', 'Consectetur adipiscing', 'Consectetur adipiscing'],
        features2: [],
    },
];

return (
    <>
    <ReactModel/>
    <Container>
        {cardData.map((card, index) => (
        <PricingCard key={index}>
            <CardContent>
            <Title>{card.title}</Title>
            <Price>
                {card.price}
                <span>/month/</span>
            </Price>
            <Separator />
            <FeatureList>
                {card.features.map((feature, i) => (
                <li key={i}><i className="bi bi-check-lg text-primary"></i>{feature}</li>
            ))}
                {card.features2.map((feature1, i) => (
                <li key={i} className="text-muted"><i className="bi bi-x-lg text-danger"></i><del>{feature1}</del></li>
            ))}
            </FeatureList>
            <SubscribeButton href="#" className="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</SubscribeButton>
            </CardContent>
        </PricingCard>
        ))}
    </Container>
    <div>
        <h3 style={{ marginLeft: '50px',fontWeight:'bold' }}>MOVIETAME DISPO LÀ ET PUIS AUSSI LÀ</h3>
        <p style={{ marginLeft: '50px' }}>Commencez votre visionnage sur mobile ou tablette et finissez sur ordinateur ou télévision, ou l’inverse. C’est vous qui décidez !</p>
        <img src={img1} style={{ width: '100%' }} />

    </div>
    </>
);
};

export default Sabonner;

