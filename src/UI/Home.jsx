import CreateUser from "../features/user/CreateUser";

const Home = () => {
  return (
    <div className="my-10 px-4 sm:my-16 text-center">
      <h1 className="text-center font-semibold text-xl text-slate-700 mb-8 md:text-3xl ">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight Out of the Oven, Straight to you.
        </span>
      </h1>
      <CreateUser/>
    </div>
  );
};

export default Home;
