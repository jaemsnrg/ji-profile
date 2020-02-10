import { css } from 'styled-components';
import mediaQueries from './mediaQueries';
import { fontFamilyNames } from './fonts';

const { Manrope } = fontFamilyNames;


const t1Base = {
  fontSize: '2.8rem',
  mq: {
    atTablet: {
      fontSize: '4rem',
    },
    atDesktop: {
      fontSize: '4rem',
    },
  },
};

const t2Base = {
  fontSize: '1.2rem',
  mq: {
    atTablet: {
      fontSize: '1.5rem',
    },
    atDesktop: {
      fontSize: '1.5rem',
    },
  },
};

const bmBase = {
  fontSize: '1rem',
  mq: {
    atTablet: {
      fontSize: '1.5rem',
    },
    atDesktop: {
      fontSize: '1.5rem',
    },
  },
};

const bxsBase = {
  fontSize: '0.8rem',
  mq: {
    atTablet: {
      fontSize: '1rem',
    },
    atDesktop: {
      fontSize: '1rem',
    },
  },
};

const standardTextStyles = {

  t1: {
    ...t1Base,
    fontFamily: Manrope,
  },

  t2: {
    ...t2Base,
    fontFamily: Manrope,
  },

  bm: {
    ...bmBase,
    fontFamily: Manrope,
  },

  bxs: {
    ...bxsBase,
    fontFamily: Manrope,
  },

};

// Add any custom text styling here.
const customTextStyles = {

};

const textStyles = {
  ...standardTextStyles,
  ...customTextStyles,
};

const generateTextMediaQueries = (textStyleMediaQueries) =>
  css`
    ${() => mediaQueries.atTablet`
    font-size: ${textStyleMediaQueries.atTablet.fontSize};
  `}
  ${() => mediaQueries.atDesktop`
    font-size: ${textStyleMediaQueries.atDesktop.fontSize};
  `}
  `;

const text = Object.keys(textStyles).reduce((accum, label) => {
  const textCss = () => css`
    font-family: ${textStyles[label].fontFamily};
    font-size: ${textStyles[label].fontSize};
    ${generateTextMediaQueries(textStyles[label].mq)}
  `;
  return { ...accum, [label]: textCss };
}, {});

export default text;
