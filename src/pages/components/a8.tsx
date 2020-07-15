import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { useLocation } from 'umi';

export default (props: any) => {
  const __location = useLocation();

  useEffect(() => {
    //@ts-ignore
    console.log(__location.query.text + 'init');
    return () => {
      //@ts-ignore
      console.log(__location.query.text + 'cleanup');
    };
  }, []);

  return (
    <div>
      <Input
        value={
          //@ts-ignore
          'a8' + __location.query.text
        }
      />
    </div>
  );
};
