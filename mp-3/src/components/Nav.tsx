import {Link} from "react-router";
import styled from 'styled-components';

const StyledNav = styled.nav`
    flex: 0 0 30%;
    background: var(--mid);
    box-shadow: 1px 0 10px var(--dark);
    @media (max-width: 750px) { 
        flex: 1 1 100%; 
    }
`;

const StyledList = styled.ul`
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

const NavLink = styled(Link)`
    display: block;
    padding: 8px var(--gutter);
    font-size: calc(14px + 0.5vw);
    text-decoration: none;
    color: var(--bright);
    text-align: center;
    &:hover, &:focus {
        background: var(--bright);
        color: var(--dark);
        transition: background 0.2s, color 0.2s;
    }
    &[aria-current="page"] {
        font-weight: bold;
        color: white;
    }
    @media (max-width: 750px) {
        padding: 6px 8px;
    }
`;

export default function Nav() {
    return(
        <StyledNav>
            <StyledList>
                <NavItem><NavLink to={`/`}>Home</NavLink></NavItem>
                <NavItem><NavLink to={`/education`}>Education</NavLink></NavItem>
                <NavItem><NavLink to={`/experience`}>Experience</NavLink></NavItem>
                <NavItem><NavLink to={`/projects`}>Projects</NavLink></NavItem>
                <NavItem><NavLink to={`/aspirations`}>Aspirations</NavLink></NavItem>
                <NavItem><NavLink to={`/about`}>About Me</NavLink></NavItem>
            </StyledList>
        </StyledNav>
    );
}