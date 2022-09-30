import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Rating from '../components/Rating';
import Button from 'react-bootstrap/esm/Button';
import { Helmet } from 'react-helmet-async';

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, product: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const Products = () => {
  const params = useParams();
  const {slug} = params;
  // const [products, setProducts] = useState([]);
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
    product: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

    };
    fetchData();
  }, [slug]);

  return (
    loading? <div>Loading...</div>
    : error ? <div>{error}</div>
    : <div>
      <Row>
        <Col md={6}>
          <img className="img-large" src={product.image} alt={product.name}/>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
          <ListGroup.Item>
            <Helmet>
              <title>{product.name}</title>
            </Helmet>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating} numReview={product.numReview} />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Price: £{product.price}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              Description: <p>{product.description}</p>
            </ListGroup.Item>
            
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
              <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>£{product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>{product.countInStock>0?
                    <Badge bg="success">In Stock</Badge>
                    :
                    <Badge bg="danger">Out of Stock</Badge>
                  }</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  {product.countInStock>0 && (
                    <ListGroup.Item>
                      <div className="d-grid">
                        <Button variant="primary">
                          Add to Cart
                        </Button>
                      </div>
                    </ListGroup.Item>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>  
        </Col>
      </Row>
      </div>
  )
};

export default Products;