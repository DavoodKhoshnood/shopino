import React, {  useEffect, useReducer } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from "./Product";
import axios from "axios";
import { getError } from "../utils";
import Col from "react-bootstrap/esm/Col";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_REQUEST":
        return { ...state, loading: true };
      case "FETCH_SUCCESS":
        return { ...state, loading: false, products: action.payload };
      case "FETCH_FAIL":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

const ProductListSlide = () => {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1,
        space: 10
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
      }
    };

    const [{ loading, error, products }, dispatch] = useReducer(reducer, {
        loading: true,
        error: "",
        products: [],
      });
      
      useEffect(() => {
        const fetchData = async () => {
          dispatch({ type: "FETCH_REQUEST" });
          try {
            const result = await axios.get("/api/products");
            dispatch({ type: "FETCH_SUCCESS", payload: result.data });
          } catch (err) {
            dispatch({ type: "FETCH_FAIL", payload: getError(err) });
          }
    
        };
        fetchData();
      }, []);
return (
    <div className="products">
    {loading ? (
      <LoadingBox />
    ) : error ? (
      <MessageBox variant="danger" >{error}</MessageBox>
    ) : (
        <Carousel className="mw-100 p-0"
        responsive={responsive}
        ssr
        infinite={true}
        containerClass="first-carousel-container container"
        deviceType={'desktop'}
        swipeable={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        transitionDuration={500}
        >

          {products.map(product => 
             (
              <Col sm={4} md={6} lg={12} className="p-3" key={product.slug} >
                    <Product product={product}/>
                </Col>
             )
             )}
        </Carousel>
        )}
        </div>     
    );
  };


export default ProductListSlide