import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  @media only screen and (min-width: 768px) { 
    margin: 70px;
    height: 400px;
  }
  margin: 52px 40px 40px;
  height: 250px;
  border-radius: 8px;
  position: relative;
`

const CardCompagnyImage = styled.div`
  width: 100%;
  height: 100%;
  -webkit-background-size: fill; /* Safari et Chrome */
  -moz-background-size: fill; /* Firefox */
  -o-background-size: fill; /* Opera */
  background-size: fill;
  background-position: center center;
  background-repeat: no-repeat;
`
const CardAvatarImage = styled.div`
  @media only screen and (min-width: 768px) { 
    width: 140px;
    height: 140px;
  }
  width: 100px;
  height: 100px;
  border-radius: 8px;
  position: absolute;
  bottom: -20px;
  right: -20px;
  -webkit-background-size: cover; /* Safari et Chrome */
  -moz-background-size: cover; /* Firefox */
  -o-background-size: cover; /* Opera */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`

const ShapeOne = styled.img`
  @media only screen and (min-width: 768px) { 
    top: -70px;
    right: -80px;
    width: 340px;
  }
  top: -60px;
  right: -60px;
  width: 200px;
  position: absolute;
  z-index: -1;
`

const ShapTwo = styled.img`
  @media only screen and (min-width: 768px) { 
    bottom: -70px;
    left: -70px;
    width: 370px;
  }
  bottom: -40px;
  left: -40px;
  width: 228px;
  position: absolute;
  z-index: -1;
`

type TestimonialCardProps = { 
  testimonial: any;
  shapeOneUrl: string;
  shapeTwoUrl: string;
}

const TestimonialCard = ({ testimonial, shapeOneUrl, shapeTwoUrl }: TestimonialCardProps) => {  
  return (
    <Card 
      style={{backgroundColor: `${testimonial.compagnyColor}`}}
    >
      <CardCompagnyImage
        style={{backgroundImage: `url(${testimonial.compagnyLogo.url})`}}
      />
      <CardAvatarImage
        style={{backgroundImage: `url(${testimonial.avatar.url})`}}
      />
      <ShapeOne src={shapeOneUrl}/>
      <ShapTwo src={shapeTwoUrl}/>
    </Card>
  );
};

export default TestimonialCard