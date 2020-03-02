import { Row, Col, Button } from 'antd';
import styled from 'styled-components';


const Section = (children) => {  
  return (
    <Row as="section" type="flex" justify="start" align="middle">
      {children}
    </Row>
  )
}

export default Section