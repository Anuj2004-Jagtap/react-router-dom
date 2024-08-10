import React from 'react' ;
import { Link , Outlet } from 'react-router-dom';


const Products = () => {
  return (
    <div style={{paddingRight:'20px'}}>
        <Link style={{paddingRight:'20px'}} to='123'>Prodduct-123</Link>
        <Link style={{paddingRight:'20px'}} to='488'>Prodduct-488</Link>
        <Link style={{paddingRight:'20px'}} to='099'>Prodduct-099</Link>
        <Outlet />
    </div>
  )
}

export default Products