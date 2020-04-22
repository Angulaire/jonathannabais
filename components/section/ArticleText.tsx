import { Row, Col, Button } from 'antd';
import Layout from '../global/Layout';
import { Markdown } from 'react-showdown';
import { Image, Transformation } from 'cloudinary-react';
import styled from 'styled-components';

const ImageGroup = styled.div`
  img {
    width: 100%
  }
`

const Signature = styled(Row)`
  border-top: 2px solid #D8D8D8;
  margin-top: 70px;
  padding-top: 70px;

  .author {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .username {
    font-size: 32px;
  }
`


type ArticleTextProps = {
  body: any;
  signature: boolean;
  author: any
}

const ArticleText = ({ body, signature, author }: ArticleTextProps) => {

  return (
    <Layout
      color="secondary"
      space="marginLeft"
    >
      <Row justify="center" align="top">
        <Col xs={24} md={20}>
          <Markdown markup={body} />
          {signature === true &&
            <Signature justify="start" align="middle">
              <Col span={4}>
                <ImageGroup>
                  <Image 
                    cloudName="angulaire"
                    width="auto"
                    dpr="auto"
                    responsive
                    responsiveUseBreakpoints="true"
                    fetchFormat="auto"
                    crop="scale"
                    publicId={author.avatar.provider_metadata.public_id} 
                    alt={author.avatar.alternativeText}
                  >
                    <Transformation radius="max" />
                  </Image>
                </ImageGroup>
              </Col>
              <Col span={10} offset={1}>
                <p className="author">AUTEUR DE L'ARTICLE</p>
                <p className="username">{author.username}</p>
                <p className="bio">{author.bio}</p>
              </Col>
            </Signature>
          }
        </Col>
      </Row>
    </Layout>
  )
}

export default ArticleText