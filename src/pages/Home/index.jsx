import React from "react";
import { Routes, Route, Link, useRoutes, Outlet } from "react-router-dom";
import GoodsList from "@/pages/GoodsList";
import routes from "@/router";
import styles from "./index.module.scss";

export default function home() {
  const element = useRoutes(routes);
  return (
    <div className={styles.homeBox}>
      <div className={styles.leftBox}>
        <Link to="/home/goodsList">children中测试跳转1</Link>
        <Link>children中测试跳转2</Link>
      </div>
      <div> 
        {/* <Outlet/> 指定路由组件的展示位置。 */}
        <Outlet />
      </div>
    </div>
  );
}
