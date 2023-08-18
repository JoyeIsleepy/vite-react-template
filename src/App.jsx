import { useState } from "react";
import { Routes, Route, Link, useRoutes } from "react-router-dom";
import routes from "@/router";

function App() {
  const element = useRoutes(routes);
  console.log(element, "element");
  return <> {element}</>;
}

export default App;
