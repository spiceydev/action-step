import React from 'react';
import styled from 'styled-components';

const AddNoteWrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.05);
  padding: 8px 16px;
  border-radius: 5px;
  label {
    color: ${(props) => props.theme.label};
  }
  input {
    background: ${(props) => props.theme.textFieldBackground};
    border: ${(props) => props.theme.textFieldBorderStyle};
    padding: 8px;
    margin: 0 16px;
    &:focus {
      background: ${(props) => props.theme.textFieldFocusBackground};
    }
  }
  button {
    padding: 8px 16px;
    border: 0;
    background-color: ${(props) => props.theme.buttonBackground};
    color: ${(props) => props.theme.buttonText};
    cursor: pointer;
  }
`;

const StyledAddNote = (props) => {
  const [note, setNote] = React.useState('');

  return (
    <AddNoteWrapper>
      <label>Add another:</label>
      <input
        onChange={(e) => setNote(e.target.value)}
        type="text"
        placeholder="text for new note"
      />
      <button
        onClick={() => {
          if (note.length > 0) props.addNote(note);
        }}
      >
        Add
      </button>
    </AddNoteWrapper>
  );
};

export default StyledAddNote;
