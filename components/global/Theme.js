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
    cyan: '#57DBE9',
    white: '#FFF',
    black: '#000',
    greyLight: '#29282E',
    grey: '#29282E',
    greyDark: '#29282E',
  },
  shadows: {
    primary: '0 5px 10px rgba(0,0,0,.12)',
    primaryHover: '0 8px 30px rgba(0,0,0,.12)'
  },
  radii: {
    primary: '15px'
  },
  cards: {
    primary: {
      borderRadius: 'primary',
      boxShadow: 'primary',
      padding: '40px 35px',
      bg: 'white'
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  buttons: {
    primary: {
      bg: 'cyan',
      '&:hover': {
        cursor: 'pointer',
        opacity: '80%'
      }
    }
  },
  styles: {
    root: {
      '@font-face': {
        fontFamily: 'Averta',
        src: 'url(/fonts/Averta.woff)',
        fontWeight: 400
      },
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontFeatureSettings: 'normal',
      fontVariant: 'normal',
      WebkitFontSmoothing: 'antialiased',
      backgroundColor: 'blue',
      color: 'white',
      'h1': {
        fontSize: ['5', '6'],
        textAlign: ['center', 'left'],
        width: ['100%', '85%'],
        letterSpacing: '-2.5px',
        lineHeight: '58px',
        margin: '50px 0'
      },
      'h2': {
        fontSize: ['40px', '56px'],
        lineHeight: ['48px', '1'],
        marginBottom: '70px'
      },
      'h3': {
        fontSize: '4'
      },
      'h1, h2, h3, h4, h5, h6': {
        color: 'white'
      },
      'p': {
        color: 'blue',
        fontSize: '2',
        lineHeight: '28px',
        marginBottom: '1rem'
      },
      '*:focus': {
        outline: 'none'
      }
    },
  }
}
