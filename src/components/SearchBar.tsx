import { MdSearch } from 'react-icons/md';
import {
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
	useMediaQuery,
} from '@chakra-ui/react';
import theme from '@/Theme';

interface SearchBarProps {
	value: any;
	handleChange: any;
}

function SearchBar({ value, handleChange }: SearchBarProps) {
	const [isMobile] = useMediaQuery('(max-width: 767px)');

	return (
		<>
			{isMobile ? (
				<IconButton
					aria-label='Pesquisar'
					backgroundColor='transparent'
					boxSizing='border-box'
					icon={<MdSearch fontSize='20px' color={theme.colors.black} />}
					size='sm'
					_hover={{
						background: 'none',
						opacity: 0.7,
					}}
				/>
			) : (
				<InputGroup borderRadius='20px' w={{ base: '272px', xl: '393px' }}>
					<Input
						background={theme.colors.lightGrey}
						borderRadius='20px'
						focusBorderColor='transparent'
						type='text'
						variant='filled'
						placeholder='O que deseja encontrar?'
						value={value}
						onChange={handleChange}
						_hover={{
							background: `${theme.colors.lightGrey}`,
						}}
					/>
					<InputRightElement>
						<IconButton
							aria-label='Pesquisar'
							backgroundColor='transparent'
							boxSizing='border-box'
							icon={<MdSearch fontSize='20px' color={theme.colors.black} />}
							size='sm'
							_hover={{
								background: 'none',
								opacity: 0.7,
							}}
						/>
					</InputRightElement>
				</InputGroup>
			)}
		</>
	);
}

export default SearchBar;
