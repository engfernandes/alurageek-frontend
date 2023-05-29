import { extendTheme } from '@chakra-ui/react';
import '@fontsource/raleway';

const theme = extendTheme({
	colors: {
		blue: '#2A7AE4',
		lightBlue: '#EAF2FD',
		white: '#FFFFFF',
		black: '#464646',
		lightGrey: '#F5F5F5',
	},
	fonts: {
		body: 'Raleway, sans-serif',
		heading: 'Raleway, sans-serif',
	},
});

export default theme;
