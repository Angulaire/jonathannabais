import { Row, Col, Button } from 'antd';
import styled from 'styled-components';
import Layout from '../global/Layout';
import Shapes from '../global/Shapes';

const TextCard = styled.div`
  .number {
    font-size: 120px;
  }

  h3 {
    margin-bottom: 20px;
  }
`

type TextGridProps = {
  title: string;
  textCards: any;
  color: string;
  space: string;
  shapes: any;
}

const defaultProps = {
  shapes: []
}


const TextGrid = ({ title, textCards, color, space, shapes }: TextGridProps) => {

  return (
    <section id={title}>
      <Layout 
        color={color} 
        space={space}
      >
        <h2>{title}</h2>
        <Row justify="center" align="top" gutter={[48, 48]}>
        {textCards.map((textCard, i) =>
          <Col xs={24} md={8} key={i}>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay={i * 100}>
              <TextCard>
                <div className="number">{textCard.number}</div>
                <h3>{textCard.title}</h3>
                <p>{textCard.description}</p>
              </TextCard>
            </div>
          </Col>
        )}
        </Row>
        <Shapes shapes={shapes}/>
      </Layout>
    </section>
  )
}

TextGrid.defaultProps = defaultProps
export default TextGrid
