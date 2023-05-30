import { Image } from '@chakra-ui/react';

interface LogoProps {
	isFooter: boolean;
}

function Logo({ isFooter }: LogoProps) {
	return (
		<>
			{isFooter ? (
				<Image src='img/Logo.svg' alt='Logo Alura Geek' h='50px' w='176px' />
			) : (
				<Image
					src='img/Logo.svg'
					alt='Logo Alura Geek'
					h={{ base: '28px', xl: '50px' }}
					w={{ base: '100px', xl: '176px' }}
				/>
			)}
		</>
	);
}

export default Logo;
