import theme from '@/Theme';
import MiniCard from '@/components/MiniCard';
import ProductDetail from '@/components/ProductDetail';
import ProductList from '@/components/ProductList';
import Layout from '@/components/layout/Layout';
import { Flex } from '@chakra-ui/react';

function Product() {
	return (
		<Flex alignItems='center' flexDirection='column' justifyContent='center'>
			<Layout>
				<Flex
					alignItems='center'
					background={theme.colors.lightGrey}
					display='flex'
					flexDirection='column'
					gap={{ base: '32px', md: '16px' }}
					justifyContent='center'
					width='100%'
				>
					<ProductDetail />
					<ProductList categoryTitle='Produtos similares'>
						<MiniCard
							src='img/star-wars/star-wars2.svg'
							alt=''
							title='Product XYZ'
							value={60}
							link={'Ver Produto'}
						/>
						<MiniCard
							src='img/star-wars/star-wars3.svg'
							alt=''
							title='Product XYZ'
							value={60}
							link={'Ver Produto'}
						/>
						<MiniCard
							src='img/star-wars/star-wars4.svg'
							alt=''
							title='Product XYZ'
							value={60}
							link={'Ver Produto'}
						/>
						<MiniCard
							src='img/star-wars/star-wars5.svg'
							alt=''
							title='Product XYZ'
							value={60}
							link={'Ver Produto'}
						/>
						<MiniCard
							src='img/star-wars/star-wars6.svg'
							alt=''
							title='Product XYZ'
							value={60}
							link={'Ver Produto'}
							display={{ base: 'none', xl: 'flex' }}
						/>
						<MiniCard
							src='img/diversos/diverso1.svg'
							alt=''
							title='Product XYZ'
							value={60}
							link={'Ver Produto'}
							display={{ base: 'none', xl: 'flex' }}
						/>
					</ProductList>
				</Flex>
			</Layout>
		</Flex>
	);
}

export default Product;
