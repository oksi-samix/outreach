import * as React from 'react';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import LocalCafeRoundedIcon from '@mui/icons-material/LocalCafeRounded';
import PersonIcon from '@mui/icons-material/Person';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListIcon from '@mui/icons-material/List';

export type IconTypes =
  | 'message'
  | 'phone'
  | 'coffee'
  | 'beer'
  | 'meeting_note'
  | 'list';
export const IconsMapper: Record<IconTypes, JSX.Element> = {
  message: <ChatBubbleIcon />,
  phone: <CallRoundedIcon />,
  meeting_note: <PersonIcon />,
  coffee: <LocalCafeRoundedIcon />,
  beer: <SportsBarIcon />,
  list: <ListIcon />,
};
const Icon = (props: { icon: IconTypes }) => {
  return <>{IconsMapper[props.icon]}</>;
};

export default Icon;
