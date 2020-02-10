import React, { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Home from '@pages/Home';
import mediaQueries from './mediaQueries';
import fontFamilies from './fonts';
import text from './text';
import colours from './colours';

const styles = {
    mq: mediaQueries,
    colours,
    text,
  };
  
const GlobalStyle = createGlobalStyle`
  body { 
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ${fontFamilies}
`;

 export const AppWithStylesAndRoutes = ({ history }) => {
    return (
        <ThemeProvider theme={styles}>
          <Fragment>
            <GlobalStyle />
            <Home />
          </Fragment>
        </ThemeProvider>
    );
  };
