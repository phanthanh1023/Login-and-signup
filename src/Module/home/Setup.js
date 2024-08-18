import React, { Fragment } from 'react';
import Header from '../../layout/header';
import { Link } from 'react-router-dom';
import SetupBanner from '../../pages/SetupBanner';
import Setup_chuong from '../../pages/Setup_chuong';
import PostFooter from '../../pages/PostFooter';
import Footer from './Footer';

const Setup = () => {
    return (
        <Fragment className='container'>
            <Header></Header>
            <SetupBanner></SetupBanner>
            <Setup_chuong></Setup_chuong>
            <Footer></Footer>
        </Fragment>
    );
};

export default Setup;