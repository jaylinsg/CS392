import styled from "styled-components";
import type {Anime} from "../interfaces/types";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleCharDiv=styled.div<{status: string}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props)=>(props.status === "Alive" ? 'darkorange' : 'black')};
    color: ${(props) => (props.status !== "Alive" ? 'white' : 'black')};
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function AnimeList(props : { data:Anime[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map(anime => (
                    <SingleCharDiv 
                        key={anime.mal_id} 
                        status={anime.score >= 7 ? "Alive" : "Dead"}
                    >
                        <h2>{anime.title}</h2>
                        <img src={anime.images.jpg.image_url} alt={anime.title} />
                        <p>{anime.synopsis.slice(0, 100)}...</p>
                    </SingleCharDiv>
                ))}
        </AllCharsDiv>
    );
}
