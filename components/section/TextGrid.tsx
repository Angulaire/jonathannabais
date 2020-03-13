import { Row, Col, Button } from 'antd';
import styled from 'styled-components';
import { variant } from 'styled-system';


const Section = styled('section')(
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
    },
  }),
  variant({
    prop: 'space',
    variants: {
      default: {
        padding: ['40px 20px', '80px 140px']
      },
      fullWidth: {

      },
      marginLeft: {
        padding: ['40px 20px', '80px 140px 80px 70px'],
        marginLeft: ['0', '70px']
      }
    }
  })
)

const TextCard = styled.div`
  .number {
    font-size: 120px;
  }
`

type TextGridProps = {
  title: string;
  textCards: any;
  color: string;
  space: string;
}


const TextGrid = ({ title, textCards, color, space }: TextGridProps) => {

  return (
    <Section 
      color={color} 
      space={space}
    >
      <h2>{title}</h2>
      <Row justify="center" align="top">
      {textCards.map( textCard =>
        <Col xs={24} md={8}>
          <div data-aos="fade-up" data-aos-duration="1000">
            <TextCard>
              <div className="number">{textCard.number}</div>
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