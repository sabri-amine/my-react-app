import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: #fff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:50px;

  .Logo {
      font-size: 20px;
      font-weight: 900;
      color: #008CBA;
      text-decoration: none;
    }
    
    span {
      color: #f59e0b;
    }
      
`;


const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin:0;
  }

  ul li {
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 700;
  }

  a:hover {
    color: #f59e0b;
  }
`;

const SearchInput = styled.input`
  border-radius: 5px;
  margin-left: auto;
  margin-top:1px;
  padding: 4px 15px;
  border: 3px solid;
`;

const UserIcons = styled.div`
  display: flex;

  a {
    margin-left: 15px;
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
    padding: 5px 15px;
    border-radius: 5px;
  }

  .sabonner {
    background-color: #f59e0b;
    border: none;
  }

  .signin {
    background-color: #008CBA;
    border: none;
  }
`;

const Header = ({ onSearch, onGenreChange }) => {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('');

  const handleSearch = (value) => {
    setSearch(value.trim());
    onSearch(value.trim());
  };

  const handleGenreChange = (value) => {
    setGenre(value);
    onGenreChange(value);
    setSearch('');
  };

  return (
    <div>
      <HeaderWrapper>
        <Link className='Logo' to="/"><span>Movie</span>Time</Link>
        <Nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </Nav>
        <SearchInput
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <UserIcons>
          <Link to="/sabonner" className='sabonner' >S'ABONNER</Link>
          <Link to="/signin" className='signin'>SIGN IN</Link>
        </UserIcons>
      </HeaderWrapper>
    </div>
  );
};

export default Header;