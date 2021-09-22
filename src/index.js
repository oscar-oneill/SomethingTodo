import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import './index.css';
import App from './App';
import theme from './theme';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

ReactDOM.render(
  <ThemeProvider theme={theme}> 
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
