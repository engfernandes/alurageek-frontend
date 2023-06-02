import FeaturedBanner from '@/components/FeaturedBanner';
import MiniCard from '@/components/MiniCard';
import ProductList from '@/components/ProductList';
import Layout from '@/components/layout/Layout';
import { Flex } from '@chakra-ui/react';

export default function Home() {
	return (
		<Flex alignItems='center' flexDirection='column' justifyContent='center'>
			<Layout>
				<FeaturedBanner />
				<ProductList categoryTitle='Star Wars'>
					<MiniCard
						src='img/star-wars/star-wars1.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
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
						display={{ base: 'none', xl: 'flex' }}
					/>
					<MiniCard
						src='img/star-wars/star-wars6.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
						display={{ base: 'none', xl: 'flex' }}
					/>
				</ProductList>
				<ProductList categoryTitle='Consoles'>
					<MiniCard
						src='img/consoles/console1.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/consoles/console2.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/consoles/console3.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/consoles/console4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/consoles/console5.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
						display={{ base: 'none', xl: 'flex' }}
					/>
					<MiniCard
						src='img/consoles/console6.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
						display={{ base: 'none', xl: 'flex' }}
					/>
				</ProductList>
				<ProductList categoryTitle='Diversos'>
					<MiniCard
						src='img/diversos/diverso1.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/diversos/diverso2.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/diversos/diverso3.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/diversos/diverso4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/diversos/diverso5.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
						display={{ base: 'none', xl: 'flex' }}
					/>
					<MiniCard
						src='img/diversos/diverso6.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
						display={{ base: 'none', xl: 'flex' }}
					/>
				</ProductList>
			</Layout>
		</Flex>
	);
}
