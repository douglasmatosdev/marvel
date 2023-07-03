const variables = {
  width: '100%',
  height: '100%',
  margin: '0',
  padding: '0',
  display: 'inline-block',
  flex_direction: 'row',
  justify_content: 'flex-start',
  align_items: 'flex-start',
  flex_wrap: 'no-wrap'
};
export let {
  width,
  height,
  margin,
  padding,
  display,
  flex_direction,
  justify_content,
  align_items,
  flex_wrap
} = variables;


export const widthHeightMarginPadding = (width, height, margin, padding) => (`
  width: ${width};
  height: ${height};
  margin: ${margin};
  padding: ${padding};
`);

export const displayFlex = (display, flex_direction, justify_content, align_items, flex_wrap) => (`
  display: ${display};
  flex-direction: ${flex_direction};
  justify-content: ${justify_content};
  align-items: ${align_items};
  flex-wrap: ${flex_wrap};
`);



/* Media Queries */
const size = {
  mobileVerySmall: '180px',
  mobileSmall: '320px',
  mobileMedium: '375px',
  mobileLarge: '475px',
  tablet: '768px',
  laptop: '1024px',
  laptopMedium: '1080px',
  laptopLarge: '1440px',
  desktop: '2560px'
}

const device = {
  mobileVerySmall: `(min-width: ${size.mobileVerySamll})`,
  mobileSmall: `(min-width: ${size.mobileSmall})`,
  mobileMedium: `(min-width: ${size.mobileMedium})`,
  mobileLarge: `(min-width: ${size.mobileLarge})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopMedium: `(min-width: ${size.laptopMedium})`,
  laptopLarge: `(min-width: ${size.laptopLarge})`,
  desktop: `(min-width: ${size.desktop})`
}


export default device;