import { Link } from "react-router-dom";
import {useState} from 'react';
// import "./sidebar.css";
// import "./dashboard.css";
import "./c-course.css";
import Sidebar from "./sidebar";
function Algo5()
{return(
          <div className="harith"> 
            
       
             <div>
             <nav className="nav">
              {/* <img id="logo5"src={require("./photo.jpeg")} alt="logo"/>  */}
            <h1 id="title">Virtual Learn</h1>
        <div className="nav-menu">
         <ul>
           <li>
             <div class="dropdown">
                <button >Profile</button>
                <div class="dropdown-content">
                  <a><Link className='opo' to="/homepage">Home</Link></a>
                  <a><Link className='opo' to="/profile">My Profile</Link></a>
                  {/* <a ><Link className='opo' to="/edit">Edit Profile</Link></a> */}
                  <a><Link className='opo' to="/app">Sign Out</Link></a>
                </div>
            </div>
           </li> 
           <li>
             <button ><Link className='opo' to="/homepage">Home</Link></button>
           </li>
         </ul>
       </div> 
     </nav>
     </div>  

      <div className="App">
     <Sidebar  />
     </div> 
      <div>
     <div className="content-container">
        
                  <button id="p"><img id="g1"src={require("./tutor5.jpeg")}alt="tutor"/></button><br/>  
                  <h1 id="content">Tutor Name: Ms.Daphne</h1>
                  <h1 id="content">Course Name: Algorithms</h1>
                  <h1 id="content">Rating: 4.8/5</h1>
                  <h1 id="content">Fees: $36</h1>   
                  <Link to="/payment"><button id="enroll" type="">Enroll</button></Link>
      </div>
      <div>
        <h1 id="modules">Modules</h1>
        <h2 id="modules">1.BackTracking</h2>
        <h2 id="modules">2.Dynamic Programming</h2>
        
      </div>
      </div>
     
        </div>
    );
}
export default Algo5