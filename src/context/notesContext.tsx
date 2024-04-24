import React, {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
} from 'react';
import _ from 'lodash';
import { IconTypes } from '../components/icons/Icon';

export interface Note {
  id: number;
  user: string;
  note: string;
  date: Date;
  icon: IconTypes;
}

interface NotesContextValue {
  notes: Note[];
  addNewNote: (note: Note) => void;
  deleteNote: (index: number) => void;
}

export const NotesContext = createContext<NotesContextValue | undefined>(
  undefined
);
export const NotesContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const orderByDate = (notes: Note[]): Note[] => {
    return _.orderBy(notes, ['date'], 'desc');
  };

  const addNewNote = (note: Note): void => {
    setNotes((prevState) => orderByDate([...prevState, note]));
  };

  const deleteNote = (id: number): void => {
    setNotes((prevState) =>
      orderByDate(prevState.filter((note) => note.id !== id))
    );
  };

  return (
    <NotesContext.Provider value={{ notes, addNewNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNoteContext = (): NotesContextValue => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error(
      'useNoteContext must be used within a NotesContextProvider'
    );
  }
  return context;
};
