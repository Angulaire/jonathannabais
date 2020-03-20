import { Row, Col, Button } from 'antd';
import styled from 'styled-components';
import Layout from '../global/Layout'
import { position, layout, background } from 'styled-system'

const Section = styled.section`
  position: relative;
`

const Shape = styled.div`
  ${layout}
  ${position}
  ${background}
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`

type CtaProps = {
  title: string;
  button: any;
  color: string;
  space: string;
  shapes: any;
}

const CTA = ({ title, button, color, space, shapes }: CtaProps) => {
  return (
    <Section>
      <Layout
        color={color} 
        space={space}
      >
        <Row justify="start" align="middle">
          <Col xs={24} md={24}>
            <h2>{title}</h2>
            <Button type={button.type}>{button.text}</Button>
          </Col>
        </Row>
      </Layout>
      {shapes.map(shape =>
        <Shape
          position="absolute"
          zIndex={shape.position.zIndex}
          top={shape.position.top}
          right={shape.position.right}
          bottom={shape.position.bottom}
          left={shape.position.left}
          width={shape.size?.width}
          height={shape.size?.height}
          backgroundImage={`url(${shape.image.url})`}
        />
      )}
    </Section>
  )
}
export default CTA