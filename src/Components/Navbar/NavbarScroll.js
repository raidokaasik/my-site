import React from "react";

const navbarScroll = props => {
  let prevScrollPos = window.pageYOffset;

  return (window.onScroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.getElementsByClassName(props.navbarClass).style.top = "0";
    } else {
      document.getElementsByClassName(props.navbarClass).style.top = "-50px";
    }
    prevScrollPos = currentScrollPos;
  });
};

export default navbarScroll;
