import { Flex, Text } from '@chakra-ui/react';
import Heading from './Heading';
import theme from '@/Theme';
import Button from './Button';

function FeaturedBanner() {
	return (
		<Flex
			backgroundImage='/img/banner.jpg'
			backgroundRepeat='no-repeat'
			backgroundPosition='center'
			backgroundSize='cover'
			flexDirection='column'
			h={{ base: '192px', md: '352px' }}
			justifyContent='flex-end'
			marginBottom={{ base: '16px', md: '32px', xl: '64px' }}
			width='100%'
		>
			<Flex
				flexDirection='column'
				padding={{ base: '16px', md: '32px', lg: '32px 152px' }}
				w={{ base: '328px', md: '704px', xl: '1133px' }}
			>
				<Heading color={theme.colors.white} text='Dezembro Promocional' />
				<Text
					color={theme.colors.white}
					fontSize={{ base: '14px', md: '22px' }}
					fontWeight={700}
				>
					Produtos selecionados com 33% de desconto
				</Text>
				<Button text='Ver Consoles' isPrimary={true} variant='solid' />
			</Flex>
		</Flex>
	);
}

export default FeaturedBanner;
