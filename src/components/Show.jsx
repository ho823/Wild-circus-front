import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paragraph, Button } from '../Mainstyle';


const ShowContainer = styled.div`
  margin-right: 2rem;
  border: solid #FF5678;
  padding: 1rem;
  text-align: left;
  border-radius: 10px;
`;

const Titleh2 = styled.h2`
  color: #F94189;
  font-size: 1.5rem;
`;

const Titleh3 = styled.h3`
  color: #A0A0A0;
  font-style: italic;
  font-size: 0.8rem;


`;

const ShowContent = styled(Paragraph)`
  

`;

const ShowButton = styled(Button)`

`;


export default function Show({ title, subtitle, content }) {
  return (
    <ShowContainer>
      <Titleh2>{title}</Titleh2>
      <Titleh3>{subtitle}</Titleh3>
      <ShowContent>{content}</ShowContent>
        <ShowButton>Réserver</ShowButton>
    </ShowContainer>
  );
}

Show.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};