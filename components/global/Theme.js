import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  bg: {
    primary: '#FFF',
    matt: '#FAFAFA',
    secondaryLightOnly: '#0D293D',
    selected: '#fffce6',
    shade: '#e8e8e8',
    shadowLightOnly: '0 5px 10px rgba(0,0,0,.12)',
    greyDark: '#CCC',
    border: '#EAEAEA',
    borderDarkOnly: 'none'
  },
  text: {
    primary: '#0E2A3E',
    secondary: '#2f3037',
    tertiary: '#525560',
    quarternary: '#9194a1',
    grey: '#8F95A6',
    placeholder: 'rgba(82,85,96,0.5)',
    onPrimary: '#ffffff'
  },
  // ...
}

export const darkTheme = {
  bg: {
    primary: '#050505',
    matt: '#121212',
    secondaryLightOnly: '#050505',
    selected: '#FFBB00',
    shade: '#393939',
    shadowLightOnly: 'none',
    greyDark: 'rgb(68,68,68,.8)',
    border: '#333',
    borderDarkOnly: "#333333"
  },
  text: {
    primary: '#FBFBFC',
    secondary: '#e3e4e8',
    tertiary: '#a9abb6',
    quarternary: '#6c6f7e',
    grey: '#7E7E7E',
    placeholder: 'rgba(145,148,161,0.5)',
    onPrimary: '#050505'
  },
  // ...
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Geomanist;
    src: url(/fonts/Geomanist-Bold.woff);
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: Geomanist;
    src: url(/fonts/Geomanist-Regular.woff);
    font-weight: normal;
    font-style: normal;
  }
  
  body {
    font-family: Geomanist, -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue, sans-serif;
		-webkit-font-smoothing: antialiased;
		background-color: ${props => props.theme.bg.primary};
  }
	h1 {
    @media only screen and (min-width: 768px) { 
      font-size: 4rem;
    }
    font-size: 2.5rem;
    line-height: 1.1em;
    margin: 50px 0;
  }
  h2 {
    @media only screen and (min-width: 768px) {
      font-size: 3.5rem;
    }
    font-size: 2rem;
    line-height: 1.1;
    margin: 50px 0;
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -.05rem;
    color: ${props => props.theme.text.primary};
    font-weight: bold;
  }
	
	p {
		color: ${props => props.theme.text.grey};
		font-size: 18px;
		font-weight: normal;
		line-height: 1.4;
    margin-bottom: 1rem;
	}
	
	*:focus {
		outline:none
  }

  .ant-btn-lg {
    padding: 0 25px;
  }
  .ant-btn-link {
    color: ${props => props.theme.text.primary};
  }
  
`