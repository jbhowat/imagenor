import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, getFirestore, writeBatch } from 'firebase/firestore';
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Container from '@mui/material/Container';
import { auth } from '../lib/firebase';

export default function SignUp(): JSX.Element | null {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const createUser = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				return user;
			})
			.then((user) => {
				const uid = user?.uid;
				const data = {
					username: username,
					email: email,
					photoURL: null,
					dateCreated: Date.now(),
				};
				const userDoc = doc(getFirestore(), 'users', uid);
				const batch = writeBatch(getFirestore());
				batch.set(userDoc, data);
				setLoading(false);
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
					boxShadow: 10,
					}}
			>
				<TextField 
					id='outlined-input'
					label="Username"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)} 
				/>
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