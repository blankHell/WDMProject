
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
export default function PageHeader() {
  let currentUser;
  if (window.sessionStorage.getItem("userDetails")) {
    currentUser = JSON.parse(window.sessionStorage.getItem("userDetails"));
  }
  function logOut() {
    window.sessionStorage.setItem("userDetails", null);
  }


  return (
    <>
      <div className="topnav-left">
        <a href="/">Diaz Sifontes Family</a>
        <div className="topnav-right">
          <Link to="/signin" style={currentUser ? { display: 'none' } : { display: 'block' }}>Login</Link>
          <Link to="/" style={currentUser ? { display: 'block' } : { display: 'none' }} onClick={logOut}>Logout</Link>
          <Link to="/chat" style={currentUser ? { display: 'block' } : { display: 'none' }}>Chat</Link>
          <Link to="/signup" style={currentUser ? { display: 'none' } : { display: 'block' }}>SignUp</Link>
          <Link to="/reports" style={currentUser?.userId === '1' ? { display: 'block' } : { display: 'none' }}>Reports</Link>
          <a href="http://sxr9731.uta.cloud/blogs/welcometodiazsfamily/">Blog</a>
          <Link to="/aboutus">About</Link>
          <Link to="/" style={currentUser ? { display: 'none' } : { display: 'block' }}>Home</Link>
          <Link to={currentUser?.userId === '1' ? "/adminHome" : "/memberHome"} style={currentUser ? { display: 'block' } : { display: 'none' }}>Home</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

/* CREATED BY :

1. Lakshmi Radha Yashwanth Uppuganti - 1001964009
2. Bhargava Manikanta Aditya Tummalapenta - 1001965491
3. Sravani Ravipati - 1001949731 */ 