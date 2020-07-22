import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import { Title } from '../Mainstyle';
import laying from '../image/laying.png';

const MapsTitle = styled(Title)`

`;

const Banner = styled.div`
  height: 50vh;
  background-image: url(${laying});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: left;
  background-color: #FDFF9B;
`;


export default function Maps() {
  return (
    <div>
      <Navbar />
      <MapsTitle>Les spectacles près de chez moi</MapsTitle>
      <input></input>
      <button>Chercher</button>
      <Banner>
      </Banner>
    </div>
  );
}
