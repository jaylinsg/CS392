// src/components/AnimeList.tsx

import styled from "styled-components";
import type { Anime } from "../interfaces/types";

// using grid to make it one big block
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  padding: 8px;
  background: #028090;
`;

const Card = styled.div<{ highlight: boolean }>`
  background: ${(p) => (p.highlight ? "#76EEC6" : "#02111B")}; /* bright or dark */
  color: ${(p) => (p.highlight ? "#02111B" : "#76EEC6")};
  border: 2px solid #03435F; 
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  & h2 {
    margin: 12px;
    font-size: 1.2em;
    text-align: center;
  }

  & img {
    width: 80%;
    height: auto;
    object-fit: cover;
    margin: auto;
  }

  & p {
    flex-grow: 1;
    padding: 0 12px 12px;
    font-size: 0.9em;
    line-height: 1.4;
  }
`;

export default function AnimeList({ data }: { data: Anime[] }) {
  return (
    <Grid>
      {data.map((anime) => {
        const isHighScore = anime.score >= 7;
        return (
          <Card key={anime.mal_id} highlight={isHighScore}>
            <h2>{anime.title}</h2>
            <img src={anime.images.jpg.image_url} alt={anime.title} />
            <p>{anime.synopsis.slice(0, 100)}…</p>
          </Card>
        );
      })}
    </Grid>
  );
}
