import { useState } from 'react';
import { IconButton, Paper } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

const SearchBar = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  return (
    <>
      <Paper
        component='form'
        onSubmit={() => {}}
        sx={{
          display: 'flex',
          alignItems: 'center',
          boxShadow: 'none',
          outline: '1.8px solid #dbdbdb',
          '@media(max-width: 400px)': {
            visibility: isSearchBarOpen ? 'visible' : 'hidden',
            position: 'absolute',
            right: '10px',
            bottom: 'calc(-100% + 4px)',
            zIndex: 8,
          },
        }}
      >
        <input type='text' className='search-input' placeholder='Search...' />
        <IconButton type='submit' sx={{ color: 'red' }}>
          <SearchOutlined />
        </IconButton>
      </Paper>
      <IconButton
        onClick={() => setIsSearchBarOpen(!isSearchBarOpen)}
        type='button'
        sx={{
          '@media(min-width: 401px)': {
            display: 'none',
          },
        }}
      >
        <SearchOutlined />
      </IconButton>
    </>
  );
};

export default SearchBar;
