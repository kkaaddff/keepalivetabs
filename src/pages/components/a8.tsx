import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { useLocation } from 'umi';

export default (props: any) => {
  const __location = useLocation();
  // const [state, setState] = useState('');
  // useEffect(() => {
  //   console.log('object', __location.query.text);
  //   //@ts-ignore
  //   setState(__location.query.text);
  //   //@ts-ignore
  // }, [__location.query.text]);

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
