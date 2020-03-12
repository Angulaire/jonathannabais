import styled from 'styled-components';

const SectionGroup = styled.section`
  @media only screen and (min-width: 768px) { 
    margin: 60px;
  }
  margin: 20px;
`

const Section = ({ children }) => {
  return (
    <SectionGroup>
      {children}
    </SectionGroup>
  )
}

export default Section