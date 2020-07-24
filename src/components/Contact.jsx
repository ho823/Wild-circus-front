import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import Navbar from './Navbar';
import { Paragraph, Title, Input, ButtonStyled } from '../Mainstyle';
import dupoplants from '../image/duoplants.png';

import SnackBar from './SnackBar';


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

const ContactButton = styled(ButtonStyled)`
  box-shadow: 1px 5px 10px -4px rgba(0,0,0,0.75);
  margin-top: 2rem;
`;


export default function Contact() {
  
  const [user, setUser] = useState([]);
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (name==="" && mail==="" && message===""){
      setShow(false);
    }else{
      setShow(true);
    }
    
  });

  const postUser = async (e) => {
    e.preventDefault();
    try {
      const userList = await axios.post(`http://localhost:7000/contact`, {
        name,
        mail,
        message
      });
      setUser(user.data);
      setName('');
      setMail('');
      setMessage('');
    } catch (err) {
      setError(err);
    }
  };

  const postName = (e) => {
    setName(e.target.value);
  };

  const postMail = (e) => {
    setMail(e.target.value);
  };

  const postMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <Navbar />

      <ContactContainer>

        <LeftContent>
        <TitleH1>Contactez-nous</TitleH1>
          <ContactContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Tristique ornare vitae risus lectus nisl eu. 
            Ligula orci tristique ultrices auctor dictum sit tincidunt </ContactContent>

            <ContactForm onSubmit={postUser}>
            <ContactInput
             required
             placeholder="Nom Prénom"
             type="text"
             name="name"
             onChange={postName}
             value={name}
             />
            <ContactInput
             required
             placeholder="Mail"
             type="email"
             name="email"
             onChange={postMail}
             value={mail}
             />
            <TextArea
            onChange={postMessage}
             placeholder="Votre message"
              />
            <ContactButton type="submit" value="Envoyer">{ show ? <SnackBar alert="Votre message a bien été envoyé" /> : <SnackBar alert="Erreur" /> }</ContactButton>
            </ContactForm>

        </LeftContent>

        <RightContent>
         <img src={dupoplants} alt="plants" />
        </RightContent>
        
      </ContactContainer>


    </div>
  );
}
