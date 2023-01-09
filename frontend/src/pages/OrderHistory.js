import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { Store } from '../Store'
import { getError } from '../utils'

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return {...state, loading: true }
        case 'FETCH_SUCCESS':
            return {...state, orders: action.payload, loading: false }
        case 'FETCH_FAIL':
            return {...state, error: action.payload, loading: false }
        default:
            return state;
        };
    };
const OrderHistory = () => {
    const { state } = useContext(Store);
    const { userInfo } = state;
    const navigate = useNavigate();
    const [{ loading, error, orders }, dispatch ] = useReducer(reducer, {
        loading: true,
        error: false,
    })
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const { data } = await axios.get('/api/orders/mine', 
                { headers: { Authorization: `Bearer ${userInfo.token}` }}
                );
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            } catch (error) {
                dispatch({ 
                    type: 'FETCH_FAIL',
                    payload: getError( error ), 
                });
            }
        }
        fetchData();
    }, [userInfo])
  return (
    <div>
        <Helmet>
            <title>Order History</title>
        </Helmet>
        <h1>Order History</h1>
        {loading ? (
            <LoadingBox></LoadingBox>
        ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
    ): (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>PAID</th>
                    <th>DELIVERED</th>
                    <th>ACTIONS</th>
                </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                        </tr>
                    ))}
                </tbody>
        </table>
    )}
}
    </div>
  )
}

export default OrderHistory