import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const params = useParams();
    const {slug} = params  ;
  return (
    <h1>{slug}</h1>
  )
}

export default Product