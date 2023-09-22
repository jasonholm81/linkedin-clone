import React from "react";
import Header from "./Header";
import "./App.css";
import HeaderOption from "./HeaderOption";
import SideBar from "./SideBar";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="app__body">
        <SideBar />
        <Feed />
      </div>

      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
