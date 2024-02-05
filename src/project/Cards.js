import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from './Header';
import HomeSlider from '../project/HomeSlider';
import Scroll from './Scroll';
import CardComponent from './Objet';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import  { search,filter,all }  from '../redux/filmslice/filmslice';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: px;
  margin: 5px;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  overflow: hidden;
  height: 300px;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Select = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  background-color: #fff;
  color: #333;
  margin: 5px 0 0 17px;
  width: 20%;

  &:hover {
    border-color: #555;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const CardImageLink = styled(Link)`
  text-decoration: none;
`;

const CardImage = styled.img`
  max-width: 100%;
  height: 300px;
  cursor: pointer;
  border-radius: 5px;

  filter: grayscale(0%);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ContentContainer = styled.div`
position:relative;
height:35%;
width:100%;
bottom:100px;
border-radius: 0 0 20px 20px;
z-index: 1;


&::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background: rgb(185, 185, 185, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 0px 0px 20px 20px;
  z-index: -1;
  right: 0.01px;
}
h3{
  color: #fff;
  padding: 5px 0 0 10px;
  font-size: 17px;
  margin: 0;
}
p{
  color: #fff;
  padding: 5px 0px 5px 10px;
  font-size: 13px;
  margin: 0;
}
h6{
  color: #fff;
  padding: 5px 0px 5px 10px;
  font-size: 13px;
  margin: 0;
}
h6 span{
  color:#000;
  background: yellow;
  padding: 2px 5px ;
  box-sizing: 5px;
  margin: 0;
}
h6 .bi{
  color: yellow;
  font-size: 15px;
  margin-left: 5px;
}
`;

const Cards = () => {
  const films=useSelector(state=> state.film)
  const dispatch=useDispatch()
  console.log('films:',films)
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData();
  }, [search, selectedGenre]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/movies');
      const result = await response.json();
      dispatch(all(result))   /**dispatch kadir nafs haja li kadir siteseData**/
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };
  const filterData = () => {
    return films.filter(
      (item) =>
        (selectedGenre === 'All' || item.genre === selectedGenre) &&
        (!search || item.nom.toLowerCase().includes(search.toLowerCase()))
    );
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleGenreChange = (value) => {
    setSelectedGenre(value);
    setSearch('');
  };

  return (
    <div>
      <Header onSearch={handleSearch} onGenreChange={handleGenreChange} />
      <HomeSlider />
      <Select onChange={(e) => handleGenreChange(e.target.value)}>
        <option value="All">All Movie</option>
        <option value="Action">Action</option>
        <option value="Document">Document</option>
        <option value="Histoire">Histoire</option>
        <option value="Anime">Anime</option>
      </Select>

      <CardContainer>
        {filterData().map((item) => (
          <Card key={item.id}>
            <CardImageLink to={`/details/${item.id}`}>
              <CardImage src={item.photo} alt={item.nom} />
              <ContentContainer className='content'>
                <h3>{item.nom}</h3>
                <p>{item.a}</p>
                <h6><span>MovieTime</span><i class="bi bi-star-fill"></i> 9.0</h6>
              </ContentContainer>
            </CardImageLink>
          </Card>
        ))}
      </CardContainer>
      <Scroll />
      <CardComponent/>
      <Footer/>
    </div>
  );
};

export default Cards;
