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

export default function Navbar(): JSX.Element {
	
	const { user, username } = useContext(UserContext);
	
	const router = useRouter();

	const signOutHandler = () => {
		signOut(auth);
		router.reload;
	}
	return (
		<Container>
			<Grid>
				<Link passHref={true} href="/">
						<Button> Imagenor </Button>
				</Link>
        <Button>Sign Out</Button>
				{/* <Link passHref href={`/${username}`}>
						<Image alt={user?.displayName} src={user?.photoURL} width="50" height="50" />
				</Link> */}
				<Link passHref href="/enter">
						<Button>Log in</Button>
				</Link>
			</Grid>
  	</Container>
	);
}