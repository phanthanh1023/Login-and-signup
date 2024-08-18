import { Avatar, Button, Dropdown, Layout, Menu, Radio, Space, } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import {
    UserOutlined,
    DashboardOutlined,
    FileTextOutlined,
    TagsOutlined,
    LogoutOutlined,
    DownOutlined
} from '@ant-design/icons';
import React, { Fragment } from 'react';
import Sider from 'antd/es/layout/Sider';

const Addnewdoc = () => {

    const items = [
        {
            label: '1st menu item',
            key: '1',
            icon: <UserOutlined />,
        },
        {
            label: '2nd menu item',
            key: '2',
            icon: <UserOutlined />,
        },
        {
            label: '3rd menu item',
            key: '3',
            icon: <UserOutlined />,
        },
        {
            label: '4rd menu item',
            key: '4',
            icon: <UserOutlined />,
            danger: true,
            disabled: true,
        },
    ];
    const menuProps = {
        items,
    };
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
                    <h1 className='text-4xl text-blue-500 mb-5 font-medium'>Add new post</h1>
                    <form className="p-10" >
                        <div className='flex justify-between'>
                            <div className=''>
                                <label htmlFor="title" className="block text-xl  mb-2 font-medium text-gray-700">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder='Enter your title'

                                    // onChange={handleChange}
                                    className="mt-1 block w-[400px] px-3 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl mb-2 rounded-md"
                                />
                            </div>
                            <div className=''>
                                <label htmlFor="author" className="block text-xl mb-2 font-medium text-gray-700">
                                    Author
                                </label>
                                <input
                                    type="text"
                                    id="author"
                                    name="author"
                                    placeholder='Enter your author'

                                    // onChange={handleChange}
                                    className="mt-1 block w-[400px] px-3 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl mb-2 rounded-md"
                                />
                            </div>
                        </div>
                        <div className='flex justify-between mt-10'>
                            <div className=''>
                                <label htmlFor="status" className="block text-xl mb-2 font-medium text-gray-700">
                                    Status
                                </label>
                                <Radio.Group className='mt-5'>
                                    <Radio value={1}>Approved</Radio>
                                    <Radio value={2}>Pending</Radio>
                                    <Radio value={3}>Reject</Radio>
                                </Radio.Group>
                            </div>
                            <div>
                                <label htmlFor="slug" className="block text-xl mb-2 font-medium text-gray-700">
                                    Slug
                                </label>
                                <input
                                    type="text"
                                    id="slug"
                                    name="slug"
                                    placeholder='Enter your slug'
                                    // onChange={handleChange}
                                    className="mt-1 block w-[400px] px-3 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl mb-2 rounded-md"
                                />
                            </div>
                        </div>
                        <div className='mt-10'>
                            <label htmlFor="slug" className="block text-xl mb-2 font-medium text-gray-700">
                                Category
                            </label>
                            <Space wrap className='mt-5'>
                                <Dropdown menu={menuProps}>
                                    <Button className='block w-[400px] px-3 py-3 h-auto'>
                                        <Space className='w-full flex justify-between items-center text-lg font-medium'>
                                            <span className=''>Please select an option</span>
                                            <DownOutlined />
                                        </Space>
                                    </Button>
                                </Dropdown>
                            </Space>
                        </div>
                        <div className='mt-20 justify-center text-center'>
                            <button className="p-3 bg-green-300 text-base text-white font-bold rounded-lg ml-auto border border-gray-300">
                                Write New Post
                            </button>
                        </div>
                    </form>

                </Content>
            </Layout>
        </Fragment>
    );
};

// <Dropdown menu={menuProps} placement="bottomCenter" >
//     <Button className=' block w-[400px] px-3 py-3 h-auto ' >
//         <Space className='flex justify-between text-lg font-medium'>
//             Please select an option
//             <DownOutlined />
//         </Space>
//     </Button>
// </Dropdown>
export default Addnewdoc;
