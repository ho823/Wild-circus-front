import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Paragraph, Button, Title } from '../Mainstyle';
import dupoplants from '../image/duoplants.png';


const ContactContainer = styled.div`
  height: 100vh;
  display: flex;
`;

const LeftContent = styled.div`
  width: 50%;
  text-align: left;
  padding-left: 5rem;
  padding-top: 3rem;
`;



const RightContent = styled.div`
  width: 50%;
  background-color: #FDFF9B;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const TitleH1 = styled(Title)`
  width: 60%;
  color: #F94189;
  font-size: 2rem;
`;

const HomeContent = styled(Paragraph)`
  width: 80%;

`;

const HomeButton = styled(Button)`
  box-shadow: 1px 5px 10px -4px rgba(0,0,0,0.75);
`;


export default function Contact() {
  return (
    <div>
      <Navbar />

      <ContactContainer>

        <LeftContent>
        <TitleH1>Contactez-nous</TitleH1>
          <HomeContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Tristique ornare vitae risus lectus nisl eu. 
            Ligula orci tristique ultrices auctor dictum sit tincidunt </HomeContent>
            <HomeButton>Envoyer</HomeButton>
        </LeftContent>

        <RightContent>
         <img src={dupoplants} alt="plants" />
        </RightContent>
        
      </ContactContainer>


    </div>
  );
}
