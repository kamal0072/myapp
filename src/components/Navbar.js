import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <div className='container-fluid mt-0' style={{padding:0, margin:0}}>
            <div className="row bg-dark p-2 mt-0 ">
                <ul className="nav justify-content-around ">
                    <li className="nav-item">
                        <NavLink to='/myShop' className='text text-primary text-decoration-none ' >My Little Shop</NavLink>
                    </li>
                    <li className='nav-item mx-2'>
                        <NavLink to='/' style={({isActive})=>{return {color:isActive ?'white' :'', textDecoration:isActive?'none' : 'none'}}} >Home</NavLink>
                    </li>
                    <li className='nav-item mr-3 '>
                        <NavLink to='/contact' style={({isActive})=>{return {color:isActive ?'white' :'', textDecoration:isActive?'none' : 'none'}}} >Contact</NavLink>
                    </li>
                    <li className='nav-item mr-3 '>
                        <NavLink to='/login' style={({isActive})=>{return {color:isActive ?'white' :'', textDecoration:isActive?'none' : 'none'}}} >Login | Registration</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;


