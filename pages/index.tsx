import * as React from 'react';
import { useState } from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import ImageChooser from '../components/ImageChooser';
import Navbar from '../components/NavBar';



const Home: NextPage = () => {
	// setting up state
  const [loading, setLoading] = useState<boolean>(false);
	const [promptInput, setPrompt] = useState<string>('');
	const [result, setResult] = useState();

	// form submission handler
	async function onSubmit(e : React.FormEvent<HTMLFormElement>) {
		// start loading animation
		setLoading(true);
		e.preventDefault();

		// send the prompt to our backend
		const response = await fetch('api/dalle', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ prompt: promptInput })
		});
		const data = await response.json();
		setResult(data.image_url);
		setLoading(false);
		setPrompt('');
		console.log(data.image_url)
	}


	return (
		<>
			<Navbar />
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
					<Typography component='h1' color='primary' fontSize={'xs'}>
						<br />{`Today's Contest Theme:`}
					</Typography>
					<Typography component='h1' color='primary' fontWeight={'bold'} fontStyle={'italic'} fontSize={'2rem'}>
						<>{`Under Construction`}</>
					</Typography>
				</Box>
				<Box component="form" onSubmit={onSubmit}
					sx={{display: 'grid', gridTemplateColumns: '6fr 1fr', gap: 3, alignItems: 'center'
					}}>
					<TextField label="Enter your Dall-E prompt" value={promptInput} variant={'filled'} onChange={(e) => setPrompt(e.target.value)} />
					<LoadingButton loading={loading} type="submit" size="large" variant="contained"> Submit </LoadingButton>
				</Box>
			</Container>
			<ImageChooser props={result}/>
		</>
  );
};

export default Home;

