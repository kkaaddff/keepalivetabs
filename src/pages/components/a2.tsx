import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { useLocation } from 'umi';

class CustomA2 extends React.Component {
  componentDidMount() {
    console.log('a2 DidMount');
  }
  componentDidUpdate() {
    console.log('a2 DidUpdate');
  }
  componentWillUnmount() {
    console.log('a2 WillUnmount');
  }
  componentWillReceiveProps() {
    console.log('a2 WillReceiveProps');
  }
  render() {
    return (
      <div>
        <Input defaultValue={'a2'} />
      </div>
    );
  }
}
export default CustomA2;
