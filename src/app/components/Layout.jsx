import React from "react";
import Animation from "./Animation/Animation";

function Layout({ children }) {
  return (
    <>
      <Animation />
      {children}
    </>
  );
}

export default Layout;
