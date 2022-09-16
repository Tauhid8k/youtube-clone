import { useState } from 'react';
import { Stack, IconButton, Box } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import SideMenu from './SideMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Stack
        py={1}
        px={2}
        direction='row'
        alignItems='center'
        gap='1rem'
        justifyContent='space-between'
        className='shadow'
        sx={{
          backgroundColor: 'white',
          position: 'relative',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <IconButton onClick={() => setIsMenuOpen(true)}>
            <Menu />
          </IconButton>
          <Link
            to='/'
            style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
          >
            <img src='/img/logo.png' alt='logo' height='40' />
            <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>
              CloneTube
            </span>
          </Link>
        </Box>
        <SearchBar />
      </Stack>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Box
        onClick={() => setIsMenuOpen(false)}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgb(0 0 0 / 30%)',
          visibility: isMenuOpen ? 'visible' : 'hidden',
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? 'initial' : 'none',
          transition: '0.5s',
          zIndex: 9,
        }}
      />
    </>
  );
};

export default Navbar;
