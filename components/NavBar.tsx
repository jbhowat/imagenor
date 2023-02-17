/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { Container } from "@mui/material";
import { Button } from "@mui/material";


export default function Navbar(): JSX.Element {
	
	const { user, username } = useContext(UserContext);
	console.log('user', user);
	console.log('username', username);
	
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
						<Button
							sx={{
								borderRadius: '50%',
							}}
						>
							<img src="/imagenor-bot-tp.png" alt="Home" height='50px' />
						</Button>
				</Link>
				{/* if user is signed in, show sign out button and profile button*/}
				{username && (
					<>
						<Link passHref={true} href="/">
							<Button
								sx={
									{
										float: 'right',
										margin: '10px'
									}
								}
								onClick={signOutHandler}
							>
								Sign out
							</Button>
						</Link>
						<Link passHref={true} href={`/${username}`}>
							<Button
								sx={
									{
										float: 'right',
										margin: '10px'
									}
								}
							>
								{username}
							</Button>
						</Link>
					</>
				)}
				{/* if user is not signed in, show log in in button */}
				{!username && (
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
				)}
  	</Container>
	);
}