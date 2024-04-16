import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./UI/Home";
import Menu from "./features/menu/Menu";
import Order from "./features/order/Order";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./UI/AppLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/menu", element: <Menu /> },
        { path: "/cart", element: <Cart /> },
        { path: "order/new", element: <CreateOrder /> },
        { path: "/order/:orderId", element: <Order /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;