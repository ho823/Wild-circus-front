import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paragraph, Titleh3 } from '../Mainstyle';

import Modal from './Modal';



const ShowContainer = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  border: solid #FF5678;
  padding: 1rem;
  text-align: left;
  border-radius: 10px;
  background-color: white;
`;

const Titleh2 = styled.h2`
  color: #F94189;
  font-size: 1.5rem;
`;

const h3Show = styled(Titleh3)`
  color: #A0A0A0;
  font-style: italic;
  font-size: 0.8rem;
`;

const ShowContent = styled(Paragraph)`
  

`;



export default function Show({ title, subtitle, content }) {
  return (
    <ShowContainer>
      <Titleh2>{title}</Titleh2>
      <h3Show>{subtitle}</h3Show>
      <ShowContent>{content}</ShowContent>
      <Modal />
    </ShowContainer>
  );
}

Show.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};