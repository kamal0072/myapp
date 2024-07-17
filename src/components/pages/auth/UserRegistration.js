import { Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const UserRegistration = () => {
    const [error, setError] = useState({
        status : false,
        msg : '',
        type : '',
    });
    const navigate = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            name : data.get('name'),
            email : data.get('email'),
            password : data.get('password'),
            password_confirmation : data.get('password_confirmation'),
            tc : data.get('tc'),
        };
        if ( actualData.name && actualData.email && actualData.password){
            if (actualData.password === actualData.password_confirmation){
                console.log(actualData);
                document.getElementById('registration-form').reset();
                setError({status : true, msg : 'Registration Success', type:'success'},)
                navigate('/login');
            }else{
                setError({status : true, msg : 'Password Does not match', type:'error'},)
            }
        }else{
            setError({status : true, msg : 'All fields are required*', type:'error'},)
        }
    };
  return (
    <div>
        <form onSubmit={handleSubmit} id='registration-form' >
            <input type="text" id='name' name='name' placeholder='Enter Name' autoComplete='none' /> <br />
            <input type="email" id='email' name='email' placeholder='Email Address' autoComplete='none' /> <br />
            <input type="password" id='password' name='password' placeholder='Enter Password' /> <br />
            <input type="password" id='confirm-password' name='password_confirmation' placeholder='Confirm Password' /> <br />
            <input type="checkbox" value='agree' name='tc' id='tc' /> <label htmlFor="tc">I agree to the terms and Condition</label> <br />
            <input type="submit"  value='Login' />
        </form>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert>:''}
    </div>
  )
}

export default UserRegistration
