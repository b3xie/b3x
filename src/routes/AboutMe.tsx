import React from "react";
import Header from "../components/Header";

function AboutMe() {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col items-center w-full">
        <section className="flex flex-col items-center text-whitebex w-[64rem]">
          <h1>Bex/Bexie</h1>
          <h2 className="text-bexgray">hi! you can reach me at:</h2>
          <h2></h2>
        </section>
        <section className="flex flex-row items-center justify-center text-whitebex w-[64rem] space-x-4">
          <h2 className="hover:text-bexpurplemedium">
            <a href="https://twitter.com/machinedaughter">twitter</a>
          </h2>
          <h2 className="hover:text-bexpurplemedium">
            <a href="https://github.com/machinedaughter">github</a>
          </h2>
        </section>
      </main>
    </>
  );
}

export default AboutMe;
