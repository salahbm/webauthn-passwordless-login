"use client";
import React from "react";
import Animation from "./Animation/Animation";

function Layout({ children }) {
  return (
    <>
      <div className="background-animation">
        <Animation />
      </div>
      <div className="content">{children}</div>
      <style jsx>{`
        .background-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .content {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </>
  );
}

export default Layout;
