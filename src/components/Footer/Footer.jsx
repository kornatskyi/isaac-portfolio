import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss'

export default function Footer(props) {
  const pageNames = props.pageNames;
  return (
    <div className="footer">
      <nav>
      
        {pageNames.map((pageName, i) => {
          return (
            <Link
            className=""
              key={i}
              to={"/" + pageName.replace(/\W/g, "").toLowerCase()}
            >
              {pageName}
            </Link>
          );
        })}
      </nav>
      <p className="copyright">© 2021 All rights reserved Isaac Waggoner</p>
    </div>
  );
}
