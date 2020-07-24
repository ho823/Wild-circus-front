import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components';
import { ButtonStyled, Input, Title } from '../Mainstyle';

import blueplant from '../image/blueplant.png';

const ModalInput = styled(Input)`
`;

const ModalButton = styled(ButtonStyled)`
  margin-top: 2rem;
`;

const InternButton = styled(ButtonStyled)`
  margin-top: 2rem;
  margin-right: 1rem;
`;

const ModalTitle = styled(Title)``;

const ImageModal = styled.img`
  height: 6rem;
  margin-left: 3rem;
`;

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #F94189',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <ModalTitle id="simple-modal-title">On réserve ?</ModalTitle>
      <p id="simple-modal-description">
        <ModalInput
         placeholder="Nom Prénom"
         type="text"
         name="name"/>    
        <ModalInput
          placeholder="Mail"
          type="email"
          name="email"
        />
      </p>
      <InternButton type="button" onClick={handleOpen}>
        Réserver
      </InternButton>
      <InternButton type="button" onClick={handleClose}>
        Annuler
      </InternButton>
      <ImageModal src={blueplant} alt="blue plant" />
    </div>
  );

  return (
    <div>

      <ModalButton type="button" onClick={handleOpen}>
        Envoyer
      </ModalButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
