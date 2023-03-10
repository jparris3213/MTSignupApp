//import React from "react";
import React from "react";
import { Link } from "react-router-dom";


const Layout = () => {
    return(
        
        <div>
        <p>Volunteer Sign In and Sign Out</p>
            <Link to="Signin"><button>Signing In</button></Link>
            <Link to="Signout"><button>Signing Out</button></Link>
           </div>
    )

};

export default Layout;

