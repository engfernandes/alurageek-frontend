import theme from '@/Theme';
import { Button as ButtonChakra } from '@chakra-ui/react';

interface ButtonProps {
	variant?: 'solid' | 'outline' | 'link';
	isPrimary?: boolean;
	text: string;
	handleClick: any;
}

function Button({
	variant = 'solid',
	isPrimary,
	text,
	handleClick,
}: ButtonProps) {
	return (
		<ButtonChakra
			background={variant === 'solid' ? `${theme.colors.blue}` : 'transparent'}
			border={variant === 'outline' ? `1px solid ${theme.colors.blue}` : 'none'}
			borderRadius='none'
			boxShadow='none'
			color={
				variant === 'solid' ? `${theme.colors.white}` : `${theme.colors.blue}`
			}
			flexGrow={1}
			fontWeight={600}
			maxWidth={isPrimary === false ? '182px' : '130px'}
			minWidth={isPrimary === false ? '130px' : 'min-content'}
			padding='16px'
			variant={variant}
			onClick={handleClick}
		>
			{text}
		</ButtonChakra>
	);
}

export default Button;
