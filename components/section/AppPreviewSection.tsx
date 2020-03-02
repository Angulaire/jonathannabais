import styled from 'styled-components'
import { Tabs } from 'antd';

const Video = styled.video`
  max-width: 100%;
  vertical-align: middle;
  user-select: none;
`

const CenterTabs = styled(Tabs)`
  .ant-tabs-nav-scroll {
    display: flex;
    justify-content: center;
  }
`
const AppPreviewSection = () => {

  const { TabPane } = Tabs;

  return (
    <CenterTabs defaultActiveKey="1" tabPosition="bottom">
      <TabPane tab="Explorez" key="1">
        <Video autoPlay poster="https://d33wubrfki0l68.cloudfront.net/fee60cc286c167c5d419c4c921ede8cd5ceeb524/b5587/static/images/web/header-video-poster.jpg" src="https://d33wubrfki0l68.cloudfront.net/9ef29be683ebebfd4fb4b25085b6d847dd271149/ff23e/static/images/web/header-video.mp4" loop muted playsInline width="100%" />
      </TabPane>
      <TabPane tab="Intégrez" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Testez" key="3">
        Content of Tab Pane 3
      </TabPane>
      <TabPane tab="Analysez" key="4">
        Content of Tab Pane 3
      </TabPane>
    </CenterTabs>
  )
}
export default AppPreviewSection