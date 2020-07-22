import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import { Title, Button } from '../Mainstyle';
import laying from '../image/laying.png';

const MapsTitle = styled(Title)`
  width: 20%;

`;

const Banner = styled.div`
  height: 50vh;
  background-image: url(${laying});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: left;
  background-color: #FDFF9B;
`;

const SearchButton = styled(Button)`
width: 20%;
`;

const SearchInput = styled.input`
  padding: 0.6rem 0.8rem 0.6rem 0.8rem;
  margin-right: 1rem;
  width: 20%;
`;

const MapsContent = styled.div`


`;

export default function Maps() {
  return (
    <>
      <Navbar />
      <MapsContent>
      <MapsTitle>Les spectacles près de chez moi</MapsTitle>
      <SearchInput type="search" placeholder="Tapez votre code postal"></SearchInput>
      <SearchButton type="submit">Chercher</SearchButton>
      <Banner>
      </Banner>
    </MapsContent>
    </>
  );
}
