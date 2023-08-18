import { Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import List from "@/pages/List";
import GoodsList from "@/pages/GoodsList";

const routes = [
  {
    path: "/",
    element: <>首页</>,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "goodsList",
        element: <GoodsList />,
      },
      {
        path: "goodsList2",
        element: <>goodsList2</>,
      },
    ],
  },
];

export default routes;
