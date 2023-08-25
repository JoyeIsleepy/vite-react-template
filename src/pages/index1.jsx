import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WrappedComponent from "@/components/WrappedComponent";

export default WrappedComponent(
  function index1({ testStore }) {
    return (
      <div>
        <Link to="/index2">index2</Link>
        <Link to="/index3">index3</Link>
        <h1>{testStore.num}</h1>
        <h1>{testStore.userObj.name}</h1>
        <button
          onClick={() => {
            testStore.setNum();
          }}
        >
          点击了
        </button>
      </div>
    );
  },
  ["testStore"]
);
