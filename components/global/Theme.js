import { createGlobalStyle } from 'styled-components'

const baseColors = {
  blue: '#06205C',
  white: '#FFF',
  black: '#000',
  greyLight: '#29282E',
  grey: '#29282E',
  greyDark: '#29282E',
}

export const lightTheme = {
  colors: {
    primary: {
      bg: baseColors.blue,
      text: baseColors.white
    },
    secondary: {
      bg: baseColors.white,
      text: baseColors.blue
    },
    black: baseColors.black,
    white: baseColors.white
  },
  // TO DELETE
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
    src: url(/fonts/Averta-Bold.woff);
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: Averta;
    src: url(/fonts/Averta.woff);
    font-weight: normal;
    font-style: normal;
  }
  
  body {
    font-family: Averta;
    font-feature-settings: normal;
    font-variant: normal;
    -webkit-font-smoothing: antialiased;
		background-color: ${props => props.theme.colors.primary.bg};
  }
	h1 {
    @media only screen and (min-width: 768px) { 
      font-size: 48px;
      text-align: left;
    }
    font-size: 46px;
    letter-spacing: -3px;
    text-align: center;
    line-height: 1.1em;
    margin: 50px 0;
  }
  h2 {
    @media only screen and (min-width: 768px) {
      font-size: 56px;
    }
    letter-spacing: -3px;
    font-size: 50px;
    margin-bottom: 50px;
  }

  h3 {
    font-size: 24px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.primary.text};
  }
	
	p {
		color: ${props => props.theme.colors.grey};
		font-size: 18px;
		font-weight: normal;
		line-height: 1.4;
    margin-bottom: 1rem;
	}
	
	*:focus {
		outline:none
  }
  
`