import React, { useEffect } from 'react';
import Note from './Note';
import Title from './Title';
import styled from 'styled-components';
import AddNote from './AddNote';
import ToggleThemeButton from '../../components/ToggleThemeButton';

const Notes = styled.div`
  ${(props) => `background: ${props.theme.pageBackground};`}
  min-height: 100%;
  padding: 20px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const StyledNotes = (props) => {
  useEffect(() => {
    props.loadNotes();
  }, [props]);

  return (
    <Notes>
      <header>
        <Title>Notes</Title>
        <ToggleThemeButton
          toggleTheme={props.toggleTheme}
          isDarkMode={props.isDarkMode}
        />
      </header>
      <AddNote addNote={props.addNote} />
      {Object.values(props.notes).map((note, i) => {
        return (
          <Note
            key={i}
            note={note}
            deleteNote={props.deleteNote}
            updateNote={props.updateNote}
          />
        );
      })}
    </Notes>
  );
};

export default StyledNotes;
