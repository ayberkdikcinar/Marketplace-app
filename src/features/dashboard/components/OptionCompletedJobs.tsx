import { Typography, Radio, RadioGroup, FormControlLabel, Divider } from '@mui/material';
import useSearchQueryParams from '../hooks/useSearchQueryParams';

const options = [
  { label: 'Any', value: 0 },
  { label: '5+ Jobs Completed', value: 5 },
  { label: '10+ Jobs Completed', value: 10 },
  { label: '50+ Jobs Completed', value: 50 },
];

const OptionCompletedJobs = () => {
  const { minJob, criteria, term, setFilters } = useSearchQueryParams();

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setFilters({ minJob: Number(selectedValue), criteria, term });
  };

  return (
    <RadioGroup value={minJob || 0} sx={{ paddingRight: 2 }} onChange={handleRadioChange}>
      <Typography>Jobs Completed</Typography>
      <Divider orientation='horizontal' variant='fullWidth' />
      {options.map((option) => (
        <FormControlLabel key={option.label} value={option.value} control={<Radio />} label={option.label} />
      ))}
    </RadioGroup>
  );
};

export default OptionCompletedJobs;
