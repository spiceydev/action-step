import React, { useState } from 'react';
import styled from 'styled-components';
import DeleteIcon from '../../assets/DeleteIcon.svg';

import Icon from '../../components/Icon';

const Note = styled.div`
  ${(props) => `background: ${props.theme.noteBackgroundColor};`}
  ${(props) => `border: ${props.theme.noteBorder};`}
    ${(props) => `color: ${props.theme.pageText};`}
    ${(props) => `margin-bottom: ${props.theme.space[3]}px;`}
    ${(props) => `padding: ${props.theme.space[3]}px 0;`}
    ${(props) => `font-size: ${props.theme.fontSizes.gamma}px;`}
    ${(props) => `border-bottom: ${props.theme.noteBorderStyle};`}
    display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    ${(props) => `background: ${props.theme.noteHoverBackground};`}
  }
  > button {
    padding: 8px 16px;
    border: 0;
    background-color: ${(props) => props.theme.buttonBackground};
    color: ${(props) => props.theme.buttonText};
    cursor: pointer;
  }
`;

const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.gamma}px;
  color: ${(props) => props.theme.pageText};
`;

const StyledNote = (props) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <Note>
      {!editMode ? (
        <>
          <span onClick={() => setEditMode(!editMode)}>{props.note.text}</span>
          <Icon
            size="gamma"
            color="red"
            onClick={() => props.deleteNote(props.note.id)}
            src={DeleteIcon}
          />
        </>
      ) : (
        <>
          <Input
            value={props.note.text}
            onChange={(e) => {
              props.updateNote({
                ...props.note,
                id: props.note.id,
                text: e.target.value,
              });
            }}
          />
          <button
            onClick={() => {
              setEditMode(false);
            }}
          >
            Save
          </button>
        </>
      )}
    </Note>
  );
};

export default StyledNote;
