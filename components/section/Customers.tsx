import { Row, Col, Button } from 'antd';
import styled from 'styled-components';
import Layout from '../global/Layout'

const CustomerCard = styled.div`
  background-color: #172D5F;
  padding: 40px 65px;
  height: 160px;
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

type CustomersProps = {
  title: string;
  color: string;
  space: string;
  customers: any;
}

const Customers = ({ title, customers, color, space }: CustomersProps) => {
  return (
    <section>
      <Layout
        color={color} 
        space={space}
      >
        <h2>{title}</h2>
        <Row justify="center" align="middle" gutter={[16, 16]}>
          {customers.map((customer, index) => (
            <Col xs={24} md={8}>
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100}>
                <CustomerCard>
                  <CardImage>
                    <a style={{backgroundImage: `url(${customer.logo.url})`}}/>
                  </CardImage>
                </CustomerCard>
              </div>
            </Col>
          ))}
        </Row>
      </Layout>
    </section>
  )
}
export default Customers