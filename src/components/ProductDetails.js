import React from 'react' ; 
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
    const Param = useParams();
  return (
    <div>inside of ProductDetails {Param.id}</div>
  )
}

export default ProductDetails