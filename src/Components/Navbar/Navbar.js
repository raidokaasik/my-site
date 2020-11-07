import React, {Component} from "react";
import {MenuItems} from "./MenuItems";
import MenuButton from "./Menubutton/MenuButton.js";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    clicked: false,
    showMenu: false,
  };

  menuClickHandler = () => {
    const menubtn = document.querySelector(".menu-btn");
    const showMenu = this.state.showMenu;
    if (!showMenu) {
      menubtn.classList.add("close");
      this.setState({showMenu: true});
    } else {
      menubtn.classList.remove("close");
      this.setState({showMenu: false});
    }
    console.log(showMenu);
  };

  onClickHandle = () => {
    return this.setState({clicked: !this.state.clicked});
  };

  render() {
    return (
      <nav className="NavbarItem">
        <h1 className="navbar-logo">
          Raido <span className="secondary-text">Kaasik</span>
        </h1>
        <div className="menu-icon" onClick={this.onClickHandle}>
          <MenuButton clicked={this.menuClickHandler} />

          {/* <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i> */}
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
