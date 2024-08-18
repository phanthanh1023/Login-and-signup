import React from 'react';
import { Fragment } from 'react';
import Header from './header';

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Header></Header>
            {children}
        </Fragment>
    );
};

export default Layout;