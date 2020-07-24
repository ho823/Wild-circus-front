import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Accordion from './Accordion';

export default function Backoffice() {
  
  const [error, setError] = useState();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await axios.get(`http://localhost:7000/contact`) ;
        setUserList(users.data);
      } catch (err) {
        setError(err);
      }
    };
    getUsers();
  }, []);

  return (

      <div>
        {userList.map(user => (
          <Accordion name={user.name} email={user.mail} text={user.message} />
        ))}
     
      </div>
  );
}
