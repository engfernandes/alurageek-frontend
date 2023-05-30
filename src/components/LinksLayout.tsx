import { Flex } from '@chakra-ui/react';

interface LinksLayoutProps {
	children: any;
}

function LinksLayout({ children }: LinksLayoutProps) {
	return (
		<Flex
			alignItems={{ base: 'center', md: 'flex-start' }}
			flexDirection='column'
			gap={{ base: '16px', md: '24px' }}
			justifyContent={{ base: 'center', md: 'flex-start' }}
		>
			{children}
		</Flex>
	);
}

export default LinksLayout;
