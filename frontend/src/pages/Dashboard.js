import React, { useContext, useEffect, useReducer } from 'react';
import { Store } from '../Store';
import axios from 'axios';
import { getError } from '../utils';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          summary: action.payload,
          loading: false,
        };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
const Dashboard = () => {
    const [{ loading, summary, error }, dispatch] = useReducer(reducer, { loading: true, error:'' });
    const { state } = useContext(Store);
    const { userInfo } = state;

    useEffect(()=> {
        const dataFetch = async () => {
            try {
                const data = await axios.get('/api/orders/summary', {
                    headers: { Authorization: `Bearer ${userInfo.token}` },
                });
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: data,
                })
            } catch (err) {
                dispatch({
                    type: 'FETCH_FAIL',
                    payload: getError(err),
                });
            };
        };
        dataFetch();
    }, [userInfo]);

  return (
    <div>
        <h1>Dashboard</h1>
        {loading 
            ? ( <LoadingBox /> ) 
            : ( error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ): (
                <>
                    <Row>
                    <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        {summary.users && summary.users[0] ? summary.users[0].numUsers : 0 }
                                    </Card.Title>
                                    <Card.Text>Users</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        {summary.orders && summary.users[0] ? summary.orders[0].numOrders : 0 }
                                    </Card.Title>
                                    <Card.Text>Orders</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        {summary.orders && summary.users[0] ? summary.orders[0].totalSales.toFixed(2) : 0 }
                                    </Card.Title>
                                    <Card.Text>Users</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </>
                )
            )
        }
    </div>
  )
}

export default Dashboard