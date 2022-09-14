import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack
      py={1}
      px={2}
      direction='row'
      alignItems='center'
      gap='10px'
      justifyContent='space-between'
      className='shadow'
      sx={{ backgroundColor: 'white' }}
    >
      <Link to='/'>
        <img src='/img/logo.png' alt='logo' height='40' />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
