import { Flex } from '@chakra-ui/react';
import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
	children: any;
}

function Layout({ children }: LayoutProps) {
	return (
		<Flex
			alignItems='center'
			flexDirection='column'
			justifyContent='center'
			width='100%'
		>
			<Header />
			{children}
			<Footer />
		</Flex>
	);
}

export default Layout;
