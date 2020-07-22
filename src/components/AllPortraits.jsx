import React from 'react'; 
import styled from 'styled-components';
import Portrait from './Portrait';
import confetti from '../image/confetti.png';
import person1 from '../image/person1.png';
import person2 from '../image/person2.png';
import person3 from '../image/person3.png';
import person4 from '../image/person4.png';



const ContainerPage = styled.div`
  height: 100vh;
  background-image: url(${confetti});
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default function AllPortraits() {
  return (     
      <ContainerPage>
        <Portrait image={person1}
         photoAlt="Profile"
         name="Chloé"
         role="Lead Dev"
        />
        <Portrait image={person2}
         photoAlt="Profile"
         name="Marc"
         role="Design"
        />
        <Portrait image={person3}
         photoAlt="Profile"
         name="Vincent"
         role="Developper"
        />
        <Portrait image={person4}
         photoAlt="Profile"
         name="Anne"
         role="Ux Designer"
        />
      </ContainerPage>
  );
}