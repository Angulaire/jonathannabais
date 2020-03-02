import React from 'react'
import { Row, Col, Collapse, Icon } from 'antd';
import styled from 'styled-components'
import { MenuIcon, ValidIcon, InfiniteIcon } from '../global/Icon'

const { Panel } = Collapse;

const SectionGroup = styled.div`
  padding: 100px 0;

  h2 {
    text-align: center;
  }
`
const StyledCollapse = styled(Collapse)`
  &.ant-collapse {
    background-color: transparent;
  }

  .ant-collapse-item {
    border-bottom: 1px solid #333;
  }

`

const HeaderPanel = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  h4 {
    color: ${props => props.theme.text.primary};
    font-size: 20px;
    margin-left: 16px;
    margin-bottom: 0;
  }
`



type SectionSideTabProps = { 
  title: string,
  tabs: any,
  visualOrder: number, 
  contentOrder: number,
  locale: any
}

class SectionSideTab extends React.Component<SectionSideTabProps> {

  state = {
    showTab: this.props.tabs[0].id
  }

  handleChange = (e) => {
    if (e !== undefined) {
      this.setState({
        showTab: e
      });
    }
  }


  render() {
    const { showTab } = this.state;
    const { title, tabs, visualOrder, contentOrder, locale } = this.props;
    const showImageTab = tabs.filter(tab => tab.id === showTab);

    return (
      <SectionGroup>
        <Row type="flex" justify="center" align="middle">
          <Col xs={{span: 24}} md={{span: 14 }}>
            <h2>{title}</h2>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
          <Col xs={{span: 24, order: 1}} md={{span: 12, order: visualOrder}}>
            <img src={showImageTab[0].Image.url} width="100%"/>
          </Col>
          <Col xs={{span: 24, order: 2}} md={{span: 10, order: contentOrder, offset: 2}}>
            <StyledCollapse 
              accordion 
              bordered={false} 
              defaultActiveKey={tabs[0].id}
              onChange={this.handleChange}
            > 
              {tabs.map((tab) => (
                <Panel 
                  header={
                    <HeaderPanel>
                      <img src={tab.Icon.url}/>
                      <h4>{tab[`title_${locale}`]}</h4>
                    </HeaderPanel>
                  }
                  showArrow={false}
                  key={tab.id}>
                    <p>{tab[`content_${locale}`]}</p>
                </Panel>
              ))}
            </StyledCollapse>
          </Col>
        </Row>
      </SectionGroup>
    )
  }
}

export default SectionSideTab;