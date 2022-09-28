import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data)
    }
    fetchData();
  },[])
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {products.map((product) => {
          return (
            <div className="product" key={product.slug}>
              <Link to={`/products/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="product-info">
              <Link to={`/products/${product.slug}`}>
                <p>{product.name}</p>
                </Link>
                <p>
                  <strong>£{product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
