import React, { useState } from "react";
import Header from "../components/Header";
import PostList from "../components/PostList";
import axios from "axios";
function Guestbook() {
  interface UserData {
    name: string;
    post: string;
  }

  const [postname, changename] = useState("");
  const [posttext, changetext] = useState("");
  const sumbitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const postData = {
      name: postname,
      post: posttext,
    };
    console.log(postData);
    axios
      .post("https://guestbookapi.vercel.app/api/post", postData)
      .then((response) => {
        console.log(response);
      })
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <>
      <Header />
      <main>
        <section className="flex flex-col items-center space-y-4 w-full">
          <h1 className="text-whitebex">sign the guestbook:</h1>
          <h2 className="text-bexgray"></h2>
          <form
            className="flex flex-row space-x-4 items-center"
            id="form"
            onSubmit={sumbitHandler}
          >
            <label htmlFor="" className="text-whitebex">
              your name
            </label>

            <input
              type="text"
              name="write"
              maxLength={20}
              onChange={(e) => changename(e.target.value)}
              id="inputNAME"
              className="inputfield"
            />
            <label htmlFor="" className="text-whitebex">
              say something
            </label>
            <input
              type="text"
              name=""
              maxLength={50}
              id="inputPOST"
              onChange={(e) => changetext(e.target.value)}
              className="inputfield"
            />
            <button
              form="form"
              type="submit"
              className="text-whitebex rounded bg-bexpurplemedium px-4"
            >
              sign
            </button>
          </form>
        </section>
        <section className="flex flex-col items-center space-y-4 my-4">
          <PostList />
        </section>
      </main>
    </>
  );
}

export default Guestbook;
