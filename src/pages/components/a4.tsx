import React, { useEffect, useState, useContext } from 'react';
import { Input, Table, Tag, Space, Row, Col } from 'antd';
import { useLocation } from 'umi';
import { TabsContext } from '..';

export default (props: any) => {
  const { tabText } = useContext(TabsContext);
  const [state, setstate] = useState([
    {
      key: '1',
      name: 'John Brown' + 'a1',
      age: 32,
      address: 'New York No. 1 Lake Park' + 'a1',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green' + 'a1',
      age: 42,
      address: 'London No. 1 Lake Park' + 'a1',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black' + 'a1',
      age: 32,
      address: 'Sidney No. 1 Lake Park' + 'a1',
      tags: ['cool', 'teacher'],
    },
    {
      key: '4',
      name: 'Joe Black' + 'a1',
      age: 32,
      address: 'Sidney No. 1 Lake Park' + 'a1',
      tags: ['cool', 'teacher'],
    },
    {
      key: '5',
      name: 'Joe Black' + 'a1',
      age: 32,
      address: 'Sidney No. 1 Lake Park' + 'a1',
      tags: ['cool', 'teacher'],
    },
    {
      key: '6',
      name: 'Joe Black' + 'a1',
      age: 32,
      address: 'Sidney No. 1 Lake Park' + 'a1',
      tags: ['cool', 'teacher'],
    },
    {
      key: '7',
      name: 'Joe Black' + 'a1',
      age: 32,
      address: 'Sidney No. 1 Lake Park' + 'a1',
      tags: ['cool', 'teacher'],
    },
    {
      key: '8',
      name: 'Joe Black' + 'a1',
      age: 32,
      address: 'Sidney No. 1 Lake Park' + 'a1',
      tags: ['cool', 'teacher'],
    },
    {
      key: '9',
      name: 'Joe Black' + 'a1',
      age: 32,
      address: 'Sidney No. 1 Lake Park' + 'a1',
      tags: ['cool', 'teacher'],
    },
    {
      key: '10',
      name: 'Joe Black' + 'a1',
      age: 32,
      address: 'Sidney No. 1 Lake Park' + 'a1',
      tags: ['cool', 'teacher'],
    },
  ]);
  useEffect(() => {
    setstate([
      {
        key: '1',
        name: 'John Brown' + 'a1=' + tabText,
        age: 32,
        address: 'New York No. 1 Lake Park' + 'a1' + tabText,
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green' + 'a1' + tabText,
        age: 42,
        address: 'London No. 1 Lake Park' + 'a1' + tabText,
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black' + 'a1' + tabText,
        age: 32,
        address: 'Sidney No. 1 Lake Park' + 'a1' + tabText,
        tags: ['cool', 'teacher'],
      },
      {
        key: '4',
        name: 'Joe Black' + 'a1' + tabText,
        age: 32,
        address: 'Sidney No. 1 Lake Park' + 'a1' + tabText,
        tags: ['cool', 'teacher'],
      },
      {
        key: '5',
        name: 'Joe Black' + 'a1' + tabText,
        age: 32,
        address: 'Sidney No. 1 Lake Park' + 'a1' + tabText,
        tags: ['cool', 'teacher'],
      },
      {
        key: '6',
        name: 'Joe Black' + 'a1' + tabText,
        age: 32,
        address: 'Sidney No. 1 Lake Park' + 'a1' + tabText,
        tags: ['cool', 'teacher'],
      },
      {
        key: '7',
        name: 'Joe Black' + 'a1' + tabText,
        age: 32,
        address: 'Sidney No. 1 Lake Park' + 'a1' + tabText,
        tags: ['cool', 'teacher'],
      },
      {
        key: '8',
        name: 'Joe Black' + 'a1' + tabText,
        age: 32,
        address: 'Sidney No. 1 Lake Park' + 'a1' + tabText,
        tags: ['cool', 'teacher'],
      },
      {
        key: '9',
        name: 'Joe Black' + 'a1' + tabText,
        age: 32,
        address: 'Sidney No. 1 Lake Park' + 'a1' + tabText,
        tags: ['cool', 'teacher'],
      },
      {
        key: '10',
        name: 'Joe Black' + 'a1' + tabText,
        age: 32,
        address: 'Sidney No. 1 Lake Park' + 'a1' + tabText,
        tags: ['cool', 'teacher'],
      },
    ]);
  }, [tabText]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Input value={tabText} />
      <Row>
        <Col>
          <Table dataSource={state} columns={columns} />
        </Col>
        <Col>
          <Table dataSource={state} columns={columns} />
        </Col>
        <Col>
          <Table dataSource={state} columns={columns} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Table dataSource={state} columns={columns} />
        </Col>
        <Col>
          <Table dataSource={state} columns={columns} />
        </Col>
        <Col>
          <Table dataSource={state} columns={columns} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Table dataSource={state} columns={columns} />
        </Col>
        <Col>
          <Table dataSource={state} columns={columns} />
        </Col>
        <Col>
          <Table dataSource={state} columns={columns} />
        </Col>
      </Row>
    </div>
  );
};
