import React, { useEffect, useState } from 'react';
import { Container, Input, Stack, Text } from '@chakra-ui/react';
import UsersComponent from './components/Users.components';
import { User } from './interfaces/users.interfaces';
import userServices from './services/user.services';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile.components';
import Footer from './components/Footer.components';

function App() {
	const [users, setUsers] = useState<User[] | null>(null);
	const [filter, setFilter] = useState<string>('');
	const [userCount, setUserCount] = useState<number>(0);

	useEffect(() => {
		async function fetchUser() {
			const users: any = await userServices.getAllUsers(filter);
			setUsers(users.items);
			setUserCount(users.total_count);
		}
		if (filter) fetchUser();
		else setUsers(null);
	}, [filter]);

	return (
		<>
			<Container maxW={'500px'} p={'10px'} bg={'blackAlpha.100'}>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Stack spacing={3}>
									<Input
										placeholder='Search GitHub user'
										onChange={(e) => setFilter(e.target.value)}
									/>

									{users ? (
										<Text as='em' mt={'10px'} color='blue.600'>
											Found {userCount} user{userCount > 0 && 's'}
										</Text>
									) : (
										<Text as='em' mt={'10px'} minHeight='65vh'>
											No search yet
										</Text>
									)}

									{userCount > 0 && <UsersComponent users={users} />}
									<Footer />
								</Stack>
							</>
						}
					/>
					<Route
						path='users/:userId'
						element={
							<>
								<Profile />
								<Footer />
							</>
						}
					/>
				</Routes>
			</Container>
		</>
	);
}

export default App;
