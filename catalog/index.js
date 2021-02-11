import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Introduction",
    content: pageLoader(() => import("./WELCOME.md"))
  }, 
  {
    path: '/Pages/logo.md',
    title: "Logo",
    content: pageLoader(() => import("./Pages/logo.md"))
  }

];

ReactDOM.render(
  <Catalog title="Brand Guidelines" 
  pages={pages} 
  logoSrc="OpenInfrastructureFoundation-logo-RGB-horiz3.svg"
  theme={{
      textColor: "#000102",
      background: "#f6f6f6",
      linkColor: "#f15b3e",
      pageHeadingBackground: "#161616",
      pageHeadingTextColor: "#ffffff",
      navBarBackground: "#f6f6f6",
      navBarTextColor: "#133e68",
      fontFamily: "'Roboto', 'Helvetica', sans-serif",
      fontHeading: "'Roboto bold', 'Helvetica bold', sans-serif",
      fontMono: "'Source Code Pro', monospace",    
    }} 
  />,
  document.getElementById("catalog")
);
