
import "./homepage.css"
import { Link } from "react-router-dom";

// import { Container } from 'semantic-ui-react'

function Home()
{
    return(
        <div>
          <div>
             <nav className="navigation">
              <img id="logo5"src={require("./photo.jpeg")} alt="logo"/>
            <h1 id="title">Virtual Learn</h1>
        <div className="navigation-menu">
         <ul>
            <li>
             <button ><Link className='opo' to="/">About</Link></button>
           </li>
           <li>
             <div class="dropdown">
                {/* <button class="dropbtn">Dropdown</button> */}
                <button >Profile</button>
                <div class="dropdown-content">
                  <a><Link className='opo' to="/profile">My Profile</Link></a>
                  <a ><Link className='opo' to="/edit">Edit Profile</Link></a>
                  <a><Link className='opo' to="/dashboard">Dashboard</Link></a>
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
     <div className="bg2">
      
     
    <div>
      <header className="header">Welcome to the Tutorial Platform:-)</header>
    </div>
    <div className="search">
    <input id="text1" type="search"placeholder="Search by Courses"/>
    <button id="btnsearch">Search</button>
       </div>
       <div className="gallery-wrap">
       <img id="leftbtn"src={require("./left.jpeg")} alt="scroll left"/>
        
       <div class="gallery"> 
         <div>
          <button id="c"><Link to="./c"><span><img id="g1"src={require("./c 1.jpeg")}alt="c"/></span></Link></button>
          <span><img id="g1"src={require("./c++ 1.jpeg")} alt="c++"/></span>
          <span><img id="g1" src={require("./dsa 1.jpeg")} alt="dsa"/></span>
          </div>
          
          <div>
            
          <span><img id="g1"src={require("./algorithms 1.jpeg")} alt="algo"/></span>
          <span><img id="g1"src={require("./python 1.jpeg")} alt="python"/></span>
          <img id="g1"src={require("./sql1.jpeg")} alt="sql"/>
          </div>
          {/* <div> */}
          {/* <span><img id="g1"src={require("./java 11.jpeg")} alt="java"/></span> */}

          {/* </div> */}
   </div>
   <img id="rightbtn"src={require("./right.jpeg")} alt="scroll right"/>
     </div>
       
const scrollContainer = document.getElementById('gallery');


const scrollLeftButton = document.getElementById('leftbtn');
scrollLeftButton.addEventListener('click', () =&gt; 
  scrollContainer.scrollLeft -= 100;
  &rbrace; // Adjust the scroll amount as needed
);

const scrollRightButton = document.getElementById('rightbtn');
scrollRightButton.addEventListener('click', () =&gt; 
  scrollContainer.scrollLeft += 100;&rbrace;
);


   </div>
   </div>
    );
}
export default Home