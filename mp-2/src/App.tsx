// mp-2/src/App.tsx

import styled, { createGlobalStyle } from "styled-components";
import {useEffect, useState} from "react";
import AnimeList from "./components/AnimeList";
import type { Anime } from "./interfaces/types";
// import './App.css';


const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px coral solid;
    background: #03435F;
    color: #76EEC6;
`;

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        min-height: 100vh;
        background: #02111B; 
        color: #76EEC6; 
        font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    }
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
        <>
            <GlobalStyle/>
            <ParentDiv>
                <AnimeList data={data}/>
            </ParentDiv>
        </>
    );
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
