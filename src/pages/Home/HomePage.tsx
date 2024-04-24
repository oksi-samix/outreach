import { FC } from 'react';
import * as React from 'react';

import Grid from '@mui/material/Grid';
import { Form } from '../../components/form';
import { NoteList } from '../../components/note';
import { NotesContextProvider } from '../../context/notesContext';
import { IconsProvider } from '../../context/iconsContext';
import { styled } from '@mui/system';

const Divider = styled('span')({
  width: 1,
  background: '#b2b2b2',
  height: '100%',
  display: 'block',
  position: 'absolute',
  left: 40,
});
const HomePage: FC = () => {
  return (
    <NotesContextProvider>
      <IconsProvider>
        <Divider />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
        >
          <Form />
          <NoteList />
        </Grid>
      </IconsProvider>
    </NotesContextProvider>
  );
};

export default HomePage;
