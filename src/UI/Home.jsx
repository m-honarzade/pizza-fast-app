import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

const Home = () => {
  const username = useSelector((state) => state.user.userName);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-center text-xl font-semibold text-slate-700 md:text-3xl ">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight Out of the Oven, Straight to you.
        </span>
      </h1>
      {!username ? (
        <CreateUser />
      ) : (
        <Button to="/menu">Countinue ordering, {username}</Button>
      )}
    </div>
  );
};

export default Home;
