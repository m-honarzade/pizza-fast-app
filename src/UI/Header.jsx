import { Link } from 'react-router-dom';
import SearchedOrder from '../features/order/SearchedOrder';
import UserName from '../features/user/UserName';

const Header = () => {
  return (
    <div className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6 ">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchedOrder />
      <UserName />
    </div>
  );
};

export default Header;
