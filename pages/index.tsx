/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { useState } from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// This is just a basic landing page for the domain while the main site is under development

const Home: NextPage = () => {

	return (
		<Container
			sx={{
				
			}}
		>
			<img
			src="/imagenor-high-resolution-color-logo.png"
			alt="Imagenor Logo"
			width="100%"
			height="30%"
			object-fit="none"
			>
			</img>
			<Divider light 
				sx={{
					marginTop: '2rem',
					marginBottom: '4rem',
				}}
			/>
			<Typography component='h1' color='secondary' align='center'>
				<p>Imagenor is an image contest where contestants use the OpenAI DALL-E2 model to generate images for a given daily theme.</p>
				Each day a user can submit ONE prompt for Dall-E and will receive four images in return. 
				<p>Once the user selects an image, it will be added to the gallery for that day, and other users can vote on which image is the best...</p>
			</Typography>
			<Typography component='h1' color='secondary' align='center' fontWeight='bold'>
				<p>Imagenor is currently under development. Please check back soon for updates!</p>
			</Typography>
		</Container>
  );
};

export default Home;

