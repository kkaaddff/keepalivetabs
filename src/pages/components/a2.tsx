import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { useLocation } from 'umi';

export default (props: any) => {
  const __location = useLocation();

  useEffect(() => {
    console.log(__location.query.text + 'init');
    return () => {
      console.log(__location.query.text + 'cleanup');
    };
  }, [__location.query.text]);

  return (
    <div>
      <Input value={'a2' + __location.query.text} />
    </div>
  );
};
