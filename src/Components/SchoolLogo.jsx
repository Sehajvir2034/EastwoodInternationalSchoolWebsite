import React from "react";

import eastwoodLogo from "../eastwoodlogo.png";

export const SchoolLogo = (props) => (
  <>
    <img
      src={eastwoodLogo}
      alt="Eastwood School Logo"
      height={props.height}
      width={props.width}
    />
  </>
);
