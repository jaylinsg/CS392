// src/App.tsx

import { createBrowserRouter, RouterProvider } from "react-router";
import { createGlobalStyle } from "styled-components";
import Root from "./components/Root.tsx";


const router = createBrowserRouter([
  { path: '*', Component: Root }
]);

// global style that matches mp-1
const GlobalStyle = createGlobalStyle`
  :root {
    --dark:   #02111B;
    --mid:    #03435F;
    --bright: #76EEC6;
    --accent: #028090;
    --gutter: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Iceland", sans-serif;
    font-weight: 400;
    font-style: normal;
    background: var(--dark);
    color: var(--bright);
  }

  #page-wrapper {
    padding: var(--gutter);
    max-width: 80vw;
    margin: var(--gutter) auto;
    box-shadow: 1px 0 10px var(--bright);
  }

  h1 {
    font-size: calc(40px + 0.5vw);
  }

  p, figcaption {
    font-size: calc(12px + 0.5vw);
    line-height: 1.5;
    color: #eee;
    margin-bottom: var(--gutter);
  }

  header, footer {
    background: var(--accent);
    padding: var(--gutter);
    text-align: left;
  }

  @media (max-width: 750px) {
    #page-wrapper {
      max-width: 95vw;
    }
    header {
      text-align: center;
    }
    header h1 {
      font-size: calc(32px + 0.5vw);
    }
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}