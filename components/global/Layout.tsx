import styled from 'styled-components';
import { variant, space, typography, position, layout, background } from 'styled-system';


const LayoutGroup = styled('div')(
  space,
  typography,
  position,
  layout,
  background,
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

const defaultProps = {
  textAlign: "",
  background: []
};

const Layout = ({ children, color, space, textAlign, background }) => {
  return (
    <LayoutGroup 
      position="relative"
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
      height={space?.height}
      minHeight={space?.minHeight}
      maxHeight={space?.maxHeight}
      width={space?.width}
      minWidth={space?.minWidth}
      maxWidth={space?.maxWidth}
      textAlign={textAlign}
      backgroundImage={background?.backgroundImage}
      backgroundSize={background?.backgroundSize}
      backgroundPosition={background?.backgroundPosition}
      backgroundRepeat={background?.backgroundRepeat}
    >
      {children}
    </LayoutGroup>
  )
}

Layout.defaultProps = defaultProps;
export default Layout