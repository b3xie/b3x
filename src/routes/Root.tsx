import React, { useState } from "react";
import "/src/index.css";
import Header from "../components/Header";
import ReactDOM from "react-dom/client";
import Uptime from "../components/Uptime";

function MainPage() {
  const title = "\\";

  return (
    <div className="">
      <Header></Header>
      <main>
        <section className="flex flex-col items-center text-whitebex">
          <h1>Welcome to Unit B3-X's web interface.</h1>
          <h3>unit serial-number b3x#1911000</h3>
          <h2 className="text-bexgray">
            &#x2022;current system uptime: <Uptime></Uptime>
            &#x2022;
          </h2>
          <h2></h2>
        </section>
      </main>
    </div>
  );
}

export default MainPage;
