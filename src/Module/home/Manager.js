import React, { Fragment } from 'react';
import { Layout, Menu, Button, Table, Avatar, Space } from 'antd';
import {
  DashboardOutlined,
  FileTextOutlined,
  TagsOutlined,
  UserOutlined,
  LogoutOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
} from '@ant-design/icons';


const { Header, Content, Sider } = Layout;

const dataSource = [
  {
    key: '1',
    id: '01',
    post: 'One Special 4K Camera',
    date: '25 Oct 2021',
    category: 'Camera Gear',
    author: 'Evondev',
  },
];

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Post',
    dataIndex: 'post',
    key: 'post',
    render: (text, record) => (
      <div className="flex items-center">
        <Avatar shape="square" size="large" src="https://images.unsplash.com/photo-1719230693769-b8b3224d4016?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className="ml-2">
          <div>{text}</div>
          <div className="text-gray-500">{record.date}</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (text, record) => (
      <div className="flex space-x-2">
        <Button icon={<EyeOutlined />} />
        <Button icon={<EditOutlined />} />
        <Button icon={<DeleteOutlined />} />
      </div>
    ),
  },
];

const Manager = () => {
  return (
    <Fragment>
      <Header className="bg-white">
        <div className="flex gap-5 items-center justify-center mt-5">
          <button className="p-3 bg-green-300 text-base text-white font-bold rounded-lg ml-auto border border-gray-300">
            Write New Post
          </button>
          <Space direction="vertical" size={16}>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </Space>
        </div>
      </Header>
      <hr className='bg-gray-400 mt-5 shadow-xl' />
      <Layout style={{ minHeight: '100vh', display: 'flex' }}>
        <Sider width={300} className="bg-white shadow-md">
          <div className="flex items-center p-4 mb-6">
            <img src="logo.png" alt="Logo" className="w-10 h-10" />
            <h1 className="text-xl font-bold ml-3 text-white">Monkey Blogging</h1>
          </div>
          <Menu theme='light' className="bg-white" style={{ width: '300px' }}>
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<FileTextOutlined />}>
              Post
            </Menu.Item>
            <Menu.Item key="3" icon={<TagsOutlined />}>
              Category
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              User
            </Menu.Item>
            <Menu.Item key="5" icon={<LogoutOutlined />}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Content className="m-4">
        <h1 className='text-4xl text-blue-500 mb-5 font-medium'>Manager post</h1>
          <Table dataSource={dataSource} columns={columns} pagination={{ defaultCurrent: 2, total: 50 }} />
        </Content>
      </Layout>

    </Fragment>
  );
}


export default Manager;
