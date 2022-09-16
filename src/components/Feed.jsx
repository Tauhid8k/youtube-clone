import { Box, Typography } from '@mui/material';
import Videos from './Videos';

const Feed = () => {
  return (
    <Box px={3} py={2}>
      <Typography variant='h5'>
        <span style={{ color: 'red' }}>New</span> Videos
      </Typography>
      <Videos />
    </Box>
  );
};

export default Feed;
