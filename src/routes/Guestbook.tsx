import React from "react";
import Header from "../components/Header";
import PostList from "../components/PostList";
function Guestbook() {
  return (
    <>
      <Header />
      <main>
        <section className="flex flex-col items-center space-y-4 w-full">
          <h1 className="text-whitebex">sign the guestbook:</h1>
          <h2 className="text-bexgray">Just kidding it is still not working</h2>
          <div className="flex flex-row space-x-4 items-center">
            <label htmlFor="" className="text-whitebex">
              your name
            </label>

            <input
              type="text"
              name="write"
              maxLength={20}
              id="inputfield"
              className=""
            />

            <label htmlFor="" className="text-whitebex">
              say something
            </label>
            <input
              type="text"
              name=""
              maxLength={30}
              id="inputfield"
              className=""
            />
            <button className="text-whitebex rounded bg-bexpurplemedium px-4">
              sign
            </button>
          </div>
        </section>
        <section className="flex flex-col items-center space-y-4 my-4"></section>
      </main>
    </>
  );
}

export default Guestbook;
