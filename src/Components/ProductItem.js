import React from 'react';
import img from "./shopping-Newpng.png";

export default function ProductItem({ product }) {
  // Check if 'product' is defined before accessing properties
  if (!product) {
    // If 'product' is undefined, return null or handle the case accordingly
    return null;
  }

  // Destructure properties from the 'product' object
  const { img: productImg, title } = product;

  return (
    <div className='col-md-4 mb-2'>
      <div className="card" style={{ width: '18rem' }}>
        {/* Check if 'productImg' is defined before rendering the image */}
        {productImg && <img className="card-img-top" src={productImg} alt="Card image cap" />}

        <div className="card-body">
          {/* Display the product title */}
          <h5 className="card-title">{title}</h5>
          
          {/* Description of the product */}
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          
          {/* Button to add the product to the cart */}
          <a href="#" className="btn btn-primary">
            {/* Shopping cart icon */}
            <img src={img} style={{ width: "20px", height: "20px" }} alt="" />
            &nbsp; Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
}

