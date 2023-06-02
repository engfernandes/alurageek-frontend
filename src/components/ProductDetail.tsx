import { Flex, Image, Text } from '@chakra-ui/react';
import theme from '@/Theme';

function ProductDetail() {
	return (
		<Flex
			alignItems={{ base: 'flex-start', xl: 'center' }}
			flexDirection={{ base: 'column', md: 'row' }}
			gap='16px'
			h={{ md: '221px', xl: '403px' }}
			justifyContent={{ base: 'flex-start', xl: 'center' }}
			margin={{ base: '32px', xl: '64px' }}
		>
			<Image
				src='/img/star-wars/star-wars1.svg'
				alt=''
				objectFit='cover'
				h={{ base: '192px', md: '157px', xl: '403px' }}
				marginTop='16px'
				w={{ base: '100%', md: '254px', xl: '560px' }}
			/>
			<Flex
				flexDirection='column'
				gap='8px'
				h={{ md: '157px', xl: '210px' }}
				w={{ base: '328px', md: '434px', xl: '560px' }}
			>
				<Text fontSize={{ base: '22px', xl: '52px' }} fontWeight={700}>
					Produto XYZ
				</Text>
				<Text color={theme.colors.black} fontSize='16px' fontWeight={700}>
					R$ 60,00
				</Text>
				<Text
					color={theme.colors.black}
					h={{ md: '96px' }}
					fontSize={{ base: '14px', xl: '16px' }}
					wordBreak='break-word'
				>
					Voluptas voluptatum quibusdam similique, class debitis alias maecenas
					eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima
					malesuada habitasse distinctio sequi aliqua malesuada. Quisque
					deleniti proin expedita, aliquid litora. Iste recusandae? Commodo,
					quia ridiculus doloribus vero dictum?
				</Text>
			</Flex>
		</Flex>
	);
}

export default ProductDetail;
