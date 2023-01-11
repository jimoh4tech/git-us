import { Flex, Spinner, VStack } from '@chakra-ui/react';
import { User } from '../interfaces/users.interfaces';
import UserComponent from './User.components';
function UsersComponent({ users }: { users: User[] | null }) {
	if (!users)
		return (
			<Flex minH={'300px'} justifyContent='center' alignItems='center'>
				<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.200'
					color='teal.500'
					size='xl'
				/>
			</Flex>
		);
	return (
		<VStack spacing={3} align='stretch' maxH={'60vh'} overflow='scroll'>
			{users.map((user) => (
				<UserComponent key={user.login} {...user} />
			))}
		</VStack>
	);
}

export default UsersComponent;
