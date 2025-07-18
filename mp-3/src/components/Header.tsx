// src/components/Header.tsx
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import styled from "styled-components";

const StyleHeader = styled.header`
    background: var(--accent);
    padding: var(--gutter);
    text-align: left; 

    @media (max-width: 750px) {
        text-align: center;
    }

    h1 {
    margin: 0;
    font-size: calc(32px + 0.5vw);
    }

    p {
        margin: 4px 0;
        font-size: calc(12px + 0.5vw);
    }

    .jump-link {
        color: var(--bright);
        text-decoration: none;
    }

    .jump-link:hover,
    .jump-link:focus {
        text-decoration: underline;
    }
`

export default function Header() {
    const { pathname } = useLocation();

  // determine title and header JSX based on current path
  let pageTitle: string;
  let headerContent: React.ReactNode;

  switch (pathname) {
    case '/':
      pageTitle = 'Home';
      headerContent = (
        <>
          <h1>Jaylin Starlin-Ganaway</h1>
          <p><strong>My Online Resume</strong></p>
        </>
      );
      break;

    case '/education':
      pageTitle = 'Education';
      headerContent = (
        <>
          <h1>Education</h1>
          <p><strong>My Academic History</strong></p>
        </>
      );
      break;

    case '/experience':
      pageTitle = 'Experience';
      headerContent = (
        <>
          <h1>Experience</h1>
          <p><strong>My Employment History</strong></p>
        </>
      );
      break;

    case '/projects':
      pageTitle = 'Projects';
      headerContent = (
        <>
          <h1>Projects</h1>
          <p><strong>(Calculator At The Bottom)</strong></p>
          <p>
            <strong>
              <a href="#calculator" className="jump-link">
                Go to Calculator ↓
              </a>
            </strong>
          </p>
        </>
      );
      break;

    case '/aspirations':
      pageTitle = 'Aspirations';
      headerContent = (
        <>
          <h1>Aspirations</h1>
          <p><strong>My Professional Goals</strong></p>
        </>
      );
      break;

    case '/about':
      pageTitle = 'About Me';
      headerContent = (
        <>
          <h1>About Me</h1>
          <p><strong>My Personal Life & Interests</strong></p>
        </>
      );
      break;

    case '/credits':
      pageTitle = 'Credits';
      headerContent = (
        <>
          <h1>Credits</h1>
          <p><strong>Resources & Acknowledgements</strong></p>
        </>
      );
      break;

    default:
      // fallback
      pageTitle = '';
      headerContent = null;
  }

  // set the document title
  useEffect(() => {
    if (pageTitle) {
      document.title = `${pageTitle} | Resume`;
    }
  }, [pageTitle]);

  return <StyleHeader>{headerContent}</StyleHeader>;
}