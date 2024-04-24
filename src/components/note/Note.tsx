import * as React from 'react';
import { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import moment from 'moment';
import { Icon } from '../icons/index';
import { useNoteContext, Note as NoteType } from '../../context/notesContext';
import { UsersContext } from '../../context/usersContext';
import { IconComponent } from '../icons/IconList';
import DeleteBtn from '../delete';

const NoteComponent = styled('div')({
  backgroundColor: '#f6f6f6',
  padding: 10,
  borderRadius: 4,
  marginTop: 10,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const NoteTitle = styled('h3')({
  color: '#00c6ee',
  fontSize: 16,
  fontWeight: 'bold',
  span: {
    fontSize: 14,
    color: 'black',
  },
});

const NoteText = styled('p')({
  color: '#b2b2b2',
});

const IconBox = styled('div')({
  position: 'absolute',
  left: -5,
  display: 'inline-flex',
  alignItems: 'center',
  div: {
    display: 'inline-flex',
  },
  span: {
    color: '#b2b2b2',
    marginRight: 4,
  },
});

const Note = ({ data }: { data: NoteType }) => {
  const { contact } = useContext(UsersContext);
  return (
    <>
      <IconBox>
        <span>{moment(data.date).fromNow(true).substring(0, 4)}</span>
        <IconComponent>
          <Icon icon={data.icon} />
        </IconComponent>
      </IconBox>
      <NoteComponent>
        <div>
          <NoteTitle>
            {data.user} <span>had a {data.icon} with</span> {contact}
          </NoteTitle>
          <NoteText>{data.note}</NoteText>
        </div>
        <div>
          <DeleteBtn index={data.id} />
        </div>
      </NoteComponent>
    </>
  );
};

const NoteList: React.FC = () => {
  const { notes } = useNoteContext();
  return (
    <Grid container spacing={2}>
      <Grid item flexGrow={1}>
        {notes.map((note: NoteType) => (
          <Note data={note} key={note.id} />
        ))}
      </Grid>
    </Grid>
  );
};

export default NoteList;
