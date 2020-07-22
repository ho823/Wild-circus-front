import React from 'react';
import styled from 'styled-components';
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

const RightContent = styled.div`
  width: 50%;
  text-align: left;
  padding-left: 5rem;
  padding-top: 3rem;
`;

const Title = styled.h1`
  width: 60%;
  color: #F94189;
  font-size: 2rem;
`;

const Paragraph = styled.p`
width: 80%;
color: #373737;
font-size: 1rem;

`;

const Button = styled.button`
  background-color: #FDD86D;
  padding: 0.8rem 1.2rem 0.8rem 1.2rem;
  box-shadow: 1px 5px 10px -4px rgba(0,0,0,0.75);
  border: none;
`;

export default function Home() {
  return (
    <HomeContainer>

      <LeftContent>
        <img src={swinging} alt="illustration"/>
      </LeftContent>

      <RightContent>
        <Title>Tristique ornare vitae risus lectus nisl eu</Title>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Tristique ornare vitae risus lectus nisl eu. Ligula orci
          tristique ultrices auctor dictum sit tincidunt proin amet.
          Adipiscing id arcu at non nulla lacus. Pellentesque donec sit
          habitant turpis arcu sagittis in lobortis.</Paragraph>
          <Button>Réserver</Button>
      </RightContent>
      
    </HomeContainer>
  );
}