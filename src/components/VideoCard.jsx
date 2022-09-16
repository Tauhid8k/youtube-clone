import { Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { limitStr } from '../utils/constants';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(snippet);
  return (
    <Card>
      <Link to={`/video/${videoId}`}>
        <CardMedia
          component='img'
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ aspectRatio: '16/9' }}
        />
      </Link>
      <CardContent sx={{ height: 130 }}>
        <Link to={`/channel/${snippet?.channelId}`}>
          <h4 className='video-channel-name'>{snippet?.channelTitle}</h4>
        </Link>
        <Link to={`/video/${videoId}`}>
          <h2 className='video-title'>{limitStr(snippet?.title)}</h2>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
