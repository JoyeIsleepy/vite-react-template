import { useState } from "react";
import { Routes, Route, Link, useRoutes } from "react-router-dom";
import routes from "@/router";

function App() {
  const element = useRoutes(routes); 
  return <> {element}</>;
}

export default App;
