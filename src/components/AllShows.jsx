import React from 'react';
import Navbar from './Navbar';
import Show from './Show';
import styled from 'styled-components';
import ballet from '../image/ballet.png';


const ContainerAllShows = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3rem;
  background-color: #FDFF9B;
  background-image: url(${ballet});
  background-size: 67%;
  background-repeat: no-repeat;
  background-position: right;
`;

export default function AllShows() {
  return (
    <>
    <Navbar />
    <ContainerAllShows>
      <Show 
      title="Acrobatie aérienne" 
      subtitle="Lorem ipsum dolor sit amet." 
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique ornare vitae risus lectus nisl eu. Ligula orci tristique ultrices auctor dictum sit tincidunt proin amet. Adipiscing id arcu at non nulla lacus. "/>
      <Show 
      title="Roue Cyr" 
      subtitle="Lorem ipsum dolor sit amet." 
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique ornare vitae risus lectus nisl eu. Ligula orci tristique ultrices auctor dictum sit tincidunt proin amet. Adipiscing id arcu at non nulla lacus. "/>
      <Show 
      title="Mât chinois" 
      subtitle="Lorem ipsum dolor sit amet." 
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique ornare vitae risus lectus nisl eu. Ligula orci tristique ultrices auctor dictum sit tincidunt proin amet. Adipiscing id arcu at non nulla lacus. "/>      
    </ContainerAllShows>
    </>
  );
}