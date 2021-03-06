import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-scroll";
import MenuButton from "./Menubutton/MenuButton.js";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    clicked: false,
    showMenu: false,
    showNav: false,
    showNavonScroll: true,
    navPos: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hides and Shows the Navbar if the scrollY is more than 80px - height of the navbar.

  handleScroll = () => {
    if (window.scrollY >= 80) this.setState({ showNav: true });
    else {
      this.setState({ showNav: false });
    }
  };

  // Handles the small menubutton when it's clicked on smaller screens.

  menuClickHandler = () => {
    const menubtn = document.querySelector(".menu-btn");
    const showMenu = this.state.showMenu;
    if (!showMenu) {
      menubtn.classList.add("close");
      this.setState({ showMenu: !showMenu });
    } else {
      menubtn.classList.remove("close");
      this.setState({ showMenu: !showMenu });
    }
  };

  // Sets a new state when small menu button is clicked on smaller screens and shows the nav menu.

  onClickHandle = () => {
    return this.setState({ clicked: !this.state.clicked });
  };

  render() {
    console.log(this.state.showNavonScroll);
    return (
      <nav className={this.state.showNav ? "NavbarItem active" : "NavbarItem"}>
        <div className="menu-icon" onClick={this.onClickHandle}>
          <MenuButton clicked={this.menuClickHandler} />
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  activeClass="active"
                  to={item.url}
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
