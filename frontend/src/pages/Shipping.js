import { useContext, useState } from "react"
import { Helmet } from "react-helmet-async"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { Navigate, useNavigate } from "react-router-dom"
import { Store } from "../Store"

const Shipping = () => {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const [fullName, setFullName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postcode, setPostcode] = useState('')
    const [country, setCountry] = useState('')

    const submitHandler = (event) => {
        event.preventDefault();
        ctxDispatch({
            type: 'SAVE_SHIPPING_ADDRESS',
            payload: {
                fullName,
                address,
                city,
                postcode,
                country,
            },            
        })
        localStorage.setItem('shippingAddress', JSON.stringify({
            fullName,
            address,
            city,
            postcode,
            country,
        }))
        Navigate('/payment');
    } 
  return (
    <div>
        <Helmet>
            <title>Shipping Address</title>
        </Helmet>
        <div className="container small-container" >
        <h1 className="my-3">Shipping Address</h1>
        <Form onSubmit={submitHandler} >
        <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control value={fullName} onChange={(e) => setFullName(e.target.value)} required ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control value={address} onChange={(e) => setAddress(e.target.value)} required ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control value={city} onChange={(e) => setCity(e.target.value)} required ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="postcode">
                <Form.Label>Postcode</Form.Label>
                <Form.Control value={postcode} onChange={(e) => setPostcode(e.target.value)} required ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control value={country} onChange={(e) => setCountry(e.target.value)} required ></Form.Control>
            </Form.Group>
            <div className="mb-3">
                <Button variant="primary" type="submit" >
                    Continue
                </Button>
            </div>
        </Form>
        </div>
    </div>
  )
}

export default Shipping