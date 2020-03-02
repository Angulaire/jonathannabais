import React from 'react';
import styled from 'styled-components'
import {Row, Col } from 'antd'

const StyledRow = styled(Row)`
  @media screen and (min-width: 1280px) {
    padding: 160px 0;
  }
  @media screen and (min-width: 768px) {
    padding: 80px 0px;
  }
  padding: 80px 0px;

`;

const VisualGroup = styled.div`

`

const ContentGroup = styled.div`
  p {
    @media only screen and (min-width: 768px) { 
      font-size: 26px;
    }
    font-family: Roboto Mono;
		color: ${props => props.theme.text.grey};
		font-size: 24px;
		font-weight: 400;
		line-height: 1.4;
		margin-bottom: 40px;
  }
`

type Props = { visualOrder: number, contentOrder: number, title: string, content: string }

const SectionSide = ({visualOrder, contentOrder, title, content}: Props) => (

  
  <StyledRow type="flex" justify="center" align="middle">
    <Col xs={{span: 24, order: 1}} md={{span: 10, order: visualOrder, offset: 2}}>
      <VisualGroup>
        <video src="https://d33wubrfki0l68.cloudfront.net/83aa5da8c65153b31d634ceee5fde93f7a35edef/ab42f/static/images/frontpage/workflow-video.mp4" poster="https://d33wubrfki0l68.cloudfront.net/565497a898cc2d44bb6ccf1bb4fe44b6c78c6132/9ce2b/static/images/frontpage/workflow-video-poster.jpg" autoPlay loop muted playsInline width="100%" className="Video-sc-1rl5e5m-0 hDpAwc" />
      </VisualGroup>
    </Col>
    <Col xs={{span: 24, order: 2}} md={{span: 10, order: contentOrder, offset: 2}}>
      <ContentGroup>
        <h2>{title}</h2>
        <p>{content}</p>
      </ContentGroup>
    </Col>
  </StyledRow>
  
)
export default SectionSide