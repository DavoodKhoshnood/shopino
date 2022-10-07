import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Rating from '../components/Rating';
import { useContext } from 'react';
import axios from 'axios';
import { Store } from '../Store';

const Product = ({product}) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    const existItem = cartItems.find((item) => item._id === product._id)
    const quantity = existItem ? existItem.quantity + 1 : 1;   if (data.countInStock < quantity) {
      window.alert("Product is out of stock");
      return;
    }
    ctxDispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };

  return (
    <Card key={product.slug}>
      <Link to={`/products/${product.slug}`}>
        <img src={product.image} alt={product.name} className="card-img-top"/>
      </Link>
      <Card.Body>
        <Link to={`/products/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
          <Card.Text>£{product.price}</Card.Text>
        <Button onClick={()=> addToCartHandler(product)}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
