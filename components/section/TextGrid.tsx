import { Row, Col, Button } from 'antd';
import styled from 'styled-components';
import { variant } from 'styled-system';

// const Section = styled.section`
//   @media only screen and (min-width: 768px) { 
//     padding: 60px;
//   }
//   padding: 20px;
// `
const Section = styled('section')(
  variant({
    variants: {
      primary: {
        color: 'white',
        bg: 'transparent',
        'h3': {
          color: 'white',
        }
      },
      secondary: {
        color: 'black',
        bg: 'white',
      },
    }
  })
)

const TextCard = styled.div`
`

type TextGridProps = {
  title: string;
  textCards: any;
  variant: string;
}


const TextGrid = ({ title, textCards, variant }: TextGridProps) => {

  return (
    <Section variant={variant}>
      <h2>{title}</h2>
      <Row justify="center" align="middle">
      {textCards.map( textCard =>
        <Col xs={24} md={8}>
          <div data-aos="fade-up" data-aos-duration="1000">
            <TextCard>
              <h3>{textCard.title}</h3>
              <p>{textCard.description}</p>
            </TextCard>
          </div>
        </Col>
      )}
      </Row>
    </Section>
  )
}

export default TextGrid