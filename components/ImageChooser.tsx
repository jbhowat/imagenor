import * as React from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Item from '@mui/material/Grid'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

// Component used to diplay the 4 image choices from a given prompt and select one of them to be submitted
export default function ImageChooser({props}: React.PropsWithChildren<{props: any}>) {
	// setting up state
	const [selected, setSelected] = useState<string>('');
	const [submitted, setSubmitted] = useState<boolean>(false);
	const [image, setImage] = useState<string>('');
	const urls = props;

	// Placeholder function for when an image is clicked
	async function handleClick(e: React.MouseEvent, url: string){};


	// handler for when an image is clicked
	function onClick(e : React.MouseEvent<HTMLDivElement, MouseEvent>) {
		setSelected(e.currentTarget.id);
	}

	// handler for when the submit button is clicked
	function onSubmit(e : React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		setSubmitted(true);
		setImage(selected);
	}

	if (urls === undefined) return (
		<></>
	);
	if (submitted === true) return (
		<></>
	);
	return (
			<Container maxWidth='lg'
				sx={{
					marginTop: 8,
					display: 'grid',
					aliginItems: 'center',
					minHeight: '30vh',
					height: '100%',
					width: '100%',
					borderRadius: '10px',
					alignContent: 'center',
				}}>
				<Grid container spacing={4} columns={12}>
					<Grid item xs={12} sm={6}>
						<Item>
							<Image src={`${urls[0].url}`} alt='image' width='400' height='400' onClick={(e) => handleClick(e, urls[0].url)} />
						</Item>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Item>
							<Image src={`${urls[1].url}`} alt='image' width='400' height='400' onClick={(e) => handleClick(e, urls[1].url)} />
						</Item>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Item>
							<Image src={`${urls[2].url}`} alt='image' width='400' height='400' onClick={(e) => handleClick(e, urls[2].url)} />
						</Item>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Item>
							<Image src={`${urls[3].url}`} alt='image' width='400' height='400' onClick={(e) => handleClick(e, urls[3].url)} />
						</Item>
					</Grid>
				</Grid>
			</Container>
	)
}