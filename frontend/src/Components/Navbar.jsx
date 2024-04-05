// import { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import BONVOYAGELOGO from "../assets/Pet pals_prev_ui.png/";
// import { FaBars } from "react-icons/fa";
// import { useMediaQuery } from '@chakra-ui/react';

// import "../CSS/Navbar.css";
// import { Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Button } from "@chakra-ui/react";

// export const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const activeSection = location.pathname;
//   const navigate = useNavigate()
//   const [isLargerThanWidth] = useMediaQuery("(min-width: 768px)");
//   const token = localStorage.getItem("token");
//   let isLoggedIn=false;
//   if(token){
//     isLoggedIn=true
//   }
//   else{
//     isLoggedIn=false
//   }

//   const handleToggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   async function  handleLogout(){
//     try{
//       let res = await fetch("https://petpals-4.onrender.com/users/logout");
//       let data=await res.json();
//       console.log(data);
//       localStorage.removeItem("token");
//       navigate("/");

//     }
//     catch(e){
//       console.log(e);
//     }
//   }

//   // Example of a function to handle logout, adjust as needed
//   // const handleLogout = () => {
//   //   console.log('Logout function called');
//   // };

//   return (
//     <div className="navbar">
//       <div className="navbar-container">
//         <Link to="/">
//           {" "}
//           <div className="navbar-logo">
//             <img src={BONVOYAGELOGO} alt="" />
//           </div>
//         </Link>
//         <div className="navbar-links">
//           <Link
//             to="/"
//             className={`nav-link ${activeSection === "/" ? "active" : ""}`}
//           >
//             Home
//           </Link>
//           <Link
//             to="/adopt"
//             className={`nav-link ${activeSection === "/adopt" ? "active" : ""}`}
//           >
//             Adopt
//           </Link>
//           <Link
//             to="/about"
//             className={`nav-link ${activeSection === "/about" ? "active" : ""}`}
//           >
//             About 
//           </Link>
//            <Link
//             to="/contact"
//             className={`nav-link ${activeSection === "/contact" ? "active" : ""}`}
//           >
//             Contact
//           </Link>
//           {}
//           <Link to="/login" className="nav-link">
//             Login
//           </Link> 
          
//           <Link to="/signup" className="nav-link">
//             Signup
//           </Link>
         
//         </div> 

//         <div className="menu-sumit">
//         {isLargerThanWidth && (
//       <Menu>
//         <MenuButton as={Button} colorScheme='#1D2B53' color='black' borderColor='black'>
//           Profile
//         </MenuButton>
//         <MenuList>
//           <MenuGroup title='Profile'>
//             <Link to="/Application">
//               <MenuItem>Application</MenuItem>
//             </Link>
//           </MenuGroup>
//           <MenuDivider />
//           <MenuGroup title='Help'>
//             <MenuItem>FAQ</MenuItem>
//             <MenuItem onClick={handleLogout}>Logout</MenuItem>
//           </MenuGroup>
//         </MenuList>
//       </Menu>
//     )}
// </div>
//         <div className="mobile-menu-icon" onClick={handleToggleMenu}>
//           <FaBars />

//           <div className={`menu-drawer ${isMenuOpen ? "open" : ""}`}>
//             <Link to="/" onClick={() => setIsMenuOpen(false)}>
//               Home
//             </Link>
//             <Link to="/adopt" onClick={() => setIsMenuOpen(false)}>
//               Adopt
//             </Link>
//             <Link to="/login" onClick={() => setIsMenuOpen(false)}>
//               Login
//             </Link>
//             <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
//               Signup
//             </Link>
//             <Link to="/Application">
//               <p>Application</p>
//             </Link>
//             <p onClick={handleLogout} className="logout">Logout</p>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BONVOYAGELOGO from "../assets/Pet pals_prev_ui.png/";
import { FaBars } from "react-icons/fa";
import { useMediaQuery } from '@chakra-ui/react';

import "../CSS/Navbar.css";
import { Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Button } from "@chakra-ui/react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const activeSection = location.pathname;
  const navigate = useNavigate();
  const [isLargerThanWidth] = useMediaQuery("(min-width: 768px)");
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  async function  handleLogout(){
    try{
      let res = await fetch("https://petpals-4.onrender.com/users/logout");
      let data=await res.json();
      console.log(data);
      localStorage.removeItem("token");
      navigate("/");

    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/">
          {" "}
          <div className="navbar-logo">
            <img src={BONVOYAGELOGO} alt="" />
          </div>
        </Link>
        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${activeSection === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/adopt"
            className={`nav-link ${activeSection === "/adopt" ? "active" : ""}`}
          >
            Adopt
          </Link>
          <Link
            to="/about"
            className={`nav-link ${activeSection === "/about" ? "active" : ""}`}
          >
            About 
          </Link>
           <Link
            to="/contact"
            className={`nav-link ${activeSection === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
          {!isLoggedIn && (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link> 
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </>
          )}
        </div> 

        <div className="menu-sumit">
        {isLargerThanWidth && isLoggedIn && (
          <Menu>
            <MenuButton as={Button} colorScheme='#1D2B53' color='black' borderColor='black'>
              Profile
            </MenuButton>
            <MenuList>
              <MenuGroup title='Profile'>
                <Link to="/Application">
                  <MenuItem>Application</MenuItem>
                </Link>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title='Help'>
                <MenuItem>FAQ</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        )}
      </div>
        <div className="mobile-menu-icon" onClick={handleToggleMenu}>
          <FaBars />
          <div className={`menu-drawer ${isMenuOpen ? "open" : ""}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/adopt" onClick={() => setIsMenuOpen(false)}>
              Adopt
            </Link>
            {!isLoggedIn && (
              <>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  Signup
                </Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <Link to="/Application">
                  <p>Application</p>
                </Link>
                <p onClick={handleLogout} className="logout">Logout</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

