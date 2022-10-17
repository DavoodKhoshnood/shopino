import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"

const Checkout = (props) => {
  return (
    <Row className="checkout">
        <Col className={props.step1 && 'active'}>Sign-In</Col>
        <Col className={props.step2 && 'active'}>Shipping</Col>
        <Col className={props.step3 && 'active'}>Payment</Col>
        <Col className={props.step4 && 'active'}>Place Order</Col>
    </Row>
  )
}

export default Checkout