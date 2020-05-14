export default {
  fonts: {
    body: 'Averta, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    blue: '#06205C',
    white: '#FFF',
    black: '#000',
    greyLight: '#29282E',
    grey: '#29282E',
    greyDark: '#29282E',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontFeatureSettings: 'normal',
      fontVariant: 'normal',
      '-webkit-font-smoothing': 'antialiased',
      backgroundColor: 'blue',
      color: 'white',
      '@font-face': {
        fontFamily: 'Averta',
        src: 'url(/fonts/Averta.woff)',
      },
      'h1': {
        fontSize: ['46px', '48px'],
        textAlign: ['center', 'left'],
        width: ['100%', '85%'],
        letterSpacing: '-2.5px',
        lineHeight: '58px',
        margin: '50px 0'
      },
      'h2': {
        fontSize: ['40px', '56px'],
        lineHeight: ['48px', '1'],
        letterSpacing: '-3px',
        marginBottom: '70px'
      },
      'h3': {
        fontSize: '24px'
      },
      'h1, h2, h3, h4, h5, h6': {
        color: 'white'
      },
      'p': {
        color: 'blue',
        fontSize: '17px',
        lineHeight: '28px',
        marginBottom: '1rem'
      },
      '*:focus': {
        outline: 'none'
      }
    },
  }
}
