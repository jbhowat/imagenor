import * as React from 'react';
import { useState } from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';


const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
	const [promptInput, setPrompt] = useState<string>('');

	const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(promptInput);
		setPrompt('');
	}
	return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          my: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' color='primary'>
          Material UI v5 with Next.js in TypeScript
        </Typography>
        <Typography component='h2' color='secondary'>
          Boilerplate for building faster.
        </Typography>
      </Box>
			<Box component="form" onSubmit={onSubmit}>
				<TextField label="Enter your Dall-E prompt:" value={promptInput} onChange={(e) => setPrompt(e.target.value)} />
				<LoadingButton loading={loading} type="submit"> Submit </LoadingButton>
			</Box>
    </Container>
  );
};

export default Home;

