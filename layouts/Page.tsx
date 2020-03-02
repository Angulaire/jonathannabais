import Header from '../components/navigation/Header'
import Footer from '../components/navigation/Footer'
import { Row, Col } from 'antd'
import styled from 'styled-components'

const Content = styled.main`
  padding: 0 20px 20px;

  @media (min-width: 768px) { 
    padding: 0px 80px 20px;
  }
`

const Hero = styled(Row)`
  padding-top: 10rem;
  padding-bottom: 3rem;

  h1 {
    font-size: 24px;
    text-align: center;
  }
`

const Page = ({ children, title }) => (
  <div>
    <Header afterScroll={false} />
    <Content>
      <Hero type="flex" justify="center" align="middle">
        <Col xs={24} md={12}>
          <h1>{title}</h1>
        </Col>
      </Hero>
      { children }
    </Content>
    <Footer />
  </div>
)

export default Page