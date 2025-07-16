import styled from "styled-components";

const StyleHeader = styled.header`
    background: var(--accent);
    padding: var(--gutter);
    text-align: left; 

    @media (max-width: 750px) {
        text-align: center;
    }
`

export default function Header() {
    return(
        <>
            <StyleHeader>
                <div>
                    <h1>Jaylin Starlin-Ganaway</h1>
                    <p><strong>My Online Resume</strong></p>
                </div>
            </StyleHeader>        
        </>
    );
}