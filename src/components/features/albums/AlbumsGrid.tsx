import { Box, Typography, Grid } from "@mui/material";
import { rootStore } from "../../../state-management/RootStore";
import { ErrorMessage } from "../../ErrorMessage";
import LoadingSpinner from "../../LoadingSpinner";
import { AlbumCard } from "./AlbumCard";
import { observe } from "mobx";
import { observer } from "mobx-react-lite";

const AlbumsGrid = observer(() => {
  const { albumsStore } = rootStore;


  if (albumsStore.isLoading) {
    return <LoadingSpinner message="Loading albums..." />;
  }

  return (
  <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Albums
      </Typography>
      
      {albumsStore.error && <ErrorMessage error={albumsStore.error} />}
      
      <Grid container spacing={3}>
        {albumsStore.albums.map((album) => (
          <Grid key={album.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <AlbumCard album={album} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
})
export default AlbumsGrid;
