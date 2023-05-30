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
						src='img/unsplash_6FDXGY9J6y4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/unsplash_6FDXGY9J6y4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/unsplash_6FDXGY9J6y4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/unsplash_6FDXGY9J6y4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/unsplash_6FDXGY9J6y4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
						display={{ base: 'none', xl: 'flex' }}
					/>
					<MiniCard
						src='img/unsplash_6FDXGY9J6y4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
						display={{ base: 'none', xl: 'flex' }}
					/>
				</ProductList>
				<ProductList categoryTitle='Star Wars'>
					<MiniCard
						src='img/unsplash_6FDXGY9J6y4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/unsplash_6FDXGY9J6y4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/unsplash_6FDXGY9J6y4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/unsplash_6FDXGY9J6y4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/unsplash_6FDXGY9J6y4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
						display={{ base: 'none', xl: 'flex' }}
					/>
					<MiniCard
						src='img/unsplash_6FDXGY9J6y4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
						display={{ base: 'none', xl: 'flex' }}
					/>
				</ProductList>
				<ProductList categoryTitle='Star Wars'>
					<MiniCard
						src='img/unsplash_6FDXGY9J6y4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/unsplash_6FDXGY9J6y4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/unsplash_6FDXGY9J6y4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/unsplash_6FDXGY9J6y4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
					/>
					<MiniCard
						src='img/unsplash_6FDXGY9J6y4.svg'
						alt=''
						title='Product XYZ'
						value={60}
						link={'Ver Produto'}
						display={{ base: 'none', xl: 'flex' }}
					/>
					<MiniCard
						src='img/unsplash_6FDXGY9J6y4.svg'
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
