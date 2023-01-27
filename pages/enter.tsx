import { useContext } from "react";
import { UserContext } from "../lib/context";
import SignUp from "../components/SignUp";

export default function Enter(props: any) {
	const { user, username } = useContext(UserContext);
	return (
		<>
			<SignUp />
		</>
	);
}