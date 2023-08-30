import React from "react";
import Header from "../components/Header";

function Hrt() {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col items-center">
        <section className="flex flex-col items-center text-whitebex w-3/5 space-y-4">
          <p>
            <h1>DIY HRT GUIDE</h1>
            <h2>yet todo!()</h2>
            <h3>A portuguese version of DIY HRT directory</h3>
            <h2 className="text-bexpurplelight">
              <a href="https://github.com/machinedaughter/GuiaHRT">
                github project
              </a>
            </h2>
          </p>
        </section>
      </main>
    </>
  );
}

export default Hrt;
