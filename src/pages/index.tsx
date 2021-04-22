import { Layout, Menu, Input } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import { history } from 'umi';
import Tabs from './components/tabs';
const { Header, Content, Sider } = Layout;
export const TabsContext = React.createContext({
  tabText: '',
  changeTabText: (value: string) => {},
});

export default (props: any) => {
  const [tabText, setTabText] = useState('tabs');
  const onMenuChange = (params: any) => {
    history.push({
      pathname: `/a${params.key}`,
      query: {
        text: params.key,
      },
    });
  };
  return (
    <Layout>
      <TabsContext.Provider
        value={{
          tabText,
          changeTabText: setTabText as any,
        }}
      >
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <Menu theme="dark" mode="inline" onClick={onMenuChange}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<BarChartOutlined />}>
              nav 4
            </Menu.Item>
            <Menu.Item key="5" icon={<CloudOutlined />}>
              nav 5
            </Menu.Item>
            <Menu.Item key="6" icon={<AppstoreOutlined />}>
              nav 6
            </Menu.Item>
            <Menu.Item key="7" icon={<TeamOutlined />}>
              nav 7
            </Menu.Item>
            <Menu.Item key="8" icon={<ShopOutlined />}>
              nav 8
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content className="site-content-background">
            <div>这是输入的值{tabText}</div>
            <TabsContext.Consumer>
              {({ changeTabText, tabText }) => {
                return (
                  <Input
                    value={tabText}
                    onChange={e => {
                      const { value } = e.target;
                      changeTabText(value);
                    }}
                  />
                );
              }}
            </TabsContext.Consumer>
            <Tabs>{props.children}</Tabs>;
          </Content>
        </Layout>
      </TabsContext.Provider>
    </Layout>
  );
};
