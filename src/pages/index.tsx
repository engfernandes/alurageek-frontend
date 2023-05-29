import theme from '@/Theme';
import FeaturedBanner from '@/components/FeaturedBanner';
import Input from '@/components/Input';
import Logo from '@/components/Logo';
import MiniCard from '@/components/MiniCard';
import ProductList from '@/components/ProductList';
import TextArea from '@/components/TextArea';
import Layout from '@/components/layout/Layout';
import { Flex, FormControl, Text } from '@chakra-ui/react';

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
				<Flex
					alignItems='center'
					background={theme.colors.lightBlue}
					flexDirection='column'
					h={{ base: '553px', md: '364px', xl: '368px' }}
					width='100%'
				>
					<Logo />
					<FormControl
						display='flex'
						flexDirection='column'
						gap='16px'
						w={{ base: '328px', md: '434px', lg: '560px' }}
					>
						<Text fontSize='16px' fontWeight={700}>
							Fale Conosco
						</Text>
						<Input
							placeholder='Nome'
							type='password'
							value={''}
							handleChange={undefined}
						/>
						<TextArea
							placeholder='Digite sua mensage...'
							value={''}
							handleChange={undefined}
						/>
					</FormControl>
				</Flex>
			</Layout>
		</Flex>
	);
}
