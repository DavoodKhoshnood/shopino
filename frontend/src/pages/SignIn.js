import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Store } from "../Store";


const SignIn = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';
    
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const { state, dispatch: ctxDispatch } = useContext(Store);

    const submitHandler = async (event) => {
      event.preventDefault();
      try {
        const { data } = await axios.post('/api/users/signin', {
          email, password 
        })
        ctxDispatch({type: 'USER_SIGNIN', payload: data})
        localStorage.setItem('userInfo', JSON.stringify(data))
        navigate(redirect || '/')
      } catch(error) {
        alert('Invalid email or password')
      }
    };

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
          <div className="mb-3">
            <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
            New customer?{' '}
            <Link to={`/signup?redirect=${redirect}`}>Create new account</Link>
        </div>
      </Form>
    </Container>
  );
};

export default SignIn;
