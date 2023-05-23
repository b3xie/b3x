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
      <main className="">
        <section className="flex flex-col items-center text-whitebex ">
          <div className="tui-panel bg-bexpurpledark ">
            <h1 className="tui-panel-header bg-bexpurplemedium">
              Welcome to Unit B3-X's web interface.
            </h1>
            <div className="flex flex-col items-center ">
              <h3>unit serial-number b3x#1911000</h3>
              <h2 className="text-bexgray">
                &#x2022;current system uptime: <Uptime></Uptime>
                &#x2022;
              </h2>
              <span className="text-bexpurplemedium">
                █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainPage;
