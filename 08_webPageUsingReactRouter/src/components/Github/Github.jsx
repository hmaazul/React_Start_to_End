import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() =>{
    //     fetch('https://api.github.com/users/hmaazul')
    //     .then((res)=> res.json())
    //     .then( data =>{
    //         console.log(data);
            
    //         setData(data)
    //     })
    // }

    // )
    return ( 
        <>
            <div className='bg-gray-600 text-white p-4 text-3xl flex justify-center flex-col items-center'>
                <span> Username: {data.name} </span>
                <span className=''> Followers: {data.followers}  </span>
                <span className='mb-6'> College: {data.company}  </span>
                <img src={data.avatar_url} style={{height:'200px',width:'200px'}} />
            </div>            
        </>
     );
}

export default Github;

//used for loader functionality 
//it fetches the data when cursor is on the github NavLink and stores it 
//cache then reflects the data when page is loaded
export const githubLoaderInfo = async ()=>{
    const response = await fetch('https://api.github.com/users/hmaazul')

    return response.json()
}