import React from "react";

export default function Footer(props) {
  return (
    <div className="footer">
      <nav>
      
        <ul className="navBar">
     {props.links}
        </ul>
      </nav>
      <p className="copyright">© 2021 All rights reserved Issac Waggoner</p>
    </div>
  );
}
