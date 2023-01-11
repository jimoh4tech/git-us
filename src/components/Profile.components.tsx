import {
	Heading,
	Avatar,
	Box,
	Center,
	Text,
	Stack,
	Button,
	Link,
	Flex,
	Spinner,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../interfaces/users.interfaces';
import userServices from '../services/user.services';
function Profile() {
	const [user, setUser] = useState<User | null>(null);
	const { userId } = useParams();

	useEffect(() => {
		async function fetchUser() {
			const user = await userServices.getUserData(userId || '');
			setUser(user);
		}
		if (userId) fetchUser();
	}, [userId]);

	if (!user)
		return (
			<Flex minH={'80vh'} justifyContent='center' alignItems='center'>
				<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.200'
					color='blue.400'
					size='xl'
				/>
			</Flex>
		);

	return (
		<Center py={6} minH='80vh'>
			<Box
				maxW={'320px'}
				w={'full'}
				bg={'white'}
				boxShadow={'2xl'}
				rounded={'lg'}
				p={6}
				textAlign={'center'}
			>
				<Avatar
					size={'xl'}
					src={user.avatar_url}
					mb={4}
					pos={'relative'}
					_after={{
						content: '""',
						w: 4,
						h: 4,
						bg: 'green.300',
						border: '2px solid white',
						rounded: 'full',
						pos: 'absolute',
						bottom: 0,
						right: 3,
					}}
				/>
				<Heading fontSize={'2xl'} fontFamily={'body'}>
					{user.name}
				</Heading>
				<Text fontWeight={600} color={'gray.500'} mb={4}>
					@{user.login}
				</Text>
				<Text textAlign={'center'} color={'gray.700'} px={3}>
					{user.bio}
				</Text>
				<Stack direction={'row'} justify={'center'} spacing={6}>
					<Stack spacing={0} align={'center'}>
						<Text fontWeight={600}>{user.followers}</Text>
						<Text fontSize={'sm'} color={'gray.500'}>
							Followers
						</Text>
					</Stack>
					<Stack spacing={0} align={'center'}>
						<Text fontWeight={600}>{user.following}</Text>
						<Text fontSize={'sm'} color={'gray.500'}>
							Following
						</Text>
					</Stack>
					<Stack spacing={0} align={'center'}>
						<Text fontWeight={600}>{user.public_repos}</Text>
						<Text fontSize={'sm'} color={'gray.500'}>
							Repositries
						</Text>
					</Stack>
				</Stack>

				<Stack mt={8} direction={'row'} spacing={4}>
					<Button
						flex={1}
						fontSize={'sm'}
						rounded={'full'}
						_focus={{
							bg: 'gray.200',
						}}
						as={Link}
						href={`${user.html_url}?tab=repositories`}
						isExternal
					>
						Repos
					</Button>
					<Button
						flex={1}
						fontSize={'sm'}
						rounded={'full'}
						bg={'blue.400'}
						color={'white'}
						boxShadow={
							'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
						}
						_hover={{
							bg: 'blue.500',
						}}
						_focus={{
							bg: 'blue.500',
						}}
						as={Link}
						href={user.html_url}
						isExternal
					>
						Follow
					</Button>
				</Stack>
			</Box>
		</Center>
	);
}

export default Profile;
