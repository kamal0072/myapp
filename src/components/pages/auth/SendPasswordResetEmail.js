import { Alert } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const SendPasswordResetEmail = () => {
    const [error, setError] = useState({
        status : false,
        msg : '',
        type : '',
        tc:'',
    });
    const handleSubmit =(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email : data.get('email'),
            tc : data.get('tc'),
        };
        if (actualData.email && actualData.tc){
            setError({status : true, msg : 'Password reset link sent..', type:'success'},)
            document.getElementById('password-reset-form').reset();
        }else{
            setError({status : true, msg : 'Check All the Fields*', type:'error'},)
        }
    };
  return (
    <div className='container'>
        <div className="row">
            <div className="col-sm-6 offset-3">
                <form onSubmit={handleSubmit} id='password-reset-form' className='form-control m-4' >
                    <input  className='form-control'  type="email" id='email' name='email' placeholder='Email Address' autoComplete='none' /> <br />
                    <input type="checkbox" value='agree' name='tc' id='tc' /> 
                    <label htmlFor="tc">I agree to the terms and Condition</label> <br />
                    <input type="submit"  value='Login' className='btn btn-success my-2 mx-2' />
                    <NavLink to= '/login' className="btn btn-danger" >Cancel</NavLink>
                    {error.status ? <Alert className='mt-2' severity={error.type}>{error.msg}</Alert>:''}
                </form>
            </div>
        </div>
    </div>
  )
}

export default SendPasswordResetEmail
