/*
Author - David Frear
Date Created - 29th June 2022
Date Updated - 1st July 2022
Use Case -  This application is used to add and subtract items from your live shopping basket.
            from there you can update your basket, clear basket, and redirect yourself back to the shop front.
*/

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { decreaseCart, removeFromCart, addToCart, clearCart, getTotal } from "../features/cartSlice";

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotal());
    }, [cart, dispatch]);

    const handleRemoveFromCart = (cartItem) =>{
        dispatch(removeFromCart(cartItem));
    };

    const handleDecreaseCart = (cartItem) =>{
        dispatch(decreaseCart(cartItem));
    };

    const handleIncreaseCart = (cartItem) =>{
        dispatch(addToCart(cartItem));
    };

    const handleClearCart = () =>{
        dispatch(clearCart());
    };

    return (
            <div className="cart-container">
                <h2 className="shopping-basket-title">Shopping Basket</h2>
                { cart.cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <p>Your basket is currently empty</p>
                        <div className="start-shopping">
                            <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                                <span>Start Shopping</span>
                            </Link>
                        </div>
                    </div>
                ) : (
                <div>
                    <div className="titles">
                        <h3 className="product-title">Product</h3>
                        <h3 className="price">Price</h3>
                        <h3 className="quantity">Quantity</h3>
                        <h3 className="total">Total</h3>
                    </div>
                    <div className="cart-items">
                        {cart.cartItems?.map(cartItem => (
                            <div className="cart-item" key = {cartItem.id}>
                                <div className="cart-product">
                                    <div>
                                        <h3>{cartItem.name}</h3>
                                        <p>{cartItem.desc}</p>
                                        <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                                    </div>
                                </div>
                                <div className="cart-product-price">£{cartItem.price}</div>
                                <div className="cart-product-quantity">
                                    <button onClick = {() => handleDecreaseCart(cartItem)}>-</button>
                                    <div className="counter">{cartItem.cartQuantity}</div>
                                    <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                                </div>
                                <div className="cart-product-total-price">
                                    £{cartItem.price * cartItem.cartQuantity}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <button className="clear-cart" onClick={() => handleClearCart()}>Clear Cart</button>
                        <div className="cart-check">
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span className="amount">£{cart.cartTotalAmount}</span>
                            </div>
                            <br />
                            <button>Checkout</button>
                            <div className="continue-shopping">
                            <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                                <span>Continue Shopping</span>
                            </Link>
                        </div>
                        </div>
                    </div>
                    
                </div>
                )}
            </div>
    );
};
 
export default Cart;