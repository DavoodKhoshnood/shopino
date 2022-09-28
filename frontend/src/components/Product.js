import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Rating from '../components/Rating';

const Product = ({product}) => {
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
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
