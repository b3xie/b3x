import React from "react";
import Header from "../components/Header";

function AboutMe() {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col items-center w-full">
        <section className="w-[43rem] flex flex-col items-center">
          <h1 className="text-bexpurplemedium">
            -=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
          </h1>
          <div className="flex flex-row items-center w-full justify-stretch">
            <div>
              <img
                src="https://www.gravatar.com/avatar/795bd98ed98746c9a27d8dd21a5fdacd?s=170"
                alt=""
                className="rounded-[20px]"
              />
            </div>
            <div className="flex flex-col mx-8 ">
              <h1 className="text-whitebex">Hi, I'm ~b3xie~</h1>
              <h3 className="text-bexgray">she/her/it</h3>
              <h3 className="text-bexgray">rebexie@b3x.gay</h3>
              <h3 className="text-whitebex">
                <a href="https://github.com/machinedaughter">github</a>
              </h3>
              <h2 className="text-bexgray">
                transfem | g/acc | coding | DIY HRT
              </h2>
            </div>
            <div>
              <img src="/git.svg" alt="" className="fill-gray-50" />
            </div>
          </div>
          <h1 className="text-bexpurplemedium">
            -=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
          </h1>
          <div className="text-bexgray w-full items-start">
            <h3>
              currently @ <br />
              UFABC - sci&tech - undergraduate student 2022~
            </h3>
            <h3>
              was at @ <br />
              ETESP - system sevelopment - secondary technical degree -
              2019~2021
            </h3>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutMe;
