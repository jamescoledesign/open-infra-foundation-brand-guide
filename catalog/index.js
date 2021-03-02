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
  },
  {
    path: '/Pages/colors.md',
    title: "Colors",
    content: pageLoader(() => import("./Pages/colors.md"))
  },
  {
    path: '/Pages/fonts.md',
    title: "Fonts",
    content: pageLoader(() => import("./Pages/fonts.md"))
  }
];

ReactDOM.render(
  <Catalog title="Brand Guidelines" 
  pages={pages} 
  logoSrc="OpenInfrastructureFoundation-logo-RGB-horiz3.svg"
  theme={{
      textColor: "#000102",
      sidebarColorText: "#000102",
      brandColor: "#000102",
      background: "#f6f6f6",
      linkColor: "#e61e24",
      pageHeadingBackground: "#161616",
      pageHeadingTextColor: "#ffffff",
      navBarBackground: "#eaeaea",
      navBarTextColor: "#000102",
      fontFamily: "'Roboto', 'Helvetica', sans-serif",
      fontHeading: "'Roboto bold', 'Helvetica bold', sans-serif",
      fontMono: "'Source Code Pro', monospace",    
    }} 
  />,
  document.getElementById("catalog")
);
