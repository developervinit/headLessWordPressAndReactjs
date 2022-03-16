import React from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {

    let location = useLocation();
    let path = location.pathname

    var navHomeClass, navPostClass, navLinkFocusBorderHome, navLinkFocusBorderPost;

    if(path === '/'){
        navLinkFocusBorderHome = "navLinkFocusBorder";
        navLinkFocusBorderPost = ""
    } else if(path === '/posts') {
        navLinkFocusBorderHome = "";
        navLinkFocusBorderPost = "navLinkFocusBorder"
    }

    navHomeClass = `navlink ${navLinkFocusBorderHome}`;
    navPostClass = `navlink ${navLinkFocusBorderPost}`;
    
    

    return(<>
       <div className="navBar">
          <Link className={navHomeClass} to="/">Home</Link>
          <Link className={navPostClass} to="/posts">Posts</Link>
       </div>
    </>)
}

export default Navbar;