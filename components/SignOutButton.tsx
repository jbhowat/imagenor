import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import Button from "@mui/material/Button";

export default function SignOutButton() {
	return (
		<Button
			variant="contained"
			color="secondary"
			onClick={() => auth.signOut()}
			sx={{ mt: 2 }}
		>
			Sign Out
		</Button>
	);
}