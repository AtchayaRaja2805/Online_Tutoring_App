// import "./payment.css";
import { Link } from "react-router-dom";
function Payment()
{
    return(
        <div>
            <div>
             <nav className="nav">
              <img id="logo5"src={require("./photo.jpeg")} alt="logo"/> 
            <h1 id="title">Virtual Learn</h1>
        <div className="nav-menu">
         <ul>
           <li>
             <div class="dropdown">
                <button >Profile</button>
                <div class="dropdown-content">
                  <a><Link className='opo' to="/homepage">Home</Link></a>
                  <a><Link className='opo' to="/profile">My Profile</Link></a>
                  <a ><Link className='opo' to="/edit">Edit Profile</Link></a>
                  <a><Link className='opo' to="/app">Sign Out</Link></a>
                </div>
            </div>
           </li> 
         </ul>
       </div> 
     </nav>
     </div>  
        </div>
    );
}
export default Payment