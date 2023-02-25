import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function BasicGrid() {
  return (
      <Grid container spacing={2}>
       <Grid item lg={3} md={4} sm={6} xs={12}>
            <h1 style={{background:"red",textAlign:"center"}}>componet 1</h1>
       </Grid>
       <Grid item lg={3} md={4} sm={6} xs={12}>
            <h1 style={{background:"red",textAlign:"center"}}>componet 2</h1>
       </Grid>
       <Grid item lg={3} md={4} sm={6} xs={12}>
            <h1 style={{background:"red",textAlign:"center"}}>componet 3</h1>
       </Grid>
       <Grid item lg={3} md={4} sm={6} xs={12}>
            <h1 style={{background:"red",textAlign:"center"}}>componet 4</h1>
       </Grid>
      </Grid>
  );
}