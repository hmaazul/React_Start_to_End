import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return ( 
        <>
            <Header/>
            <Outlet/>
            <Footer />
        </>
     );
}

export default Layout;

//here outlet helps in maintaining the layout of page and inserting the
//pages like home,about,contact, etc in between header and footer in the
//place of outlet