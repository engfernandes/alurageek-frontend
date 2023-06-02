import { Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface LogoProps {
	isFooter: boolean;
}

function Logo({ isFooter }: LogoProps) {
	const router = useRouter();

	return (
		<>
			{isFooter ? (
				<Image
					src='img/Logo.svg'
					alt='Logo Alura Geek'
					h='50px'
					w='176px'
					onClick={() => router.push('/')}
					_hover={{
						cursor: 'pointer',
					}}
				/>
			) : (
				<Image
					src='img/Logo.svg'
					alt='Logo Alura Geek'
					h={{ base: '28px', xl: '50px' }}
					w={{ base: '100px', xl: '176px' }}
					onClick={() => router.push('/')}
					_hover={{
						cursor: 'pointer',
					}}
				/>
			)}
		</>
	);
}

export default Logo;
