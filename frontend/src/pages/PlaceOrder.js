import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { Store } from "../Store";
import Checkout from "../components/Checkout";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  return (
    <div>
      <Checkout step1 step2 step3 step4></Checkout>
      <Helmet>
        <title>Place Order</title>
      </Helmet>
      <h1 className="my-3">Place Order</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-3">
          <Card.Body>
              <Card.Title>Shipping</Card.Title>
              <Card.Text>
                <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                <strong>Address:</strong> {cart.shippingAddress.address}, {cart.shippingAddress.city}, {cart.shippingAddress.Postcode}, {cart.shippingAddress.country} <br />
              </Card.Text>
              <Link to="/shipping">Edit</Link>
            </Card.Body>
            </Card>
            <Card className="mb-3">
            <Card.Body>
              <Card.Title>Payment</Card.Title>
              <Card.Text>
                <strong>Method:</strong> {cart.paymentMethod} <br />
              </Card.Text>
              <Link to="/payment">Edit</Link>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Items</Card.Title>
              <ListGroup variant="flush">
                {cart.cartItems.map((item)=> (
                  <ListGroup.Item key={item._id}>
                    <Row className="align-items-center" >
                      <Col md={6}>
                        <img src={item.image} alt={item.name} className="img-fluid rounded img-thumbnail" />{" "}
                        <Link to={`/product/${item.slug}`}>{item.name}</Link>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Link to="/cart">Edit</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PlaceOrder;
