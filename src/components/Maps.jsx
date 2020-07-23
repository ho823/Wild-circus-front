import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import { Title, Button, Input } from '../Mainstyle';
import laying from '../image/laying.png';
import map from '../image/map.png';


const MapsTitle = styled(Title)`
  width: 20%;
`;

const SearchButton = styled(Button)`
  margin-top: 1rem;
`;

const SearchInput = styled(Input)`
`;

const MapsContent = styled.div`
  display: flex;
  height: 70vh;
  flex-direction: column;
  align-items: center;
  `;

const MapsForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20%;
  box-sizing: border-box;
`;

const OneMap = styled.img`
  margin-top: 1rem;

`;

const Banner = styled.div`
  height: 30vh;
  background-image: url(${laying});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: left;
  background-color: #FDFF9B;

`;

export default function Maps() {
  return (
    <>
      <Navbar />

      <MapsContent>
      <MapsTitle>Les spectacles près de chez moi</MapsTitle>

      <MapsForm>
      <SearchInput type="search" placeholder="Tapez votre code postal"></SearchInput>
      <SearchButton type="submit">Chercher</SearchButton>
      </MapsForm>

      <OneMap src={map} alt="Map" />
    </MapsContent>

    <Banner>
    </Banner>
    </>
  );
}
