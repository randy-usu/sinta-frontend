import React from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';

const initialData = [
  { id: 1, name: 'Item 1', value: 'Value 1', description: 'This is the detailed description of Item 1.' },
  { id: 2, name: 'Item 2', value: 'Value 2', description: 'This is the detailed description of Item 2.' },
  { id: 3, name: 'Item 3', value: 'Value 3', description: 'This is the detailed description of Item 3.' },
  { id: 4, name: 'Item 4', value: 'Value 4', description: 'This is the detailed description of Item 4.' },
  { id: 5, name: 'Item 5', value: 'Value 5', description: 'This is the detailed description of Item 5.' },
  // Add more data if needed
];

const DetailPage = () => {
  const { id } = useParams();
  const item = initialData.find(item => item.id === parseInt(id));

  return (
    <Paper style={{ padding: '16px', marginTop: '16px' }}>
      {item ? (
        <>
          <Typography variant="h4">{item.name}</Typography>
          <Typography variant="subtitle1">{item.value}</Typography>
          <Typography variant="body1">{item.description}</Typography>
        </>
      ) : (
        <Typography variant="h6">Item not found</Typography>
      )}
    </Paper>
  );
};

export default DetailPage;