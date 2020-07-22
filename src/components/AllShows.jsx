import React from 'react';
import Show from './Show';
import styled from 'styled-components';

const ContainerAllShows = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
`;

export default function AllShows() {
  return (
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
  );
}