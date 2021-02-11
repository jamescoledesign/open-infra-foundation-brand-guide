import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Open Infrastructure Foundation",
    content: pageLoader(() => import("./WELCOME.md"))
  }
];

ReactDOM.render(
  <Catalog title="Brand Guidelines" 
  pages={pages} 
  theme={{
      textColor: "#000102",
      background: "#f6f6f6",
      linkColor: "#EC1944",
      pageHeadingBackground: "#EC1944",
      pageHeadingTextColor: "#fff",
      navBarBackground: "#EEEEEE",
      navBarTextColor: "#133e68",
      fontFamily: "'Open Sans', sans-serif",
      fontHeading: "'Open Sans bold', sans-serif",
      fontMono: "'Source Code Pro', monospace"
    }} 
  />,
  document.getElementById("catalog")
);
