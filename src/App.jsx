import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./UI/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Order,{loader as orderLoader} from "./features/order/Order";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./UI/AppLayout";
import Error from "./UI/Error";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/menu",
          element: <Menu />,
          errorElement: <Error />,
          loader: menuLoader,
        },
        { path: "/cart", element: <Cart /> },
        { path: "order/new", element: <CreateOrder /> },
        { path: "/order/:orderId", element: <Order />,loader:orderLoader ,errorElement: <Error />},
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
