import React from 'react';
import img from "./shopping-Newpng.png"

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand mx-2 m-1 text-danger" href="#"><b>OriginG</b></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link active mx-2" href="#"><b>Home</b> </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#"><img src={img} style={{width:"30px",height:"30px"}} alt="" srcset="" />(0)</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
