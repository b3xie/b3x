import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col items-center justify-around pt-4 mb-16 h-40">
      <h1 className="text-bexpurplelight text-5xl">[b3x] filesystem</h1>
      <nav className="flex flex-row justify-around text-bexpurplemedium space-x-4">
        <ul>
          <h2>
            <Link to={"/"}>root</Link>
          </h2>
        </ul>
        {/*
        <ul>
          <h2>
            <Link to={"/guestbook"}>/guestbook</Link>
          </h2>
        </ul>*/}
        <ul>
          <h2>
            <Link to={"/bex"}>/bex</Link>
          </h2>
        </ul>
        {/*
        <ul>
          <h2>
            <Link to={"/memories"}>/mem</Link>
          </h2>
        </ul>
      */}
        <ul>
          <h2>
            <Link to={"/project"}>/projects</Link>
          </h2>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
