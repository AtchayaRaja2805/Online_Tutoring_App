import { Link } from "react-router-dom";
// import "./sidebar.css";
import "./dashboard.css";
import Sidebar from "./sidebar";
function Dashboard()
{
    return(
          <div> 
            
          
            <div>
             <nav className="nav">
              {/* <img id="logo5"src={require("./photo.jpeg")} alt="logo"/> */}
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
           <li>
             <button ><Link className='opo' to="/vclassroom">Virtual ClassRoom</Link></button>
           </li>
         </ul>
       </div> 
     </nav>
     </div> 

     <div className="App">
     <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
     </div> 
     
        </div>
    );
}
export default Dashboard
