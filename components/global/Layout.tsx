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
        'h2, h3': {
          color: 'primary.text',
        }
      },
      secondary: {
        color: 'secondary.text',
        bg: 'secondary.bg',
        'h2, h3': {
          color: 'secondary.text',
        }
      },
      transparent: {
        color: 'primary.text',
        bg: 'transparent',
      },
    },
  }),
  variant({
    prop: 'space',
    variants: {
      default: {
        padding: ['40px 20px', '80px 140px']
      },
      marginLeft: {
        padding: ["40px 20px", "80px 140px 80px 70px"],
        ml: ["0", "70px"]
      }
    }
  })
)


const Layout = ({ children, color, space }) => {
  return (
    <LayoutGroup 
      color={color}
      space={space}
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