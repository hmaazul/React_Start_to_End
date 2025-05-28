import React from 'react';
import { Outlet } from 'react-router-dom';

function SubRoute() {
    return ( 
        <>
        <Outlet/>
        </>
     );
}

export default SubRoute;