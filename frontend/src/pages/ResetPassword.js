import React, { useContext, useEffect, useState } from 'react'
import { Form, useNavigate, useParams } from 'react-router-dom';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import axios from 'axios';
import { getError } from '../utils';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';
import Button from 'react-bootstrap/Button';

const ResetPassword = () => {
    const navigate = useNavigate();

    const { token } = useParams();
  
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const { state } = useContext(Store);
    const { userInfo } = state;
    const submitHandler = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }
      try {
        await axios.post('/api/users/reset-password', {
          password,
          token,
        });
        navigate('/signin');
        toast.success('Password updated successfully');
      } catch (err) {
        toast.error(getError(err));
      }
    };
  
    useEffect(() => {
      if (userInfo || !token) {
        navigate('/');
      }
    }, [navigate, userInfo, token]);
  
    return (
      <Container className="small-container">
        <Helmet>
          <title>Reset Password</title>
        </Helmet>
        <h1 className="my-3">Reset Password</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>
          </Form.Group>
          <div className="mb-3">
            <Button type="submit">Reset Password</Button>
          </div>
        </Form>
      </Container>
    )
}

export default ResetPassword