/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom/';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NotesContextProvider, useNoteContext, Note } from '../notesContext';

const TestComponent = () => {
  const { notes, addNewNote, deleteNote } = useNoteContext();

  return (
    <div>
      <ul>
        {notes.map((note: Note) => (
          <li key={note.id}>
            {note.user} - {note.note}
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          addNewNote({
            id: Math.floor(Math.random() * 100),
            user: 'New User',
            note: 'New Note',
            date: new Date(),
            icon: 'coffee',
          })
        }
      >
        Add Note
      </button>
    </div>
  );
};

describe('NotesContext', () => {
  it('should add a new note and delete a note', async () => {
    render(
      <NotesContextProvider>
        <TestComponent />
      </NotesContextProvider>
    );

    userEvent.click(screen.getByText('Add Note'));
    expect(await screen.findByText('New User - New Note')).toBeInTheDocument();
    const deleteButton = screen.getByText('Delete');
    userEvent.click(deleteButton);
    expect(await screen.queryByText('New User - New Note')).toBeNull();
  });
});
