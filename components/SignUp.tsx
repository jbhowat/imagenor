import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getFirestore, writeBatch } from 'firebase/firestore';
import React, { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Container from '@mui/material/Container';
import { auth } from '../lib/firebase';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SignUp(): JSX.Element | null {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const router = useRouter();
	const createUser = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				return user;
			})
			.then((user) => {
				const uid = user?.uid;
				const data = {
					username: username,
					email: email,
					avatar: null,
					dateCreated: Date.now(),
					displayName: username,
				};
				const userDoc = doc(getFirestore(), 'users', uid);
				const usernameDoc = doc(getFirestore(), 'usernames', username);

				const batch = writeBatch(getFirestore());
				batch.set(userDoc, data);
				batch.set(usernameDoc, { uid: uid });
				setLoading(false);
				router.push('/enter');
				return batch.commit().catch((error) => console.error(error));
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
				setLoading(false);
			});
	};

	return (
		<Container
			maxWidth='sm'
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: 4,
			}}
			>
			<Box
				component={'form'}
				onSubmit={createUser}
				sx={{
					display: 'grid', 
					gridTemplateColumns: '1fr', 
					gap: 2, 
					alignItems: 'center',
					maxWidth: '400px',
					borderRadius: 2,
					padding: 2,
					boxShadow: '5px 5px 5px 1px #000000',
					backgroundColor: '#73648A'
					}}
			>
				<Typography variant="h4" component="h4" 
				sx={{
					textAlign: 'center',
					fontWeight: 'bold',
					}}> 
				Sign Up 
				</Typography>
				<Typography variant="body1" component="p"
				sx={{
					textAlign: 'center',
					fontWeight: 'bold',
					}}>
				Registration takes less than 5 seconds...
				</Typography>
				<TextField 
					variant="filled"
					label="Username"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<TextField 
					variant="filled"
					label="Email"
					type="email"
					value={email} 
					onChange={(e) => setEmail(e.target.value)} 
				/>
				<TextField
						variant="filled"
						label="Password"
						type="password"
						autoComplete="current-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
				/>
				<LoadingButton loading={loading} type="submit" size="large" variant="contained"> Create Account </LoadingButton>
				<Link href="/enter">
					<Typography variant="body2" component="p"
					sx={{
						textAlign: 'center'
						}}>
						Already have an account? Sign in here.
					</Typography>
				</Link>
			</Box>
		</Container>
	);
};