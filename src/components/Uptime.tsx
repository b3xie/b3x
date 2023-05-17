import React, { useEffect, useState } from "react";

const date = new Date("04/01/2004");
const dateHRT = new Date("08/12/2022");

function Uptime() {
  const [difYear, changeTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const data = new Date();
      const day = data.getDate();
      let diff = 0;
      //hrt == "1"
      // ? (diff = data.getTime() - dateHRT.getTime())
      diff = data.getTime() - date.getTime();
      const resut = Math.trunc(diff / 1000);
      changeTime(resut);
    }, 1000);
  }, []);

  return <>{difYear} seconds</>;
}

export default Uptime;
