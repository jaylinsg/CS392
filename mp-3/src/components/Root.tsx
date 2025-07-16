import {Routes, Route} from "react-router";
import styled from "styled-components";
import Home from './mains/Home';
import Education from './mains/Education';
import Experience from './mains/Experience';
import Projects from './mains/Projects';
import Aspirations from './mains/Aspirations';
import About from './mains/About';
import Credits from './mains/Credits';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';


const Wrapper = styled.div.attrs({ id: 'page-wrapper' })`
    padding: var(--gutter);
    max-width: 80vw;
    margin: var(--gutter) auto;
    box-shadow: 1px 0 10px var(--bright);

    @media (max-width: 750px) {
        max-width: 95vw;
    }
`;

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const Main = styled.main`
    flex: 0 0 70%;
    min-height: 100vh;
    padding: var(--gutter);
    background: var(--dark);

    @media (max-width: 1000px) {
        flex: 1 1 100%;
        height: auto;
        flex-direction: column;
    }
`;

export default function Root() {
    return (
        <Wrapper>
            <Header />
            <Container>
                <Nav />
                <Main>
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/education" Component={Education} />
                        <Route path="/experience" Component={Experience} />
                        <Route path="/projects" Component={Projects} />
                        <Route path="/aspirations" Component={Aspirations} />
                        <Route path="/about" Component={About} />
                        <Route path="/credits" Component={Credits} />
                    </Routes>
                </Main>
            </Container>
            <Footer />
        </Wrapper>
    );
}
