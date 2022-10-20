import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import Card from "react-bootstrap/esm/Card"
import Button from "react-bootstrap/esm/Button"
import ListGroup from "react-bootstrap/esm/ListGroup"
import { Store } from "../Store"
import Checkout from "../components/Checkout"

const PlaceOrder = () => {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { card, userInfo } = state;
  return (
    <div>
        <Checkout step1 step2 step3 step4 ></Checkout>
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
                    <strong>Name:</strong> {card.shippingAddress.fullName} <br /> 
                    <strong>Address:</strong> {card.shippingAddress.address} <br /> 
                    <strong>City:</strong> {card.shippingAddress.city} <br /> 
                    <strong>Postcode:</strong> {card.shippingAddress.Postcode} <br /> 
                    <strong>Country:</strong> {card.shippingAddress.country} <br /> 
                    </Card.Text>
                    <Link to="/shipping">Edit</Link>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </div>
  )
}

export default PlaceOrder