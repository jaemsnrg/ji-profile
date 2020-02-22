import ManropeFontFile from '@Fonts/ManropeGX.ttf';


export const fontFamilyNames = {
  OpenSansRegular: '"Open Sans Regular"',
  Manrope: '"Manrope"'
};

const { Manrope } = fontFamilyNames

const fontFamilies = `

  @font-face {
    font-family: ${Manrope};
    src: url(${ManropeFontFile}) format("ttf");
  }
  
  `;

export default fontFamilies;
