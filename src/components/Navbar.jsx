import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.div`
  font-size: 1rem;
  @media (max-width: 500px){
    font-size: 0.5rem;
  }
`;

const ListItem = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
`;

const Items = styled.li`
  margin-right: 2rem;
  @media (max-width: 500px){
    margin-right: 1rem;
  }
`;

const LinkNav = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus {
    text-decoration: 0.2rem underline #F94189;
  }

  &:hover {
    color: #636363;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <ListItem>
        <Items><LinkNav to="/">Accueil</LinkNav></Items>
        <Items><LinkNav to="/spectacle">Spectacles</LinkNav></Items>
        <Items><LinkNav to="/aproximite">Près de chez vous</LinkNav></Items>
        <Items><LinkNav to="/apropos">À propos</LinkNav></Items>
        <Items><LinkNav to="/contact">Contact</LinkNav></Items>
      </ListItem>
      
    </Nav>
  );
}

