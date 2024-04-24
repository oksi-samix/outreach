import * as React from 'react';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import LocalCafeRoundedIcon from '@mui/icons-material/LocalCafeRounded';
import PersonIcon from '@mui/icons-material/Person';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useIconsContext } from '../../context/iconsContext';
import { styled } from '@mui/system';

type IconProps = {
  isSelected?: boolean;
};

export const IconComponent = styled('span')<IconProps>(({ isSelected }) => ({
  backgroundColor: isSelected ? '#00c6ee' : 'white',
  padding: 5,
  borderRadius: '50%',
  border: '1px solid grey',
  margin: 2,
  display: 'inline-flex',
  alignItems: 'center',
  svg: {
    color: isSelected ? 'white' : '#b2b2b2',
  },
}));

const IconContainer = styled('div')({
  display: 'inline-flex',
  alignItems: 'center',
  position: 'relative',
  zIndex: 1000,
});
const IconList = () => {
  const { selectedIcon, handleClick } = useIconsContext();
  return (
    <IconContainer>
      <IconComponent isSelected={selectedIcon === 'message'}>
        <ChatBubbleIcon onClick={() => handleClick('message')} />
      </IconComponent>
      <IconComponent isSelected={selectedIcon === 'phone'}>
        <CallRoundedIcon onClick={() => handleClick('phone')} />
      </IconComponent>
      <IconComponent isSelected={selectedIcon === 'coffee'}>
        <LocalCafeRoundedIcon onClick={() => handleClick('coffee')} />
      </IconComponent>
      <IconComponent isSelected={selectedIcon === 'beer'}>
        <SportsBarIcon onClick={() => handleClick('beer')} />
      </IconComponent>
      <IconComponent isSelected={selectedIcon === 'meeting_note'}>
        <PersonIcon onClick={() => handleClick('meeting_note')} />
      </IconComponent>
    </IconContainer>
  );
};

export default IconList;
