// src/components/Nav.tsx

import { NavLink } from "react-router";
import styled from 'styled-components';

const StyledNav = styled.nav`
    flex: 0 0 30%;
    background: var(--mid);
    box-shadow: 1px 0 10px var(--dark);
    @media (max-width: 750px) { 
        flex: 1 1 100%; 
    }
`;

const NavList = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    @media (max-width: 750px) { 
        flex-direction: row; 
        justify-content: center;
        flex-wrap: wrap;
    }
`;

const NavItem = styled.li`
    margin: var(--gutter);
    @media (max-width: 750px) {
        margin: var(--gutter) 8px;
    }
`;

// const NavLink = styled(Link)`
//     display: block;
//     padding: 8px var(--gutter);
//     font-size: calc(14px + 0.5vw);
//     text-decoration: none;
//     color: var(--bright);
//     text-align: center;
//     &:hover, &:focus {
//         background: var(--bright);
//         color: var(--dark);
//         transition: background 0.2s, color 0.2s;
//     }
//     &[aria-current="page"] {
//         font-weight: bold;
//         color: white;
//     }
//     @media (max-width: 750px) {
//         padding: 6px 8px;
//     }
// `;

const StyledNavLink = styled(NavLink) `
    display: block;
    padding: 8px var(--gutter);
    font-size: calc(14px + 0.5vw);
    text-decoration: none;
    color: var(--bright);
    text-align: center;

    &:hover,
    &:focus {
        background: var(--bright);
        color: var(--dark);
        transition: background 0.2s, color 0.2s;
    }

    /* this will now match when NavLink sets aria-current="page" */
    &[aria-current="page"] {
        font-weight: bold;
        color: white;
        background: var(--mid);
    }

    @media (max-width: 750px) {
        padding: 6px 8px;
    }
`

export default function Nav() {
    return(
        <StyledNav>
            <NavList>
                <NavItem><StyledNavLink to={`/`}>Home</StyledNavLink></NavItem>
                <NavItem><StyledNavLink to={`/education`}>Education</StyledNavLink></NavItem>
                <NavItem><StyledNavLink to={`/experience`}>Experience</StyledNavLink></NavItem>
                <NavItem><StyledNavLink to={`/projects`}>Projects</StyledNavLink></NavItem>
                <NavItem><StyledNavLink to={`/aspirations`}>Aspirations</StyledNavLink></NavItem>
                <NavItem><StyledNavLink to={`/about`}>About Me</StyledNavLink></NavItem>
            </NavList>
        </StyledNav>
    );
}