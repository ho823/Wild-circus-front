import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Paragraph, ButtonStyled, Title } from '../Mainstyle';
import swinging from '../image/swinging.png';

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
`;

const LeftContent = styled.div`
  width: 50%;
  background-color: #FDFF9B;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgLeft = styled.img`
  width: 100%;
`;

const RightContent = styled.div`
  width: 50%;
  text-align: left;
  padding-left: 5rem;
  padding-top: 3rem;
`;

const TitleH1 = styled(Title)`
  width: 60%;
  color: #F94189;
  font-size: 2rem;
`;

const HomeContent = styled(Paragraph)`
  width: 80%;

`;

const HomeButton = styled(ButtonStyled)`
  box-shadow: 1px 5px 10px -4px rgba(0,0,0,0.75);
  margin-top: 2rem;
`;

export default function Home() {
  return (
    <>
      <Navbar />
      
      <HomeContainer>

        <LeftContent>
          <ImgLeft src={swinging} alt="illustration"/>
        </LeftContent>

        <RightContent>
          <TitleH1>Tristique ornare vitae risus lectus nisl eu</TitleH1>
          <HomeContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Tristique ornare vitae risus lectus nisl eu. Ligula orci
            tristique ultrices auctor dictum sit tincidunt proin amet.
            Adipiscing id arcu at non nulla lacus. Pellentesque donec sit
            habitant turpis arcu sagittis in lobortis.</HomeContent>
            <HomeButton>Réserver</HomeButton>
        </RightContent>
        
      </HomeContainer>
    </>
  );
}