import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST': 
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { 
                ...state, 
                loading: false,

            };
        case 'FETCH_FAIL': return { ...state, loading: false, error: action.payload };
        default: return state;
    }
}
const Dashboard = () => {
    const [{ loading, error }, dispatch] = useReducer(reducer, { loading: true, error:'' });
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard