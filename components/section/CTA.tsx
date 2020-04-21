import { Row, Col, Button } from 'antd';
import styled from 'styled-components';
import Layout from '../global/Layout'
import Shapes from '../global/Shapes'

const Link = styled.a`
  color: ${props => props.theme.colors.secondary.text};
  font-size: 26px;
  text-decoration: underline;

  @media only screen and (min-width: 768px) {
    padding-left: 10px;
  }
`

const StyledTitle = styled.h2`
  margin-bottom: 50px;
`

type CtaProps = {
  title: string;
  buttons: any;
  color: string;
  space: string;
  shapes: any;
}

const CTA = ({ title, buttons, color, space, shapes }: CtaProps) => {
  return (
    <section>
      <Layout
        color={color} 
        space={space}
      >
        <Row justify="start" align="middle">
          <Col xs={24} md={24}>
            <StyledTitle>{title}</StyledTitle>
            {buttons.map(button =>
              <Link href={button.href}>{button.text}</Link>
            )}
          </Col>
        </Row>
        <Shapes shapes={shapes}/>
      </Layout>
    </section>
  )
}
export default CTA
