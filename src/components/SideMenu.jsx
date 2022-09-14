import { Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';

const SideMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: isMenuOpen ? 0 : '-250px',
        width: '250px',
        height: '100%',
        backgroundColor: 'white',
        py: 1,
        px: 2,
        transition: '0.4s',
        zIndex: '10',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <IconButton onClick={() => setIsMenuOpen(false)}>
          <Menu />
        </IconButton>
        <Link
          to='/'
          style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
        >
          <img src='/img/logo.png' alt='logo' height='35' />
          <span style={{ fontSize: '1.2rem' }}>CloneTube</span>
        </Link>
      </Box>
    </Box>
  );
};

export default SideMenu;
