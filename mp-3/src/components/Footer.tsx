// src/components/Footer.tsx

import styled from "styled-components";
import { Link } from "react-router";

const StyleFooter = styled.footer`
    background: var(--accent);
    padding: var(--gutter);
    text-align: left; 
`

export default function Footer() {
    return (
        <>
            <StyleFooter>
                <p>&#169; 2025 Jaylin Starlin-Ganaway. <Link to="/credits">Credits</Link></p>
            </StyleFooter>
        </>
    );
}