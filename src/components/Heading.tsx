import { Heading as HeadingChakra } from '@chakra-ui/react';

interface HeadingProps {
	text: string;
	color: any;
}

function Heading({ text, color }: HeadingProps) {
	return (
		<HeadingChakra
			color={color}
			fontSize={{ sm: '22px', md: '32px' }}
			fontWeight={700}
		>
			{text}
		</HeadingChakra>
	);
}

export default Heading;
