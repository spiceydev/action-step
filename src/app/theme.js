const theme = {
  space: [0, 4, 8, 16, 32],
  fontSizes: {
    alpha: 48,
    beta: 32,
    gamma: 24,
    epsilon: 16,
  },
};

export const lightTheme = {
  ...theme,
  pageBackground: 'papayawhip',
  pageTitle: 'blueViolet',
  pageText: 'slategrey',
  noteBackground: '#f8f8f8',
  noteHoverBackground: '#fbe2e2',
  noteBorderStyle: '1px solid rgba(0,0,0,0.1)',
  label: 'slateGrey',
  textFieldBackground: '#f8f8f8',
  textFieldFocusBackground: 'lightsteelblue',
  textFieldBorderStyle: '0',
  buttonBackground: 'blueViolet',
  buttonText: 'white',
};

export const darkTheme = {
  ...theme,
  pageBackground: '#111111',
  pageTitle: 'white',
  pageText: '#7b7b7b',
  noteBackground: '#f8f8f8',
  noteHoverBackground: '#404040',
  noteBorderStyle: '1px solid rgba(187,134,252,0.1)',
  label: 'slateGrey',
  textFieldBackground: '#f8f8f8',
  textFieldFocusBackground: 'lightsteelblue',
  textFieldBorderStyle: '0',
  buttonBackground: '#35b7ff',
  buttonText: 'black',
};

export default lightTheme;
