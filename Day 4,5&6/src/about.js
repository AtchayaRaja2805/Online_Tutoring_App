import "./about.css";
import { Link } from "react-router-dom";
function About(){
    return(
        <div className="bg5">
            <div className="navabout">
                <h1 id="titleabout">Online Tutoring Platform</h1>
                <div className="navmenu">
                    <ul>
                        <li>
                            <button ><Link className='opo' to="/preregister">Sign Up</Link></button>
                        </li>
                        <li>
                            <button ><Link className='opo' to="/app">Sign In</Link></button>
                        </li>
                    </ul>
                </div> 
            </div>
            <img id="logo" src={require("./photo.jpeg")} alt="logo"/>  
        </div>
    );
}
export default About;