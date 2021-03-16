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
    path: '/pages/about.md',
    title: "About the Foundation",
    content: pageLoader(() => import("./pages/about.md"))
  },
  {
    path: '/pages/logo.md',
    title: "Logo",
    content: pageLoader(() => import("./pages/logo.md"))
  },
  {
    path: '/pages/colors.md',
    title: "Colors",
    content: pageLoader(() => import("./pages/colors.md"))
  },
  {
    path: '/pages/fonts.md',
    title: "Fonts",
    content: pageLoader(() => import("./pages/fonts.md"))
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
