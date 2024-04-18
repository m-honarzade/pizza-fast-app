import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return <p>{error.data || error.message}</p>;
};

export default Error;
