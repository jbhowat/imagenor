import * as React from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Item from '@mui/material/Grid'
import Image from 'next/image'
import { ImageList, ImageListItem } from '@mui/material'
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
				<ImageList cols={2}>
					{urls.map((item: { url: string }) => (
						<ImageListItem key={item.url} >
							<Image
								src={`${item.url}`} alt={'AI Generated Image'}/>
						</ImageListItem>
					))}
				</ImageList>
	)
}