import theme from '@/Theme';
import { Textarea } from '@chakra-ui/react';

interface TextAreaProps {
	placeholder: string;
	value: string;
	handleChange: any;
}

function TextArea({ placeholder, value, handleChange }: TextAreaProps) {
	return (
		<Textarea
			background={theme.colors.white}
			height='82px'
			padding='8px'
			placeholder={placeholder}
			variant='flushed'
			w={{ base: '328px', md: '434px', lg: '560px' }}
			value={value}
			onChange={handleChange}
		/>
	);
}

export default TextArea;
