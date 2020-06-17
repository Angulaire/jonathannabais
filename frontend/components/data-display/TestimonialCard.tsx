import React from 'react';
import styled from '@emotion/styled';
import Shapes from '../global/Shapes';

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
      <Shapes
        shapes={[
          {
            image: {
              url: shapeOneUrl
            },
            position: {
              zIndex: "-1",
              top: ["-60px", "-70px"],
              right: ["-60px", "-80px"]
            },
            size: {
              height: ["210px", "340px"],
              width: ["189px", "305px"]
            }
          },
          {
            image: {
              url: shapeTwoUrl
            },
            position: {
              zIndex: "-1",
              bottom: ["-40px", "-70px"],
              left: ["-40px", "-70px"]
            },
            size: {
              height: ["228px", "370px"],
              width: ["228px", "370px"]
            }
          }
        ]}
      />
    </Card>
  );
};

export default TestimonialCard