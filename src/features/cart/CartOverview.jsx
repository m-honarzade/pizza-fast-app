import { Link } from "react-router-dom";

const CartOverview = () => {
  return (
    <div className="bg-stone-800 text-stone-200 uppercase">
      <p className="text-stone-300 font-semibold">
        <span>23 pizzas</span>
        <span>$23.95</span>
      </p>
      <Link to="">Open Cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
