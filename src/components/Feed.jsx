import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { sideMenuActions } from '../redux/sideMenuSlice';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';

const Feed = () => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.sideMenu);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
    dispatch(sideMenuActions.setIsMenuOpen(false));
  }, [selectedCategory, dispatch]);

  return (
    <Box pl={3} pr={2} py={2}>
      <Typography variant='h5' mb={2}>
        <span style={{ color: 'red' }}>{selectedCategory}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default Feed;
