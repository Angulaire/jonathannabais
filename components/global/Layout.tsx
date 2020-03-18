import styled from 'styled-components';
import { variant, space } from 'styled-system';


const LayoutGroup = styled('div')(
  space,
  variant({
    prop: 'color',
    variants: {
      primary: {
        color: 'primary.text',
        bg: 'primary.bg',
      },
      secondary: {
        color: 'secondary.text',
        bg: 'secondary.bg',
        'h2, h3': {
          color: 'black',
        }
      },
      transparent: {
        color: 'primary.text',
        bg: 'transparent',
      },
    },
  })
)


const Layout = ({ children, color, space }) => {
  return (
    <LayoutGroup 
      color={color} 
      m={space?.m}
      mt={space?.mt}
      mr={space?.mr}
      mb={space?.mb}
      ml={space?.ml}
      mx={space?.mx}
      my={space?.my}
      p={space?.p}
      pt={space?.pt}
      pr={space?.pr}
      pb={space?.pb}
      pl={space?.pl}
      px={space?.px}
      py={space?.py}
    >
      {children}
    </LayoutGroup>
  )
}

export default Layout