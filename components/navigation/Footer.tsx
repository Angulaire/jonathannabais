import { Row, Col } from 'antd';
import { TwitterCircleFilled, LinkedinFilled } from '@ant-design/icons';
import styled from 'styled-components';

const FooterGroup = styled.footer`
  background: ${props => props.theme.bg.matt};
  a {
    color: white;
  }
  margin: 100px 20px 0;
  text-align: center;
  @media only screen and (min-width: 768px) { 
    margin: 100px 80px 0;
    text-align: left;
  }

  h4 {
    font-weight: 600;
    padding-bottom: 20px;
  }
`

const Sitemap = styled.ul`
  list-style: none;
  padding: 0;
  li {
    margin-right: 12px;
    margin-bottom: 10px;
  }
`

const SEO = styled(Col)`
  h3 {
    line-height: 1;
    padding-bottom: 20px;
  }
  position: relative;
  p {
    color: white;
    font-size: 14px;
    line-height: 24px;
    
  }
  margin-bottom: 80px;
  @media only screen and (min-width: 768px) { 
    margin-bottom: 40px;
    border-right: 1px solid white;
    p {
      width: 80%;
    }
  }

`

const Socials = styled.div`
  position: absolute;
  bottom: -60px;
  width: 100%;

  ul {
    list-style: none;
    padding: 12px 0;
    li {
      margin-right: 12px;
      display: inline;
      svg { 
        font-size: 22px;
      }
    }
  }

  display: flex;
  justify-content: center;
  @media only screen and (min-width: 768px) { 
    justify-content: left;
  }
  
`

const CopyrightFooter = styled(Row)`
  border-top: 1px solid white;
  margin-top: 20px;
  padding: 30px 0;

  p {
    @media only screen and (min-width: 768px) { 
      text-align: right;
    }
    margin: 12px 0;
    font-size: 14px;
    color: white;
  }
`

type FooterProps = {
  navigation: any;
}

const Footer = ({ navigation }: FooterProps) => {
  return (
    <FooterGroup>
      <Row justify="start" align="top" style={{marginBottom: "55px"}}>
        <SEO xs={24} md={8}>
          <h3>Jonathan</h3>
          <p>J’ai eu le plaisir de collaborer avec mes équipes sur plus de 350 projets en 6 ans.</p>  
          <Socials>
            <ul>
              <li>
                <a href="https://twitter.com/Jonathannabais" target="_blank" rel="noopener">
                  <TwitterCircleFilled />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jonathannabais/" target="_blank" rel="noopener">
                  <LinkedinFilled />
                </a>
              </li>
            </ul>
          </Socials>
        </SEO>
        {navigation.map((category, i) =>
          <Col xs={12} md={{ span: 3, offset: 1 }} key={i}>
            <h4>{category.categoryName}</h4>
            <Sitemap>
              {category.links.map((link, i) => 
                <li key={i}>
                  <a href={link.href} target={link.target} rel={link.rel}>{link.name}</a>
                </li>
              )}
            </Sitemap>
          </Col>
        )}
      </Row>
      <CopyrightFooter justify="space-between" align="middle">
        <Col xs={24} md={12}>
          <img src="https://res.cloudinary.com/angulaire/image/upload/v1586173969/yyltxmenevfobd2l4l2f.svg" alt="Logo Angulaire" loading="lazy"/>
        </Col>
        <Col xs={24} md={12}>
          <p>© Made with love from the team of <a href="http://angulaire.io/" target="_blank" rel="noopener">Angulaire</a></p>
        </Col>
      </CopyrightFooter>
    </FooterGroup>
  )
}
export default Footer
