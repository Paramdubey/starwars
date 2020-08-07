import React, { useState } from "react";
//import logo from "./logo.svg";
import Planets from "./components/Planets";
import People from "./components/People";
import { ReactQueryDevtools } from "react-query-devtools";
import Navbar from "./components/Navbar";
import StickyFooter from "./StickyFooter";
function App() {
  const [page, setPage] = useState("planets");

  return (
    <>
      <div className="App">
        <h1>Star Wars </h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initailIsOpen={false} />
      <StickyFooter />
    </>
  );
}

export default App;
