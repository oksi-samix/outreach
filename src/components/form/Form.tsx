import React, { FC, useContext, useState, FormEvent } from 'react';
import { Grid, Button, TextField } from '@mui/material';
import { Icon, IconList } from '../icons';
import { UsersContext } from '../../context/usersContext';
import { useNoteContext } from '../../context/notesContext';
import { useIconsContext } from '../../context/iconsContext';
import { styled } from '@mui/system';
import { IconComponent } from '../icons/IconList';

const CustomBtn = styled(Button)({
  backgroundColor: '#5bc6b3',
  padding: 10,
  borderRadius: 4,
  color: 'white',
  '&:hover': {
    backgroundColor: '#00c6ee',
  },
});

const CustomInput = styled(TextField)({
  marginBottom: 10,
  backgroundColor: '#fff',
});

const FormBox = styled('form')({
  backgroundColor: '#f6f6f6',
  padding: 10,
  borderRadius: 4,
});

const IconBox = styled('div')({
  position: 'absolute',
  left: 0,
  marginLeft: 20,
  div: {
    display: 'inline-flex',
  },
});
const Form: FC = () => {
  const [note, setAddNote] = useState<string>('');
  const { contact, user } = useContext(UsersContext);
  const { addNewNote } = useNoteContext();
  const { selectedIcon, resetSelection } = useIconsContext();

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    addNewNote({
      id: Math.floor(Math.random() * 100),
      user: user,
      note: note,
      date: new Date(),
      icon: selectedIcon,
    });
    setAddNote('');
    resetSelection();
  };

  return (
    <Grid container spacing={12}>
      <Grid item flexGrow={1}>
        <IconBox>
          <IconComponent>
            <Icon icon="list" />
          </IconComponent>
        </IconBox>
        <FormBox autoComplete="off" onSubmit={handleSubmit}>
          <CustomInput
            placeholder={`Add a note about ${contact}`}
            multiline
            fullWidth
            value={note}
            onChange={(ev) => setAddNote(ev.target.value)}
          />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconList />
            <CustomBtn type="submit">Submit</CustomBtn>
          </Grid>
        </FormBox>
      </Grid>
    </Grid>
  );
};

export default Form;
