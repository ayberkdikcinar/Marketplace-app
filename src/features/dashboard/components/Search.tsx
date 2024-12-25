import { TextField, Box, MenuItem } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import useSearchQueryParams from '../hooks/useSearchQueryParams';

const searchCriterias = [
  { value: 'name', label: 'Name' },
  { value: 'city', label: 'City' },
];

export default function Search() {
  const navigate = useNavigate();
  const { term, criteria, minJob, setFilters } = useSearchQueryParams();
  const [localTerm, setLocalTerm] = useState(term || '');
  const [localCriteria, setLocalCriteria] = useState(criteria || 'name');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchPath = '/search?term=' + localTerm + '&criteria=' + localCriteria;
    if (window.location.pathname !== '/search') {
      navigate(searchPath);
      return;
    }
    setFilters({ term: localTerm, criteria: localCriteria, minJob });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Box
        sx={{
          display: 'flex',
          margin: 2,
          padding: 1,
          border: 1,
          borderColor: 'gray.200',
          borderRadius: 3,
          minWidth: 600,
        }}
      >
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />

        <TextField
          value={localTerm || ''}
          type='text'
          slotProps={{ input: { disableUnderline: true } }}
          onChange={(e) => setLocalTerm(e.target.value)}
          variant='standard'
          placeholder='Search...'
          sx={{ flexGrow: 1 }}
        />
        <Divider
          orientation='vertical'
          variant='middle'
          flexItem
          sx={{
            borderColor: 'gray.500',
            borderWidth: '1px',
            mx: 1,
          }}
        />
        <TextField
          id='outlined-select-currency'
          select
          value={localCriteria || 'name'}
          variant='standard'
          slotProps={{ input: { disableUnderline: true } }}
          onChange={(e) => setLocalCriteria(e.target.value as 'name' | 'city')}
        >
          {searchCriterias.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <input type='submit' hidden={true} />
      </Box>
    </form>
  );
}
