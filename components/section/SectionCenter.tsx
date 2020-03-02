import React from 'react';
import styled from 'styled-components'
import {Row, Col } from 'antd'

const VisualGroup = styled.div`

`

type Props = { visualOrder: number, contentOrder: number, title: string, content: string }

const SectionCenter = ({visualOrder, contentOrder, title, content}: Props) => (

  <Row type="flex" justify="center" align="middle">
    <Col xs={{span: 24, order: 1}} md={{span: 10, order: visualOrder, offset: 2}}>
      <VisualGroup>
        <video src="https://d33wubrfki0l68.cloudfront.net/83aa5da8c65153b31d634ceee5fde93f7a35edef/ab42f/static/images/frontpage/workflow-video.mp4" poster="https://d33wubrfki0l68.cloudfront.net/565497a898cc2d44bb6ccf1bb4fe44b6c78c6132/9ce2b/static/images/frontpage/workflow-video-poster.jpg" autoPlay loop muted playsInline width="100%" className="Video-sc-1rl5e5m-0 hDpAwc" />
      </VisualGroup>
    </Col>
  </Row>
  
)
export default SectionCenter