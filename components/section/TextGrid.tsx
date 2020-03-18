import { Row, Col, Button } from 'antd';
import styled from 'styled-components';
import Section from './Default'
import Layout from '../global/Layout'

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
    <section>
      <Layout 
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
      </Layout>
    </section>
  )
}

export default TextGrid