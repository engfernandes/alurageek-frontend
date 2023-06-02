import FeaturedBanner from '@/components/FeaturedBanner';
import MiniCard from '@/components/MiniCard';
import ProductList from '@/components/ProductList';
import Layout from '@/components/layout/Layout';
import useProductStore from '@/stores/product';
import { Flex } from '@chakra-ui/react';

export default function Home() {
	const [updateImage, updateAlt, updateTitle, updatePrice, updateSlug] =
		useProductStore((state) => [
			state.updateImage,
			state.updateAlt,
			state.updateTitle,
			state.updatePrice,
			state.updateSlug,
		]);

	return (
		<Flex alignItems='center' flexDirection='column' justifyContent='center'>
			<Layout>
				<FeaturedBanner />
				<ProductList categoryTitle='Star Wars'>
					<MiniCard
						src='img/star-wars/star-wars1.svg'
						alt=''
						title='Miniatura StarWars'
						value={60}
						link={'Ver Produto'}
						handleClick={() => {
							updateImage('img/star-wars/star-wars1.svg');
							updateAlt('');
							updateTitle('Miniatura StarWars');
							updatePrice(60);
							updateSlug('miniatura-starwars-1');
						}}
					/>
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
				</ProductList>
				<ProductList categoryTitle='Consoles'>
					<MiniCard
						src='img/consoles/console1.svg'
						alt=''
						title='Controle Xbox One S'
						value={320}
						link={'Ver Produto'}
						handleClick={() => {
							updateImage('img/consoles/console1.svg');
							updateAlt('');
							updateTitle('Controle Xbox One S');
							updatePrice(320);
							updateSlug('controle-xbox-one-s');
						}}
					/>
					<MiniCard
						src='img/consoles/console2.svg'
						alt=''
						title='Playstation 5'
						value={3999}
						link={'Ver Produto'}
						handleClick={() => {
							updateImage('img/consoles/console2.svg');
							updateAlt('');
							updateTitle('Playstation 5');
							updatePrice(3999);
							updateSlug('playstation-5');
						}}
					/>
					<MiniCard
						src='img/consoles/console3.svg'
						alt=''
						title='Retrogame'
						value={50}
						link={'Ver Produto'}
						handleClick={() => {
							updateImage('img/consoles/console3.svg');
							updateAlt('');
							updateTitle('Retrogame');
							updatePrice(50);
							updateSlug('retrogame');
						}}
					/>
					<MiniCard
						src='img/consoles/console4.svg'
						alt=''
						title='Joystick - Switch'
						value={279}
						link={'Ver Produto'}
						handleClick={() => {
							updateImage('img/consoles/console4.svg');
							updateAlt('');
							updateTitle('Joystick - Switch');
							updatePrice(279);
							updateSlug('joystick-switch');
						}}
					/>
					<MiniCard
						src='img/consoles/console5.svg'
						alt=''
						title='Xbox Series X'
						value={3799}
						link={'Ver Produto'}
						display={{ base: 'none', xl: 'flex' }}
						handleClick={() => {
							updateImage('img/consoles/console5.svg');
							updateAlt('');
							updateTitle('Xbox Series X');
							updatePrice(3799);
							updateSlug('xbox-series-x');
						}}
					/>
					<MiniCard
						src='img/consoles/console6.svg'
						alt=''
						title='Nintendo'
						value={1299}
						link={'Ver Produto'}
						display={{ base: 'none', xl: 'flex' }}
						handleClick={() => {
							updateImage('img/consoles/console6.svg');
							updateAlt('');
							updateTitle('Nintendo');
							updatePrice(1299);
							updateSlug('nintendo');
						}}
					/>
				</ProductList>
				<ProductList categoryTitle='Diversos'>
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
					<MiniCard
						src='img/diversos/diverso2.svg'
						alt=''
						title='Camiseta Bege'
						value={59.99}
						link={'Ver Produto'}
						handleClick={() => {
							updateImage('img/diversos/diverso2.svg');
							updateAlt('');
							updateTitle('Camiseta Bege');
							updatePrice(59.99);
							updateSlug('camiseta-bege');
						}}
					/>
					<MiniCard
						src='img/diversos/diverso3.svg'
						alt=''
						title='Radio/Relógio Retrô'
						value={29}
						link={'Ver Produto'}
						handleClick={() => {
							updateImage('img/diversos/diverso3.svg');
							updateAlt('');
							updateTitle('Radio/Relógio Retrô');
							updatePrice(29);
							updateSlug('radio-relogio-retro');
						}}
					/>
					<MiniCard
						src='img/diversos/diverso4.svg'
						alt=''
						title='Óculos - VR'
						value={500}
						link={'Ver Produto'}
						handleClick={() => {
							updateImage('img/diversos/diverso4.svg');
							updateAlt('');
							updateTitle('Óculos - VR');
							updatePrice(500);
							updateSlug('oculos-vr');
						}}
					/>
					<MiniCard
						src='img/diversos/diverso5.svg'
						alt=''
						title='Fantasia Pikachu'
						value={160}
						link={'Ver Produto'}
						display={{ base: 'none', xl: 'flex' }}
						handleClick={() => {
							updateImage('img/diversos/diverso5.svg');
							updateAlt('');
							updateTitle('Fantasia Pikachu');
							updatePrice(160);
							updateSlug('fantasia-pikachu');
						}}
					/>
					<MiniCard
						src='img/diversos/diverso6.svg'
						alt=''
						title='Miniatura Sonic'
						value={75}
						link={'Ver Produto'}
						display={{ base: 'none', xl: 'flex' }}
						handleClick={() => {
							updateImage('img/diversos/diverso4.svg');
							updateAlt('');
							updateTitle('Miniatura Sonic');
							updatePrice(75);
							updateSlug('miniatura-sonic');
						}}
					/>
				</ProductList>
			</Layout>
		</Flex>
	);
}
