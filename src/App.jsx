import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import List from "@/pages/List";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes> 
      {/*
       * index用于嵌套路由，仅匹配父路径时，设置渲染的组件。
       *解决当嵌套路由有多个子路由但本身无法确认默认渲染哪个子路由的时候，可以增加index属性来指定默认路由
       *
       */}
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
}

export default App;
