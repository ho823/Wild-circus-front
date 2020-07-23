import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Paragraph, Button, Title, Input } from '../Mainstyle';
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

const ContactContent = styled(Paragraph)`
  width: 70%;

`;

const ContactButton = styled(Button)`
  box-shadow: 1px 5px 10px -4px rgba(0,0,0,0.75);
  margin-top: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 50%;

`;

const ContactInput = styled(Input)`

`;

const TextArea = styled.textarea`
  margin-top: 2rem;
  height: 6rem;

`;

export default function Contact() {
  return (
    <div>
      <Navbar />

      <ContactContainer>

        <LeftContent>
        <TitleH1>Contactez-nous</TitleH1>
          <ContactContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Tristique ornare vitae risus lectus nisl eu. 
            Ligula orci tristique ultrices auctor dictum sit tincidunt </ContactContent>

            <ContactForm>
            <ContactInput
             placeholder="Nom Prénom"
             type="text"
             name="name"
             />
            <ContactInput
             placeholder="Mail"
             type="email"
             name="email"
             />
            <TextArea
             placeholder="Votre message"
              />
            </ContactForm>

            <ContactButton type="submit">Envoyer</ContactButton>
        </LeftContent>

        <RightContent>
         <img src={dupoplants} alt="plants" />
        </RightContent>
        
      </ContactContainer>


    </div>
  );
}
