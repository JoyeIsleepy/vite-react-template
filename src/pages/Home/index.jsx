import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import GoodsList from "@/pages/GoodsList";
import styles from "./index.module.scss";

export default function home() {
  return (
    <div className={styles.homeBox}>
      <div className={styles.leftBox}>
        <Link to="/goodsList">children中测试跳转1</Link>
        <Link>children中测试跳转2</Link>
      </div>
      <Routes>
        <Route path="goodsList" element={<GoodsList />} />
      </Routes>
    </div>
  );
}
