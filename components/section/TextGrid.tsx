import { Row, Col, Button } from 'antd';
import styled from 'styled-components';
import Section from './Default'

const TextCard = styled.div`
`

type TextGridProps = {
  title: string;
  textCards: any;
};

const TextGrid = ({ title, textCards }: TextGridProps) => {

  return (
    <Section>
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