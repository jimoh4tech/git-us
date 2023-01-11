import { Stack, Image, Text, Button } from '@chakra-ui/react';
import { User } from '../interfaces/users.interfaces';
import { useNavigate } from 'react-router-dom';
function UserComponent(user: User) {
	const navigate = useNavigate();

	return (
		<Stack
			mt={6}
			rounded='md'
			direction={'row'}
			spacing={4}
			display='flex'
			boxShadow='lg'
			p={'10px'}
			bg='white'
		>
			<Image
				borderRadius={'full'}
				boxSize='80px'
				src={user.avatar_url}
				alt={user.name || user.login}
			/>
			<Stack direction={'column'} spacing={5} fontSize={'sm'}>
				<Text fontWeight={600}>{user.login}</Text>

				<Button
					variant={'outline'}
					size='xs'
					colorScheme={'blue'}
					onClick={() => navigate(`users/${user.login}`)}
				>
					View Details
				</Button>
			</Stack>
		</Stack>
	);
}

export default UserComponent;
