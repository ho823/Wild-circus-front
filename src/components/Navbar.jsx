import React from 'react';
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

const Link = styled.a`
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
        <Items><Link href="#">Accueil</Link></Items>
        <Items><Link href="#">Spectacles</Link></Items>
        <Items><Link href="#">Près de chez vous</Link></Items>
        <Items><Link href="#">À propos</Link></Items>
        <Items><Link href="#">Contact</Link></Items>
      </ListItem>
      
    </Nav>
  );
}

