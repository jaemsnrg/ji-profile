import OpenSansRegularEot from '@Fonts/OpenSans-Regular.eot';
import OpenSansRegularWoff from '@Fonts/OpenSans-Regular.woff';
import ManropeFontFile from '@Fonts/ManropeGX.ttf';
// import OpenSansRegularWoff from '@Fonts/OpenSans-Regular.woff';
// import OpenSansRegularEot from '@Fonts/OpenSans-Regular.eot';
// import OpenSansRegularWoff from '@Fonts/OpenSans-Regular.woff';


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
