import ArtCard from './ArtCard';
import { ArtObject } from '../types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function ArtList({ artObjects }: { artObjects: ArtObject[] }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={8}>
            {artObjects.map((art) => (
              <ArtCard key={art.id} art={art} />
            ))}
          </Grid>
        </Grid>
      </Box>
      
      {/* <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {artObjects.map((art) => (
          <ArtCard key={art.id} art={art} />
        ))}
      </div> */}

    </>

  );
}
