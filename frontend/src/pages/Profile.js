import React, { useContext, useReducer, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import axios from 'axios';


const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_REQUEST':
            return { ...state, loadingUpdate: true};
        case 'UPDATE_SUCCESS':
            return { ...state, loadingUpdate: false};
        case 'UPDATE_FAIL':
            return { ...state, loadingUpdate: false};

        default: return state;
    }
};

const Profile = () => {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;
    const [name, setName] = useState(userInfo.name)
    const [email, setEmail] = useState(userInfo.email)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
        loadingUpdate: false,
    })

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(
                '/api/users/profile',
                {
                    name,
                    email,
                    password,
                },
                {
                    headers: { Authorization: `Bearer ${userInfo.token}` },
                }
            );
            dispatch({
                type: 'UPDATE_SUCCESS',
            });
            ctxDispatch({ type: 'USER_SIGNIN', payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
            toast.success('User info updated successfully');
        } catch (err) {
            dispatch({
                type: 'UPDATE_FAIL',
            });
            toast.error(getError(err));
        }


    }

  return (
    <div className='container small-container'>
        <Helmet>
            <title>User Profile</title>
        </Helmet>
        <h1 className='my-3'>User Profile</h1>
        <form onSubmit={submitHandler}>
            <Form.Group className='mb-3' controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    />
            </Form.Group>
            <Form.Group className='mb-3' controlId="email">
            <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    />
            </Form.Group>
            <Form.Group className='mb-3' controlId="password">
            <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    />
            </Form.Group>
            <Form.Group className='mb-3' controlId="password">
            <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                    type="password"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    />
            </Form.Group>
            <div className='mb-3'>
                <Button type="submit">Update</Button>
            </div>

        </form>
    </div>
  )
}

export default Profile