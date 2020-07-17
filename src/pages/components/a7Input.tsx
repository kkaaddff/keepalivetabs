import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { useLocation } from 'umi';

export default (props: any) => {
  console.log('a7Input render');
  return (
    <div>
      <Input value={'a7Input' + props.tabText} />
    </div>
  );
};
