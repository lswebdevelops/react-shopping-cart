import React from "react";
import "../styles/Payment.css";
import { Link } from "react-router-dom";
import { GiConfirmed } from "react-icons/gi";
import { SlUserFollowing } from "react-icons/sl";

const Payment = () => {
  return (
    <div>
      <h1>
        <GiConfirmed className="payment-confirmed" /> Your payment has been
        confirmed.
      </h1>
      <Link to={"/portfolio"} className="link-to-portfolio">
        <SlUserFollowing /> <span>&#160;&nbsp;</span>{" "}
        <span className="retun-span">Return to Portfolio</span>
      </Link>
    </div>
  );
};

export default Payment;
