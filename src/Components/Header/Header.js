import React, { useState } from "react";
import { Container } from "reactstrap";
import "./Header.css"
import { useRef } from "react";
import Logo from '../../Assests/Images/logo.jpg'

const navlinks=[
    {
        display: "Home",
        url: "/"
    },
    {
        display: "Products & Services",
        url: "ProductServices"
    },
    {
        display: "Become a Clint ",
        url: "/"
    },
    {
        display: "About Us ",
        url: "/"
    }
   
]

const Header = () => {
    const [content,setContent]=useState("ProductServices")

    const menuRef=useRef();

    const menuToggle= ()=>menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header d-flex align-items-center">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo d-flex align-items-center">
           <img src={Logo} alt="" className="logo " />
          </div>
          <div className="nav d-flex  gap-5">
              <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                  <ul className="nav__list d-flex gap-5">
                    {
                        navlinks.map((item,index)=>(
                            <li key={index} className="nav_item ">
                                 <a className=" text-decoration-none " href={item.url}>{item.display}</a>
                            </li>
                        ))
                    }
                     
                  </ul>
              </div>
              {/* <div className="nav__right">
                  <p className=" d-flex align-content-center gap-3"><i class="ri-phone-line"></i> +088 01938639567</p>
              </div> */}
          </div>
          <div className="mobile__menu">
              <span><i class="ri-menu-fill" onClick={menuToggle}></i> </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
