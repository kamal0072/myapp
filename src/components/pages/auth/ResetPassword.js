import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Alert } from "@mui/material";

function ResetPassword() {
    const [error, setError] = useState({
        status : false,
        msg : '',
        type : '',
        tc:'',
    });
    const navigate = useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            password : data.get('password'),
            password_confirmation : data.get('password_confirmation'),
        };
        if (actualData.password && actualData.password_confirmation){
            if (actualData.password===actualData.password_confirmation){
                setError({status : true, msg : 'Password reset done', type:'success'})
                setTimeout(() => {
                    navigate('/login')
                }, 3000);
            }else{
                setError({status : true, msg : 'Password Does not match', type:'error'})
            }
        }else{
            setError({status : true, msg : 'All Fields required*', type:'error'},)
        }
    };
  return (
    <div className='container'>
        <div className="row">
            <div className="col-sm-6 offset-3 bg-info p-3 mt-3 border border-3 border-black">
                <form onSubmit={handleSubmit} id='password-reset-email-form' className='form-control my-4 p-2' > 
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
export default ResetPassword;