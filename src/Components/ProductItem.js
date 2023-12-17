import React from 'react';
import img from "./shopping-Newpng.png";

export default function ProductItem() {
  return (
    <div className='col-md-4'>
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">
                <img src={img} style={{ width: "20px", height: "20px" }} alt="" />
                   &nbsp; Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
}