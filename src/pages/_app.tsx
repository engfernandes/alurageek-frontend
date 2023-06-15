import theme from '@/Theme';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
				/>
				<meta name='description' content='Description' />
				<meta name='keywords' content='Keywords' />
				<title>AluraGeek</title>
				<link rel='shortcut icon' href='/img/favicon.ico'></link>
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
