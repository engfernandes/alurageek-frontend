import { Flex, useMediaQuery } from '@chakra-ui/react';
import Logo from './Logo';
import Button from './Button';
import SearchBar from './SearchBar';
import theme from '@/Theme';

function Header() {
	const [isMobile] = useMediaQuery('(max-width: 767px)');

	return (
		<>
			{isMobile ? (
				<Flex
					alignItems='center'
					background={theme.colors.white}
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
						<Logo isFooter={false} />
						<Button text='Login' isPrimary={false} variant='outline' />
						<SearchBar value={undefined} handleChange={undefined} />
					</Flex>
				</Flex>
			) : (
				<Flex
					alignItems='center'
					background={theme.colors.white}
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
						<Logo isFooter={false} />
						<SearchBar value={undefined} handleChange={undefined} />
						<Button text='Login' isPrimary={false} variant='outline' />
					</Flex>
				</Flex>
			)}
		</>
	);
}

export default Header;
