import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  margin-bottom: 40px;
`

const HeadingGroup = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media (min-width: 768px) { 
    margin-top: 180px;
  }

  h1 {
    text-align: center;
    font-size: 5.6em;
  }

  p {
    @media only screen and (min-width: 768px) { 
      font-size: 26px;
    }
		font-size: 24px;
		line-height: 1.4;
		margin-bottom: 40px;
		text-align: center;
	}

`;


type HeroProps = { 
  title: string;
  description: string;
}

const Hero = ({ title, description }: HeroProps) => {
  return (
    <StyledRow type="flex" justify="center" align="middle">
      <Col xs={24} md={14}>
        <HeadingGroup>
          <h1>{title}</h1>
          <p>{description}</p>
        </HeadingGroup>
      </Col>
    </StyledRow>
  )
}

export default Hero;