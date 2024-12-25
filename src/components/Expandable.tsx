import { useState } from 'react';
import { Typography } from '@mui/material';

type ExpandableCardProps = {
  children?: React.ReactNode;
  label: string;
  isExpandedDefault?: boolean;
};
export default function Expandable({ label, isExpandedDefault = false, children }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(isExpandedDefault);

  return (
    <div className='mb-2 border rounded'>
      <div className='flex p-2 items-center justify-between'>
        <Typography
          onClick={() => setIsExpanded(!isExpanded)}
          variant='body1'
          color='primary'
          sx={{ cursor: 'pointer' }}
        >
          {isExpanded ? 'Hide ' + label : 'Show ' + label}
        </Typography>
      </div>
      {isExpanded && <div className='p-2 border-t'>{children}</div>}
    </div>
  );
}
