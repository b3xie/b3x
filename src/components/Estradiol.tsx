import React from "react";
import { useState, useEffect } from "react";
const iframe = (
  <iframe
    id="estra"
    src="https://pubchem.ncbi.nlm.nih.gov/compound/21070#section=3D-Conformer&fullscreen=true"
    style={{ width: "1000px", height: "300px" }}
  ></iframe>
);

function Estradiol() {
  return iframe;
}

export default Estradiol;
