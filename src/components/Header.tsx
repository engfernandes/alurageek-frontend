import { Flex } from '@chakra-ui/react';
import Logo from './Logo';
import Button from './Button';
import SearchBar from './SearchBar';

function Header() {
	return (
		<Flex
			alignItems='center'
			h={{ base: '72px', xl: '115px' }}
			justifyContent='center'
			width='100%'
		>
			<Flex
				alignItems='center'
				gap='16px'
				justifyContent='space-between'
				w={{ base: '328px', md: '704px', xl: '1133px' }}
			>
				<Logo />
				<Button text='Login' isPrimary={false} variant='outline' />
				<SearchBar value={undefined} handleChange={undefined} />
			</Flex>
		</Flex>
	);
}

export default Header;
