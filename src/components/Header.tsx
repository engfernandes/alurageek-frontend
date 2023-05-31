import { Flex, useMediaQuery } from '@chakra-ui/react';
import Logo from './Logo';
import Button from './Button';
import SearchBar from './SearchBar';
import theme from '@/Theme';
import { useRouter } from 'next/router';

function Header() {
	const [isMobile] = useMediaQuery('(max-width: 767px)');

	const router = useRouter();

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
						<Button
							text='Login'
							isPrimary={false}
							variant='outline'
							handleClick={() => router.push('/login')}
						/>
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
						<Button
							text='Login'
							isPrimary={false}
							variant='outline'
							handleClick={() => router.push('/login')}
						/>
					</Flex>
				</Flex>
			)}
		</>
	);
}

export default Header;
