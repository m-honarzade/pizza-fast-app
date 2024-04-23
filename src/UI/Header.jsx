import { Link } from "react-router-dom";
import SearchedOrder from "../features/order/SearchedOrder";
import UserName from "../features/user/UserName";

const Header = () => {
  return (
    <div className="bg-yellow-500 uppercase px-4 sm:px-6 py-3 border-b border-stone-200 flex items-center justify-between ">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchedOrder/>
      <UserName/>
    </div>
  );
};

export default Header;
