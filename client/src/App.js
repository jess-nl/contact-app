import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Contact from "./components/index";

/*
React routes.
*/

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Contact} />
      </BrowserRouter>
    </div>
  );
}