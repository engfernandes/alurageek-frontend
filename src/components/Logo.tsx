import { Image } from '@chakra-ui/react';

function Logo() {
	return (
		<Image
			src='img/Logo.svg'
			alt='Logo Alura Geek'
			h={{ base: '28', xl: '50px' }}
			w={{ base: '100px', xl: '176px' }}
		/>
	);
}

export default Logo;
