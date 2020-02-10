import { css } from 'styled-components';

const standardMediaQueries = {
  atTablet: 768,
  atDesktop: 1024,
  atWidescreen: 1440,
};

const customMediaQueries = {
  c500: 500,
  c670: 670,
  c1600: 1600,
};

const mediaQueryBreakPoints = {
  ...standardMediaQueries,
  ...customMediaQueries
};

const mediaQueries = Object.keys(mediaQueryBreakPoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  const emSize = mediaQueryBreakPoints[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default mediaQueries;
