import Layout from "@/Layout";
import List from "@/pages/List";
import GoodsList from "@/pages/GoodsList";
import Index1 from "@/pages/index1";
import Index2 from "@/pages/index2";
import Index3 from "@/pages/index3";

const routes = [
  {
    path: "/",
    element: <Layout />,
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
  {
    path: "/index1",
    element: <Index1 />,
  },
  {
    path: "/index2",
    element: <Index2 />,
  },
  {
    path: "/index3",
    element: <Index3 />,
  },
];

export default routes;
