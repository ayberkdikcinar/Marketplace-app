import { Skeleton as MuiSkeleton } from '@mui/material';

type SkeletonProps = {
  height: number;
  rows: number;
  variant?: 'text' | 'rectangular' | 'circular' | 'rounded';
};

export default function Skeleton({ height, rows, variant = 'rectangular' }: SkeletonProps) {
  return (
    <>
      {Array.from({ length: rows }).map((_, index) => (
        <MuiSkeleton key={index} variant={variant} height={height} sx={{ mb: 1, bgcolor: 'grey.400' }} />
      ))}
    </>
  );
}
