import React from "react";
import Header from "../components/Header";

function Memories() {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col items-center">
        <section className="flex flex-col items-center text-whitebex w-[64rem]">
          <h1>This is b3x's personal memories</h1>
          <h2>where it stores data it considers important</h2>
          <h2></h2>
        </section>
        <section></section>
      </main>
    </>
  );
}

export default Memories;
