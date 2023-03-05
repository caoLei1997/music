import { createBrowserRouter, Navigate, redirect } from "react-router-dom";
// 首页
import Home from "@/pages/home";
// 推荐
import Recommend from "@/pages/recommend";
// 歌手
import Singers from "@/pages/singers";
// 排行榜
import Rank from "@/pages/rank";
// 专辑详情
import Album from "@/pages/album";
import SingersDetail from "@/pages/singers-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element:  <Navigate to="/recommend" />,
      },
      {
        path: "/recommend",
        element: <Recommend />,
        children: [
          {
            path: "/recommend/:id",
            element: <Album />,
          },
        ],
      },
      {
        path: "/singers",
        element: <Singers />,
        children: [
          {
            path: "/singers/:id",
            element: <SingersDetail />,
          },
        ],
      },
      {
        path: "/rank",
        element: <Rank />,
        children: [
          {
            path: "/rank/:id",
            element: <Album />,
          },
        ],
      },
    ],
  },
  // {
  //   path: "*",
    
  //   element: <>404</>,
  // },
]);
export default router;
