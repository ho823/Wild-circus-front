import React from 'react'; 
import styled from 'styled-components';
import { Titleh3 } from '../Mainstyle';


const PortraitContainer = styled.div`
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8); 
`;

const Photo = styled.img`
  height: 25rem;
`;

const Name = styled.h3`
  color: #F94189;
  font-size: 2.6rem;
  font-variant-caps: small-caps;
  margin: 0;

`;

const Role = styled(Titleh3)`
  font-size: 1rem;



`;


export default function Portrait({image, photoAlt, name, role}) {
  return (
      <PortraitContainer>
        <Photo src={image} alt={photoAlt} /> 
        <Name>{name}</Name>
        <Role>{role}</Role>   
      </PortraitContainer>
  );
}