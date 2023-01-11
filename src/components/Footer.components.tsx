import { Box, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";

function Footer() {
  return (
		<>
			<Box py={5} bg='blackAlpha.200' maxH='15vh'>
				<Flex
					align={'center'}
					fontWeight={600}
					_before={{
						content: '""',
						borderBottom: '2px solid',
						borderColor: useColorModeValue('gray.200', 'gray.700'),
						flexGrow: 1,
						mr: 8,
					}}
					_after={{
						content: '""',
						borderBottom: '2px solid',
						borderColor: useColorModeValue('gray.200', 'gray.700'),
						flexGrow: 1,
						ml: 8,
					}}
				>
					GitUs
				</Flex>
				<Text pt={3} fontSize={'sm'} textAlign={'center'}>
					© Developed for blog post by{' '}
					<Link fontWeight={600} href='' isExternal>
						Abu Abdillah
					</Link>
				</Text>
			</Box>
		</>
	);
}

export default Footer;