/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import Container from '@mui/material/Container'
import { ImageList, ImageListItem, Typography, useMediaQuery } from '@mui/material'
import { useState } from 'react'


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
	function onClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		setSelected(e.currentTarget.getAttribute('src')!);
		console.log(selected)
	}

	// handler for when the submit button is clicked
	function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		setSubmitted(true);
		setImage(selected);
	}

	// checking to see if the screen size is small - if it is we want the 4 images in one column, otherwise we want them in two
	const screenSizeCheck = useMediaQuery('(min-width:600px)');

	if (urls === undefined) return (
		<></>
	);
	if (submitted === true) return (
		<></>
	);
	return (
		<>
			<Container
			sx={
				{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '20px',
				}
			}>
				<Typography component='h1' color='primary' fontSize={'xs'}>
				Choose an image below to submit to the contest:
				</Typography>
			</Container>
				<Container
					sx={
						{
							display: 'flex',
							justifyContent: 'center',
						}
					}
				>
					<ImageList cols={ screenSizeCheck ? 2 : 1 } gap={screenSizeCheck ? 10 : 20}
					>
						{urls.map((item: { url: string }) => (
							<ImageListItem key={item.url}
								sx={
									{
										justifyContent: 'center', 
										alignItems: 'center', 
										width: '80%', 
										height: '80%', 
										alignContent: 'center', 
										margin: '10px',
										boxShadow: '5px 5px 5px 1px #000000',
									}
								}>
								<img
									src={`${item.url}`} alt={'AI Generated Image'}
									onClick={onClick}
								/>
							</ImageListItem>
						))}
					</ImageList>
				</Container>
			</>
	)
}