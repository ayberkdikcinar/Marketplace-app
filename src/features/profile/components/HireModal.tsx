import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

type HireModalProps = {
  open: boolean;
  onClose: () => void;
  userName: string;
};

export default function HireModal({ open, onClose, userName }: HireModalProps) {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    budget: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant='h6' mb={2} color='text.primary'>
          Hire {userName}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label='Project Name'
            name='projectName'
            value={formData.projectName}
            onChange={handleChange}
            margin='normal'
          />
          <TextField
            fullWidth
            label='Description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            margin='normal'
            multiline
            rows={4}
          />
          <TextField
            fullWidth
            label='Budget ($)'
            name='budget'
            value={formData.budget}
            onChange={handleChange}
            margin='normal'
            type='number'
          />
          <Box mt={2} display='flex' justifyContent='flex-end'>
            <Button onClick={onClose} sx={{ mr: 2 }}>
              Cancel
            </Button>
            <Button type='submit' variant='contained' color='primary'>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}
