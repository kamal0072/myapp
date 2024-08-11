import { useNavigate } from "react-router-dom"; 
import ChangePassword from "./auth/ChangePassword";
function Dashboard() {
    const navigate = useNavigate()
    const handleLogout =()=>{
        console.log('logout..');
        navigate('/login');
    };
    return (
        <div className="container">
            <div className="row bg-light mt-5">
                <div className="col-sm-5">
                    <h5>User Email address : alex@gmail.com</h5>
                    <h5>Name : Alex Kumari</h5>
                    <button className="btn btn-success" onClick={handleLogout} >Logout</button>
                </div>
                <div className="col-sm-7">
                    <h1>Welcome to Dashboard</h1>
                    <ChangePassword />
                </div>
            </div>
        </div>
    );
}
export default Dashboard;