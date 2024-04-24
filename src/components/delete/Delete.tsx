import * as React from 'react';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { useState } from 'react';
import { styled } from '@mui/system';
import { useNoteContext } from '../../context/notesContext';


const DeleteContainer = styled('div')({
  position: 'relative',
});

const DeleteOption = styled('button')({
  border: '1px solid #b2b2b2',
  backgroundColor: '#fff',
  position: 'absolute',
  top: 35,
  left: '-100%',
  padding: 10,
  boxShadow: '4px 3px 8px 0px rgba(0,0,0,0.15)',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: -10,
    left: 30,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '0 5px 10px 5px',
    borderColor: 'transparent transparent #FFF transparent',
    transform: 'rotate(0deg)',
  },
});

interface DeleteBtnProps {
  index: number;
}

const DeleteBtn: React.FC<DeleteBtnProps> = ({ index }) => {
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const { deleteNote } = useNoteContext();

  return (
    <DeleteContainer>
      <ArrowDropDownCircleIcon
        onClick={() => setOpenSelect(!openSelect)}
        style={{ color: '#00c6ee', cursor: 'pointer' }}
      />
      {openSelect && (
        <DeleteOption onClick={() => deleteNote(index)}>Delete</DeleteOption>
      )}
    </DeleteContainer>
  );
};

export default DeleteBtn;
