import theme from '@/Theme';
import { Input as InputChakra } from '@chakra-ui/react';

interface InputProps {
	placeholder: string;
	type: 'email' | 'text' | 'number' | 'password';
	value: string;
	handleChange: any;
}

function Input({ placeholder, type, value, handleChange }: InputProps) {
	return (
		<InputChakra
			background={theme.colors.white}
			borderRadius='0'
			boxShadow='none'
			color={theme.colors.black}
			focusBorderColor='transparent'
			padding='8px'
			placeholder={placeholder}
			variant='flushed'
			type={type}
			w={{ base: '328px', md: '434px', lg: '560px' }}
			value={value}
			onChange={handleChange}
		/>
	);
}

export default Input;
