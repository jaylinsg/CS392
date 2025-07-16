import styled from 'styled-components';
import profilePic from './IMG_9532.jpeg';  

// intro wrapper (.intro)
const Intro = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: var(--gutter);

    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

// <figure> container (.intro-figure)
const IntroFigure = styled.figure`
    margin: 0;

    @media (max-width: 750px) {
        flex: none;
    }
`;

// <img> styles
const IntroImage = styled.img`
    max-width: 200px;
    width: 100%;
    height: auto;
    display: block;
    border-radius: 4px;
`;

// text next to image (.intro-text)
const IntroText = styled.div`
    flex: 1;

    figcaption {
        font-family: 'Iceland', cursive;
        font-size: calc(24px + 0.5vw);
        margin-bottom: var(--gutter);
        color: var(--bright);
    }

    p {
        font-size: calc(12px + 0.5vw);
        line-height: 1.6;
    }

    @media (max-width: 1000px) {
        margin-top: var(--gutter);
    }

    @media (max-width: 750px) {
        width: 100%;
        padding-top: var(--gutter);
        flex: none;
    }
`;

// contact section styles
const ContactSection = styled.section`
    background: var(--accent);
    padding: var(--gutter);
    margin: var(--gutter) auto;
    max-width: 80vw;       
    border-radius: 4px;
    text-align: center;

    h2 {
        font-size: calc(14px + 0.5vw);
        margin-bottom: 0.5em;
    }

    p {
        font-size: calc(10px + 0.5vw);
        margin: 0.25em 0;
    }

    a {
        color: var(--bright);
        text-decoration: underline;
    }
`;

export default function Home() {
  return (
    <>
      <Intro>
        <IntroFigure>
          <IntroImage src={profilePic} alt="Jaylin Starlin-Ganaway" />
        </IntroFigure>
        <IntroText>
          <figcaption>Throwback</figcaption>
          <p>
            Hi there! I'm Jaylin Starlin-Ganaway, a Computer Science major at Boston University. 
            Beyond the bullet points of a traditional resume, this site tells the full story of 
            my journey—from my first employment to the projects and academic history that shaped 
            my skills. Since 2016, I've worked in various roles like customer and financial services, 
            each experience teaching me the importance of problem-solving, teamwork, and 
            continuous learning.
          </p>
        </IntroText>
      </Intro>

      <ContactSection>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:jstarlin@bu.edu">jstarlin@bu.edu</a></p>
        <p>Phone: (917) 524-5650</p>
        <p>
          LinkedIn: <a href="https://linkedin.com/in/jaylinstarlinganaway" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/jaylinstarlinganaway
          </a>
        </p>
      </ContactSection>
    </>
  );
}
