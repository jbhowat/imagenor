import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Container from '@mui/material/Container';
import { auth } from '../lib/firebase';

export default function EnterPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const createUser = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				console.log(user);
				setLoading(false);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
				setLoading(false);
			});
	};

	return (
		<Container>
			<Box
				component={'form'}
				onSubmit={createUser}
			>
				<TextField 
					id='outlined-email-input'
					label="Email"
					type="email"
					value={email} 
					onChange={(e) => setEmail(e.target.value)} 
				/>
				<TextField
						id="outlined-password-input"
						label="Password"
						type="password"
						autoComplete="current-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
				/>
				<LoadingButton loading={loading} type="submit" size="large" variant="contained"> Sign Up </LoadingButton>
			</Box>
		</Container>
	);
};