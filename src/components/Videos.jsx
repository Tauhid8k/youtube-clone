import { Grid } from '@mui/material';
import VideoCard from './VideoCard';

const Videos = ({ videos }) => {
  return (
    <Grid container spacing={2}>
      {videos.map((item) => (
        <Grid item sm={6} md={4} lg={3} key={item.id.videoId}>
          {item.id.videoId && <VideoCard video={item} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;
