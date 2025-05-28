import React from 'react';
import { useParams } from 'react-router-dom';

function Users() {
    const {userid} = useParams()
    return ( 
        <>
        <div
        className='bg-gray-600 text-white p-4 text-4xl rounded-xl' 
        >User : {userid? userid:"No data"}</div>
        </>
     );
}

export default Users;