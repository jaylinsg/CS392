import styled from "styled-components";
import {useEffect, useState} from "react";
import AnimeList from "./components/AnimeList";
import type { Anime } from "./interfaces/types";


const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Anime[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://api.jikan.moe/v4/anime");
            const {data : animeList} : {data: Anime[]} = await rawData.json();
            setData(animeList);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, []);

    return(
        <ParentDiv>
            <AnimeList data={data}/>
        </ParentDiv>
    )
}


// CUSTOM HOOK EX: TOGGLE COLOR
// export default function App() {
//   const [color, setColor] = useState(true);

//   function changeColor() {
//     setColor(!color);
//   }

//   return (
//     <>
//       <div
//         style={{
//           height: "10vh",
//           width: "20vw",
//           backgroundColor: color ? "green" : "magenta"
//         }}
//       >
//       </div>
//       <button onClick={changeColor}>Toggle Color</button>
//     </>
//   );
// }
