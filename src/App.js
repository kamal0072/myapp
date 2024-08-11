import Layout from './pages/Layout';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import Home from './pages/Home.js';
import Contact from './pages/Contact';
import LoginReg from './pages/auth/LoginReg';
import SendPasswordResetEmail from './pages/auth/SendPasswordResetEmail';
import Navbar from './components/Navbar';
import ResetPassword from './pages/auth/ResetPassword';
import Dashboard from './pages/Dashboard';

function PageNotFound() {
    return (
        <div> 
            <Navbar></Navbar>
            <h1 className='text text-center'>Nothing On this Page</h1>
            <NavLink to="/" className="btn btn-success ">Back TO Home</NavLink>
        </div>
    );
}

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />} > 
                        <Route index element={<Home />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='login' element={<LoginReg />} />
                    </Route> 

                    <Route path="*" element={<PageNotFound></PageNotFound>} ></Route>
                    <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} ></Route>
                    <Route path="resetpassword" element={<ResetPassword />} ></Route>
                    <Route path="/dashboard" element={<Dashboard />} ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;