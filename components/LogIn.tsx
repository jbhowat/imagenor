import { signInWithEmailAndPassword} from 'firebase/auth';
import { doc, getFirestore, writeBatch } from 'firebase/firestore';
import React, { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Container from '@mui/material/Container';
import { auth } from '../lib/firebase';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LogIn(): JSX.Element | null {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const router = useRouter();
	const loginUser = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				if (user.displayName) {
					setUsername(user.displayName)
				}
				setLoading(false);
				router.push('/')
				return user;
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
				onSubmit={loginUser}
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
					Log In
				</Typography>
				<Typography variant="body1" component="p"
				sx={{
					textAlign: 'center',
					fontWeight: 'bold',
					}}>
				Welcome back to Imagenor!
				</Typography>
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
				<LoadingButton loading={loading} type="submit" size="large" variant="contained"> Verify </LoadingButton>
				<Link href="/signup">
					<Typography variant="body2" component="p"
					sx={{
						textAlign: 'center'
						}}>
					Don&apos;t have an account? Sign up here!
					</Typography>
				</Link>
			</Box>
		</Container>
	);
};