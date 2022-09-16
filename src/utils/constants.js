import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyOutlinedIcon from '@mui/icons-material/TheaterComedyOutlined';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

// Categories & their Icons
export const categories = [
  { name: 'Recent', icon: <HomeOutlinedIcon /> },
  { name: 'Music', icon: <MusicNoteOutlinedIcon /> },
  { name: 'Education', icon: <SchoolOutlinedIcon /> },
  { name: 'Podcast', icon: <GraphicEqIcon /> },
  { name: 'Movie', icon: <OndemandVideoOutlinedIcon /> },
  { name: 'Gaming', icon: <SportsEsportsOutlinedIcon /> },
  { name: 'Live', icon: <LiveTvOutlinedIcon /> },
  { name: 'Sport', icon: <FitnessCenterIcon /> },
  { name: 'Fashion', icon: <CheckroomIcon /> },
  { name: 'Beauty', icon: <FaceRetouchingNaturalIcon /> },
  { name: 'Comedy', icon: <TheaterComedyOutlinedIcon /> },
  { name: 'Gym', icon: <FitnessCenterIcon /> },
  { name: 'Crypto', icon: <DeveloperModeIcon /> },
];

// Text String Limiter
// Limit String Length
export function limitStr(str, length = 80) {
  return str.length > length ? str.substring(0, length) + '...' : str;
}
