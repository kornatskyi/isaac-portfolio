import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import burger from "../../assets/images/icons/burger.svg";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, callback) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }
  // Bind the event listener
  document.addEventListener("click", handleClickOutside);
  return () => {
    // Unbind the event listener on clean up
    document.removeEventListener("click", handleClickOutside);
  };
}

function NavBar(props) {
  const { pageNames } = props;

  //state that keeps name of sidebar class(in or out)
  const [toggleClass, setToggleClass] = useState("");
  const toggleSideBar = () => {
    setToggleClass(toggleClass === "out" ? "in" : "out");
  };

  //Handle click outside of navbar
  const wrapperRef = useRef(null);
  const removeEventListener = useOutsideAlerter(wrapperRef, () => {
    if (toggleClass === "out") {
      setToggleClass("in");
    }
    removeEventListener();
  });

  return (
    <div className="navbar" ref={wrapperRef}>
      <img src={burger} className="burger" onClick={toggleSideBar} alt="" />
      <div id="links" className={`links ${toggleClass}`}>
        {pageNames.map((pageName, i) => {
          return (
            <Link
              className="nav-link"
              key={i}
              onClick={toggleSideBar}
              to={"/" + pageName.replace(/\W/g, "").toLowerCase()}
            >
              {pageName}
            </Link>
          );
        })}
        <div className="close" onClick={toggleSideBar}></div>
      </div>
    </div>
  );
}

export default NavBar;
