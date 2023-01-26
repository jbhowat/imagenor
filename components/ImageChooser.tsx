/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Item from '@mui/material/Grid'
import Image from 'next/image'
import { ImageList, ImageListItem } from '@mui/material'
import { useState } from 'react'
import Link from 'next/link'
import { Box } from '@mui/system'

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
		setSelected(e.currentTarget.id);
	}

	// handler for when the submit button is clicked
	function onSubmit(e: React.FormEvent<HTMLFormElement>) {
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
					<ImageList cols={2} gap={24}>
						{urls.map((item: { url: string }) => (
							<ImageListItem key={item.url} 
								sx={
									{justifyContent: 'center', 
									alignItems: 'center', 
									width: '90%', 
									height: '90%', 
									alignContent: 'center', 
									margin: 'auto'}
								}>
								<img
									src={`${item.url}`} alt={'AI Generated Image'}
								/>
							</ImageListItem>
						))}
					</ImageList>
	)
}