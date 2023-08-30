import _React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col items-center justify-center pt-4 mb-16 h-40">
      {/* prettier-ignore */}
      <pre className="ascii text-bexpurplemedium">
&nbsp;__ _               __    __ _ _                     _                 <br/> 
| _| |__   _____  _|_ |  / _(_) | ___  ___ _   _ ___| |_ ___ _ __ ___  <br/> 
| || '_ \ / _ \ \/ /| | | |_| | |/ _ \/ __| | | / __| __/ _ \ '_ ` _ \ <br/> 
| || |_| |  __/&gt;  &lt; | | |  _| | |  __/\__ \ |_| \__ \ ||  __/ | | | | |<br/> 
| ||_.__/ \___/_/\_\| | |_| |_|_|\___||___/\__, |___/\__\___|_| |_| |_|<br/> 
|__|               |__|                    |___/                       <br/> 

      </pre>
      <nav className="flex  flex-row justify-around text-bexpurplemedium space-x-4 mt-4">
        <ul className="tui-button bg-bexpurpledark text-bexpurplelight">
          <h2>
            <Link to={"/"}>root</Link>
          </h2>
        </ul>
        <ul className="tui-button bg-bexpurpledark text-bexpurplelight">
          <h2>
            <Link to={"/bex"}>/bex</Link>
          </h2>
        </ul>
        <ul className="tui-button bg-bexpurpledark text-bexpurplelight">
          <h2>
            <Link to={"/guestbook"}>/guestbook</Link>
          </h2>
        </ul>
        {/*
        <ul>
          <h2>
            <Link to={"/memories"}>/mem</Link>
          </h2>
        </ul>
      */}
        <ul className="tui-button bg-bexpurpledark text-bexpurplelight">
          <h2>
            <Link to={"/"}>/blog</Link>
          </h2>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
