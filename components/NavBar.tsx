/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../lib/context";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { AlignVerticalCenter } from "@mui/icons-material";

export default function Navbar(): JSX.Element {
	
	const { user, username } = useContext(UserContext);
	
	const router = useRouter();

	const signOutHandler = () => {
		signOut(auth);
		router.reload;
	}
	return (
		<Container
		sx={
			{
				padding: '10px',
			}
		}>
				<Link passHref={true} href="/">
						<Button>
							<img src="/imagenor-bot-tp.png" alt="Home" height='50px' />
						</Button>
				</Link>
				<Link passHref={true} href="/enter">
						<Button
							sx={
								{
									float: 'right',
									margin: '10px'
								}
							}
						>
							Log in
							</Button>
				</Link>
  	</Container>
	);
}