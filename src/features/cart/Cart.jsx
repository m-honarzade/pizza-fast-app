import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div>Cart</div>
      <Link to="/menu" className="underline">
        Back to menu{" "}
      </Link>
    </>
  );
};

export default Cart;
