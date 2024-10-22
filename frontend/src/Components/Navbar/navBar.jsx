import React from "react"
import "./navBar.css"
import { useState } from "react"

import logo from "../Assets/images/Logos/MBF_LOGO.png"
import cart_icon from "../Assets/images/Icons/grocery-store.png"
import search_icon from "../Assets/images/Icons/magnifying-glass.png"



export const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>


      <ul className="nav-menu-left">
        <li
          className={menu === "home" ? "selected" : ""}
          onClick={() => { setMenu("home") }}>Home{menu === "home" ? <hr /> : <></>}
        </li>

        <li
          className={menu === "shop" ? "selected" : ""}
          onClick={() => { setMenu("shop") }}>Shop{menu === "shop" ? <hr /> : <></>}
        </li>

        <li
          className={menu === "info" ? "selected" : ""}
          onClick={() => { setMenu("info") }}>Info{menu === "info" ? <hr /> : <></>}
        </li>

      </ul>

      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>

      <div className="nav-menu-right">

        <div class="search-container">
          <img src={search_icon} alt="Search" />
          <input type="text" class="search-input" placeholder="Search" />
          <button class="search-button">
          </button>
        </div>

        <div className="nav-login-cart">
          <img src={cart_icon} alt="" />
          <div className="nav-cart-count">0</div>
        </div>

      </div>

    </div>
  )
}

export default Navbar
