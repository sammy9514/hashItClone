import { createBrowserRouter } from "react-router-dom";
import { Homescreen } from "../Pages/Homescreen";
import { Layout } from "../Common/Layout";

export const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homescreen />,
      },
    ],
  },
]);
