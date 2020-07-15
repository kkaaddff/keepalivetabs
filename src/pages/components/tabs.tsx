import { Tabs } from 'antd';
import React from 'react';
import matchPath from '@/utils/matchPath';

const { TabPane } = Tabs;

const initialPanes = [{ title: '首页', content: '这是首页', key: '1' }];

class CustomTabs extends React.Component {
  newTabIndex = 0;

  constructor(props: Readonly<{}>) {
    super(props);
  }

  state = {
    activeKey: initialPanes[0].key,
    panes: initialPanes,
    paneKeys: [],
  };

  static getDerivedStateFromProps(props: any, state: any) {
    if (!state.paneKeys.includes(location.pathname)) {
      let element: any = undefined,
        match: any = null,
        content: any = null;

      React.Children.forEach(props.children.props.children, child => {
        if (match == null && React.isValidElement(child)) {
          element = child;

          const path = child.props.path || child.props.from;

          match = path
            ? matchPath(location.pathname, { ...child.props, path })
            : false;
        }
      });

      content = match
        ? React.cloneElement(element, { location, computedMatch: match })
        : null;
      debugger;
      return {
        panes: [
          ...state.panes,
          {
            title: location.pathname,
            key: location.pathname,
            content,
          },
        ],
        paneKeys: [...state.paneKeys, location.pathname],
        activeKey: location.pathname,
      };
    }
    return null;
  }

  onChange = (activeKey: any) => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey: any, action: 'remove' | 'add') => {
    this[action](targetKey);
  };

  add = () => {};

  remove = (targetKey: string) => {
    const { panes, activeKey } = this.state;
    let newActiveKey = activeKey;
    let lastIndex = 0;

    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });

    const newPanes = panes.filter(pane => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    this.setState({
      panes: newPanes,
      activeKey: newActiveKey,
    });
  };

  render() {
    const { panes, activeKey } = this.state;
    return (
      <Tabs
        type="editable-card"
        onChange={this.onChange}
        activeKey={activeKey}
        onEdit={this.onEdit}
        hideAdd
      >
        {panes.map(pane => (
          <TabPane tab={pane.title} key={pane.key}>
            {pane.content}
          </TabPane>
        ))}
      </Tabs>
    );
  }
}
export default CustomTabs;
