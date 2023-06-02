import theme from '@/Theme';
import MiniCard from '@/components/MiniCard';
import ProductDetail from '@/components/ProductDetail';
import ProductList from '@/components/ProductList';
import Layout from '@/components/layout/Layout';
import useProductStore from '@/stores/product';
import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';

function Product() {
	const [
		image,
		alt,
		title,
		price,
		slug,
		updateImage,
		updateAlt,
		updateTitle,
		updatePrice,
		updateSlug,
	] = useProductStore((state) => [
		state.image,
		state.alt,
		state.title,
		state.price,
		state.slug,
		state.updateImage,
		state.updateAlt,
		state.updateTitle,
		state.updatePrice,
		state.updateSlug,
	]);

	const router = useRouter();

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
							title='Miniatura Star Wars'
							value={80}
							link={'Ver Produto'}
							handleClick={() => {
								updateImage('img/star-wars/star-wars2.svg');
								updateAlt('');
								updateTitle('Miniatura Star Wars');
								updatePrice(80);
								updateSlug('miniatura-starwars-2');
							}}
						/>
						<MiniCard
							src='img/star-wars/star-wars3.svg'
							alt=''
							title='Caneca Star Wars'
							value={70}
							link={'Ver Produto'}
							handleClick={() => {
								updateImage('img/star-wars/star-wars3.svg');
								updateAlt('');
								updateTitle('Caneca Star Wars');
								updatePrice(70);
								updateSlug('caneca-starwars');
							}}
						/>
						<MiniCard
							src='img/star-wars/star-wars4.svg'
							alt=''
							title='Miniatura Darth Vader'
							value={60}
							link={'Ver Produto'}
							handleClick={() => {
								updateImage('img/star-wars/star-wars4.svg');
								updateAlt('');
								updateTitle('Miniatura Darth Vader');
								updatePrice(60);
								updateSlug('miniatura-darth-vader');
							}}
						/>
						<MiniCard
							src='img/star-wars/star-wars5.svg'
							alt=''
							title='Miniatura Mestre Yoda'
							value={75}
							link={'Ver Produto'}
							display={{ base: 'none', xl: 'flex' }}
							handleClick={() => {
								updateImage('img/star-wars/star-wars5.svg');
								updateAlt('');
								updateTitle('Miniatura Mestre Yoda');
								updatePrice(75);
								updateSlug('miniatura-mestre-yoda');
							}}
						/>
						<MiniCard
							src='img/star-wars/star-wars6.svg'
							alt=''
							title='Miniatura Yoda'
							value={80}
							link={'Ver Produto'}
							display={{ base: 'none', xl: 'flex' }}
							handleClick={() => {
								updateImage('img/star-wars/star-wars6.svg');
								updateAlt('');
								updateTitle('Miniatura Yoda');
								updatePrice(80);
								updateSlug('miniatura-yoda');
							}}
						/>
						<MiniCard
							src='img/diversos/diverso1.svg'
							alt=''
							title='Camiseta Gamepad'
							value={59.99}
							link={'Ver Produto'}
							handleClick={() => {
								updateImage('img/diversos/diverso1.svg');
								updateAlt('');
								updateTitle('Camiseta Gamepad');
								updatePrice(59.99);
								updateSlug('camiseta-gamepad');
							}}
						/>
					</ProductList>
				</Flex>
			</Layout>
		</Flex>
	);
}

export default Product;
