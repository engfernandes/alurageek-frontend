import { Button, Flex, SimpleGrid, VStack } from '@chakra-ui/react';
import Heading from './Heading';
import { MdArrowRightAlt } from 'react-icons/md';
import theme from '@/Theme';

interface ProductListProps {
	categoryTitle: string;
	children: any;
}

function ProductList({ categoryTitle, children }: ProductListProps) {
	return (
		<Flex
			flexDirection='column'
			width='100%'
			alignItems='center'
			marginBottom={{ base: '32px', md: '64px' }}
		>
			<VStack gap='16px' w={{ base: '328px', md: '704px', xl: '1133px' }}>
				<Flex justifyContent='space-between' width='100%'>
					<Heading text={categoryTitle} color={theme.colors.black} />
					<Flex
						_hover={{
							opacity: 0.7,
							transition: '300ms',
						}}
					>
						<Button
							color={theme.colors.blue}
							fontSize='14px'
							rightIcon={<MdArrowRightAlt color={theme.colors.blue} />}
							variant='link'
							_hover={{
								textDecoration: 'none',
							}}
						>
							Ver mais
						</Button>
					</Flex>
				</Flex>

				<Flex flexWrap='wrap' justifyContent='space-between' width='100%'>
					{children}
				</Flex>
			</VStack>
		</Flex>
	);
}

export default ProductList;
