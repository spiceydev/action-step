import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import NotesContainer from './notes/components/NotesContainer';
import store from './store';
import { darkTheme, lightTheme } from './theme';

const App = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  const handleToggle = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <>
          <NotesContainer toggleTheme={handleToggle} theme={isDarkMode} />
        </>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
