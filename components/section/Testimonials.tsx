import React from 'react';
import { Row, Col, Button, Carousel } from 'antd';
import styled from 'styled-components';
import Layout from '../global/Layout';
import TestimonialCard from '../data-display/TestimonialCard';

const StyledCarousel = styled(Carousel)`
  ul {
    position: relative !important;
    justify-content: left !important;
    margin-block-start: 0;
    padding-inline-start: 0;
    margin: 20px 0 !important;
    button {
      background: ${props => props.theme.colors.primary.bg} !important;
    }
  }
  img {
    margin: 20px 0;
  }
`

type TestimonialsProps = {
  color: string;
  space: string;
  testimonials: any;
}

class Testimonials extends React.Component<TestimonialsProps> {
  state = {
    nav1: null,
    nav2: null
  };

  slider1: any;
  slider2: any;

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render(){
    const { testimonials, color, space } = this.props

    return (
      <section>
        <Layout
          color={color} 
          space={space}
        >
          <Row justify="center" align="middle">
            <Col xs={24} md={12}>
              <Carousel
                dots={false}
                fade
                asNavFor={this.state.nav2}
                ref={slider => (this.slider1 = slider)}
              >
                {testimonials.map(testimonial =>
                  <div>
                    <TestimonialCard 
                      testimonial={testimonial}
                      shapeOneUrl="https://res.cloudinary.com/angulaire/image/upload/v1584626507/jstovczxcz3ewsjg6ap2.svg"
                      shapeTwoUrl="https://res.cloudinary.com/angulaire/image/upload/v1584623054/gz8hhn5zw3tkstxlgkyu.svg"
                    />
                  </div>
                )}
              </Carousel>
            </Col>
            <Col xs={24} md={{ span: 10, offset: 2 }}>
              <StyledCarousel
                fade
                asNavFor={this.state.nav1}
                ref={slider => (this.slider2 = slider)}
              >
                {testimonials.map(testimonial =>
                  <div>
                    <img src={testimonial.icon.url}/>
                    <p>{testimonial.testimonial}</p>
                    <p>{`${testimonial.name.toUpperCase()} - ${testimonial.compagnyName.toUpperCase()}`}</p>
                  </div>
                )}
              </StyledCarousel>
            </Col>
          </Row>
        </Layout>
      </section>
    )
  }
}
export default Testimonials