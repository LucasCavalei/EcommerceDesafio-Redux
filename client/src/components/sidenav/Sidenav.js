import React, { useState } from 'react';
import  {Link } from 'react-router-dom'
import { connect,useDispatch } from 'react-redux';
import {FaShoppingCart} from 'react-icons/fa';
import {GrUserNew} from 'react-icons/gr';
import {IoMdAppstore} from 'react-icons/io';
import Cart from '../carrinho/Cart';
import "./sidenav.css";
import { SET_SHOW_CART } from '../../redux/actions/actionTypes';

const Sidenav =({showCart})=> {
  const dispatch = useDispatch();


  const showSidebar = () =>{
    dispatch({type:SET_SHOW_CART,
    payload:!showCart});
 }
 
return (
  <>
  <div className='sidenav-options'>
      <Link to='/'>
      <IoMdAppstore size={40}/>
      </Link>
      <Link to='#' className='sidenav-contents'>
      <FaShoppingCart size={40}onClick={showSidebar}/>
      </Link >
        <Link  to={{pathname:"/signup"}}>        
      <GrUserNew size={40}/>
      </Link>
  </div>
    <nav className={showCart ? 'sidenav active' : 'sidenav'}>
        <Cart /> 
    </nav>
    </>
  );
}
const mapStateToProps = (state)=>{
  return{
  showCart:state.cartReducer.showCart
  }
}
export default connect(mapStateToProps)(Sidenav);