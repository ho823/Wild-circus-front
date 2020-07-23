import React from 'react'; 
import styled from 'styled-components';
import AllPortraits from './AllPortraits';
import Navbar from './Navbar';

const Content = styled.div`
height: 100%;
`;

export default function About() {
  return (

    <>
  
      <Navbar />
      <Content>
        <AllPortraits />
      </Content>

      </>
        
    
  );
}