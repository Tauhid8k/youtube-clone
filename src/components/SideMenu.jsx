import { Box, IconButton, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { categories } from '../utils/constants';
import { v4 as uuidV4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { sideMenuActions } from '../redux/sideMenuSlice';

const SideMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.sideMenu);

  return (
    <Box
      className='sidebar'
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
        zIndex: 10,
        overflowY: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          mb: 1,
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
          <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>
            CloneTube
          </span>
        </Link>
      </Box>
      <Stack className='category-scrollbar'>
        {categories.map((category) => (
          <button
            onClick={() =>
              dispatch(sideMenuActions.setSelectedCategory(category.name))
            }
            className={`category-btn ${
              category.name === selectedCategory && 'active-category'
            }`}
            key={uuidV4()}
          >
            <span style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
              {category.icon}
            </span>
            <span>{category.name}</span>
          </button>
        ))}
      </Stack>
    </Box>
  );
};

export default SideMenu;
