import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/ApiRestaurant";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

export default Menu;

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};
