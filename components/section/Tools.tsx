import { Row, Col, Button } from 'antd';
import styled from 'styled-components';
import Layout from '../global/Layout'

const ToolCard = styled.div`
  background-color: #172D5F;
  padding: 10px;
  height: 160px;
  margin-bottom: 12px;
`

const CardImage = styled.div`
  width: 100%;
  height: 100%;

  a {
    display: block;
    width: 100%;
    height: 100%;
    -webkit-background-size: fill; /* Safari et Chrome */
    -moz-background-size: fill; /* Firefox */
    -o-background-size: fill; /* Opera */
    background-size: fill;
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-transition: all 1s ease; /* Safari et Chrome */
    -moz-transition: all 1s ease; /* Firefox */
    -ms-transition: all 1s ease; /* Internet Explorer 9 */
    -o-transition: all 1s ease; /* Opera */
    transition: all 1s ease;
  }
  
  a:hover {
    -webkit-transform:scale(1.1); /* Safari et Chrome */
    -moz-transform:scale(1.1); /* Firefox */
    -ms-transform:scale(1.1); /* Internet Explorer 9 */
    -o-transform:scale(1.1); /* Opera */
    transform:scale(1.1);
  }
`

const InfoHover = styled.div`
  .info-hover {
    display: none;
  }

  &:hover {
    cursor: pointer;
    .info-hover {
      display: inline;
    }
  }

  p {
    text-align: center;
  }
`

type ToolsProps = {
  title: string;
  color: string;
  space: string;
  tools: any;
}


const Tools = ({ title, color, space, tools }: ToolsProps) => {

  return (
    <section>
      <Layout
        color={color} 
        space={space}
      >
        <h2>{title}</h2>
        <InfoHover>
          <Row justify="center" align="top" gutter={[16, 16]}>
            {tools.map(tool =>
              <Col xs={12} md={4}>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <ToolCard>
                    <CardImage>
                      <a style={{backgroundImage: `url(${tool.logo.url})`}}/>
                    </CardImage>
                  </ToolCard>
                  <p>{tool.name.toUpperCase()}</p>
                </div>
              </Col>
            )}
          </Row>
          <p className="info-hover">*Nos clients</p>
        </InfoHover>
      </Layout>
    </section>
  )
}

export default Tools