import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function UserLogin() {
    const [error, setError] = useState({
        status : false,
        msg : '',
        type : '',
    });
    const navigate = useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email : data.get('email'),
            password : data.get('password')
        };
        if (actualData.email && actualData.password){
            console.log(actualData);
            setError({status : true, msg : 'Login Success', type:'success'},)
            document.getElementById('login-form').reset();
            setTimeout(() => {
                navigate('/dashboard');
            }, 3000);
        }else{
            setError({status : true, msg : 'All fields are required*', type:'error'},)
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit} id='login-form' >
                <input type="email" id='email' name='email' placeholder='Email Address' autoComplete='none' /> <br />
                <input type="password" id='password' name='password' placeholder='Enter Password' /> <br />
                <input type="submit"  value='Login' />
            </form>
            <NavLink to= '/sendpasswordresetemail' >Forget Password</NavLink>
            
            {error.status ? <Alert severity={error.type}>{error.msg}</Alert>:''}
        </div>
    );
}
export default UserLogin;