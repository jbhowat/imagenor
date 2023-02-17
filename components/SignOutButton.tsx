import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function SignOutButton() {
	
	const router = useRouter();

	const signOutNow = () => {
		signOut(auth)
		.then (() => {
			console.log('signed out');
			router.push('/');
		})
		.catch((e: any) => console.error(e));
	}

	return (
		<Button
			onClick={signOutNow}
			sx={{ 
				float: 'right',
				margin: '10px'
			}}
		>
			Sign Out
		</Button>
	);
}