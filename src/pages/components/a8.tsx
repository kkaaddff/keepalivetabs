import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { useLocation } from 'umi';
import { TabsContext } from '..';

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
      <TabsContext.Consumer>
        {({ changeTabText, tabText }) => {
          return (
            <Input
              value={'a8' + tabText}
              onChange={e => {
                const { value } = e.target;
                changeTabText(value);
              }}
            />
          );
        }}
      </TabsContext.Consumer>
    </div>
  );
};
