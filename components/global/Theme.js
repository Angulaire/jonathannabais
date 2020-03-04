import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  bg: {
    primary: '#06205C',
    secondary: '#FFF'
  },
  text: {
    primary: '#FFF',
    secondary: '#06205C'
  },
  // ...
}

export const darkTheme = {
  // bg: {
  // },
  // text: {
  // }
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Averta;
    src: url(/fonts/Averta.woff);
    font-weight: bold;
    font-style: normal;
    word-spacing: -20px;
  }
  @font-face {
    font-family: Averta;
    src: url(/fonts/Averta.woff);
    font-weight: normal;
    font-style: normal;
  }
  
  body {
    font-family: Averta, -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
		background-color: ${props => props.theme.bg.primary};
  }
	h1 {
    @media only screen and (min-width: 768px) { 
      font-size: 52px;
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