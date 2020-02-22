import ManropeFontFile from '@Fonts/ManropeGX.ttf';
import EbGaramondWoff from '@Fonts/EBGaramondRegularWoff.woff';
import EbGaramondWoff2 from '@Fonts/EBGaramondRegularWoff2.woff2';


export const fontFamilyNames = {
  EbGaramond: '"EbGaramond"',
  Manrope: '"Manrope"'
};

const { Manrope, EbGaramond } = fontFamilyNames

const fontFamilies = `

  @font-face {
    font-family: ${Manrope};
    src: url(${ManropeFontFile}) format("ttf");
  }

  @font-face {
    font-family: ${EbGaramond};
    src: url(${EbGaramondWoff2}) format("woff2"), url(${EbGaramondWoff}) format("woff");
  }
  
  `;

export default fontFamilies;
