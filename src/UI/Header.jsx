import { Link } from "react-router-dom";
import SearchedOrder from "../features/order/SearchedOrder";

const Header = () => {
  return (
    <div className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchedOrder/>
    </div>
  );
};

export default Header;
