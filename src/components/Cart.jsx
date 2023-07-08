import React from "react";
import '../styles/Cart.css';
import { FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
    return(
       <div>
         <h1>My Cart </h1>
         <div className="purchase-container">
            <div className="subtotal-container">
            <div className="purchase-container-item">
                <h2>Stocks</h2>
                <div className="items-container-">
                    <p>{"subtotal: $ 100.00"}</p>
                </div>
            </div>
            <div className="purchase-container-item">
                <h2>Reits</h2>
                <div className="items-container-">
                    <p>{"subtotal: $ 100.00"}</p>
                </div>
            </div>
            <div className="purchase-container-item">
                <h2>Bonds</h2>
                <div className="items-container-">
                    <p>{"subtotal: $ 100.00"}</p>
                </div>
            </div>
            </div>


            <div className="purchase-container-item-payment">
                <h2>Payment</h2>
                <div className="payment-subcontainer">
                <div className="items-container-">
                    <p className="payment-total">{"Total: $ 300.00"}</p>
                </div>
                
                </div>
                <Link 
                    to={"/payment"}>
                    <FaMoneyCheckAlt
                    className="payment-icon" />
                </Link>
            </div>
         </div>
       </div>
    )
}
export default Cart;
