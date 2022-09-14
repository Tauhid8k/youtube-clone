import { IconButton, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Paper
      component='form'
      onSubmit={() => {}}
      sx={{
        display: 'flex',
        alignItems: 'center',
        boxShadow: 'none',
        border: '1.8px solid #dbdbdb',
      }}
    >
      <input type='text' className='search-input' placeholder='Search...' />
      <IconButton type='submit' sx={{ color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
