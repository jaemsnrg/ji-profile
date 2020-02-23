import { css } from 'styled-components';
import mediaQueries from './mediaQueries';
import { fontFamilyNames } from './fonts';

const { Manrope, EbGaramond } = fontFamilyNames;


const t1Base = {
  fontSize: '4rem',
 
  mq: {
    atTablet: {
      fontSize: '5rem',
    },
    atDesktop: {
      fontSize: '5rem',
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

const blBase = {
  fontSize: '1.2rem',
  mq: {
    atTablet: {
      fontSize: '1.75rem',
    },
    atDesktop: {
      fontSize: '1.75rem',
    },
  },
};

const bmBase = {
  fontSize: '1rem',
  mq: {
    atTablet: {
      fontSize: '1.25rem',
    },
    atDesktop: {
      fontSize: '1.25rem',
    },
  },
};

const bsmBase = {
  fontSize: '0.75rem',
  mq: {
    atTablet: {
      fontSize: '0.9rem',
    },
    atDesktop: {
      fontSize: '0.9rem',
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
    fontFamily: EbGaramond,
  },

  t2: {
    ...t2Base,
    fontFamily: Manrope,
  },

  bl: {
    ...blBase,
    fontFamily: Manrope,
  },

  bm: {
    ...bmBase,
    fontFamily: Manrope,
  },

  bsm: {
    ...bsmBase,
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
