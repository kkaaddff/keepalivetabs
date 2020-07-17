import React, { useEffect, useState } from 'react';
import { useLocation } from 'umi';
import CustomInput from './a7Input';
import { TabsContext } from '../index';

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
  console.log('a7 render');
  return (
    <div>
      <TabsContext.Consumer>
        {({ tabText }) => {
          return <CustomInput tabText={tabText}></CustomInput>;
        }}
      </TabsContext.Consumer>
    </div>
  );
};
