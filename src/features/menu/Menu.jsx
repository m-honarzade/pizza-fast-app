import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/ApiRestaurant";

const Menu = () => {
  const menu = useLoaderData();
  console.log(menu);
  return <ul></ul>;
};

export default Menu;

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};
