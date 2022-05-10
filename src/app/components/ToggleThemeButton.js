import React from 'react';
import styled from 'styled-components';

import Sun from '../assets/Sun.svg';
import Moon from '../assets/Moon.svg';
import Icon from './Icon';

const ToggleThemeButton = styled.button`
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 2rem;
  cursor: pointer;
  font-size: 15px;
  color: ${(props) => (props.isDarkMode ? `#7b7b7b` : `slategrey`)};
  transition: 0.2s all ease-in-out;
  background: none;
  color: ${(props) => props.color};
  &:hover {
    transition: 0.2s all ease-in-out;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
  }
`;

const StyledToggleThemeButton = (props) => {
  return (
    <ToggleThemeButton
      onClick={() => props.toggleTheme()}
      isDarkMode={props.isDarkMode}
    >
      <div>
        <Icon
          src={props.isDarkMode ? `${Sun}` : `${Moon}`}
          color={props.isDarkMode ? `yellow` : `steelgray`}
          size="gamma"
        />
        Toggle Theme
      </div>
    </ToggleThemeButton>
  );
};

export default StyledToggleThemeButton;
