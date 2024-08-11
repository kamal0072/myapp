import { Alert } from "@mui/material";
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
function ChangePassword() {
    const [error, setError] = useState({
        status : false,
        msg : '',
        type : '',
    });
    const handleSubmit =(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            password : data.get('password'),
            password_confirmation : data.get('password_confirmation'),
        };
        if (actualData.password && actualData.password_confirmation){
            if (actualData.password===actualData.password_confirmation){
                setError({status : true, msg : 'Password change success', type:'success'})
                document.getElementById("change-password").reset();
            }else{
                setError({status : true, msg : 'Password Does not match', type:'error'})
            }
        }else{
            setError({status : true, msg : 'All Fields required*', type:'error'},)
        }
    };
    return (
        <div className='container'>
            <div className="row p-2">
                <div className="col border border-3 border-black">
                    <form onSubmit={handleSubmit} id='change-password' className=' my-4 p-2' > 
                        <input type="password" id='password' name='password' placeholder='Enter Password' className="form-control" /> <br />
                        <input type="password" id='confirm-password' name='password_confirmation' placeholder='Confirm Password'  className="form-control"  />
                        <input type="submit"  value='Save' className='btn btn-success my-1' />
                        <NavLink to= '/login' className="btn btn-danger m-1" >Cancel</NavLink>
                        {error.status ? <Alert className='mt-2' severity={error.type}>{error.msg}</Alert>:''}
                    </form>
                </div>
            </div>
        </div>
      )
}


export default ChangePassword;