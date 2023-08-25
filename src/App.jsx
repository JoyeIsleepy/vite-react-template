import { useState } from "react";
import { Routes, Route, Link, useRoutes } from "react-router-dom";
import routes from "@/router";
import store from "@/store";
import { Provider } from "mobx-react";

function App() {
  const element = useRoutes(routes);
  return <Provider {...store}> {element}</Provider>;
}

export default App;
