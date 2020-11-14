import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MuiThemeProvider, unstable_createMuiStrictModeTheme  as createMuiTheme} from '@material-ui/core/styles';
//unstable_createMuiStrictModeTheme = findDOM waring 방지
const theme = createMuiTheme({
  typography: {
    fontFamily: '"Noto Sans KR", serif'
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
);


reportWebVitals();
