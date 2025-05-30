import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // here accessing setUser property from UserContextProvider through useContext hook 
    // so that we can pass values of user through it 
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        // storing values in user 
        setUser({username, password})
    }

    return ( 
        <div>
            <h2>Login</h2>
            <input
            value={username}
            onChange={ (e) => setUsername(e.target.value)}
            type='text' placeholder='username'
            style={{display:'block', marginBottom:'10px'}}/>
            
            <input 
            value={password}
            onChange={ (e) => setPassword(e.target.value)}
            type='text' placeholder='password'
            style={{display:'block', marginBottom:'10px'}}/>

            <button onClick={handleSubmit} style={{}}>Submit</button>
        </div>
     );
}

export default Login;