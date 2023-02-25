import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Buttons() {
  return (
    <>
    <h1>basic button</h1>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>

    <h1>text button</h1>
    <Stack spacing={2} direction="row">
      <Button>click</Button>
      <Button disabled>Contained</Button>
      <Button href="https://www.google.co.in/">link</Button>
    </Stack>

    <h1>Contained button</h1>
    <Stack spacing={2} direction="row">
      <Button variant='contained'>click</Button>
      <Button variant="contained" disabled>Contained</Button>
      <Button variant='contained' href="https://www.google.co.in/">link</Button>
    </Stack>

    </>
  );
}
