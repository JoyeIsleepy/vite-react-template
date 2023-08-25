import React from "react";
import { Link } from "react-router-dom";

export default function index3() {
  return (
    <div>
      index3
      <div>
        <Link to="/goodsList2">跳转到index3</Link>
      </div>
    </div>
  );
}
