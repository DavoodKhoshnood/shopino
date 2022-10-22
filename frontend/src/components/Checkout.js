import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"

const Checkout = (props) => {
  return (
    <div className="track">
    <div className={props.step1 && 'active'}> <span className="icon"> <i className="fa fa-user"></i> </span> <span className="text">Sign In</span> </div>
    <div className={props.step2 && 'active'}> <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text">Shipping</span> </div>
    <div className={props.step3 && 'active'}> <span className="icon"> <i className="fa fa-credit-card"></i> </span> <span className="text">Payment</span> </div>
    <div className={props.step4 && 'active'}> <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">Place Order</span> </div>
</div>
  )
}

export default Checkout