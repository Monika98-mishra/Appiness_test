import React  from 'react';
import {Link} from 'react-router-dom';
 function Header(){
    return <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <Link className="navbar-brand" to="/">React Js App</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav ml-auto">
      
               {/* <li  className="nav-item "> <Link to="/Dashboard/" className="nav-link">Home</Link> </li>  */}
               <Link to="/Dashboard" className="nav-link"><i className="fa fa-home"></i> Dashboard</Link> 
               {/* <li  className="nav-item "> <Link to="/Dashboard"  className="nav-link">Home</Link> </li> */}
              
                
      </ul>
     
    </div>
  </nav>
  

         
 
}
export default Header;

