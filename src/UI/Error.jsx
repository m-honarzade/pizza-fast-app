import { Link, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

const Error = () => {
  const error = useRouteError();
  return( <><p>{error.data || error.message}</p><LinkButton to='-1'>&larr; Go Back</LinkButton></>);
};

export default Error;
