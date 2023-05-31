import { Flex, FormControl, Link, Text } from '@chakra-ui/react';
import TextArea from './TextArea';
import NextLink from 'next/link';
import LinksLayout from '@/components/LinksLayout';
import Logo from '@/components/Logo';
import theme from '@/Theme';
import Input from './Input';
import Button from './Button';

function Footer() {
	return (
		<>
			<Flex
				alignItems='center'
				background={theme.colors.lightBlue}
				flexDirection={{ base: 'column', xl: 'row' }}
				flexWrap='wrap'
				flexShrink={1}
				gap='32px'
				justifyContent='center'
				maxH={{ base: '640px' }}
				padding={{ base: '32px' }}
				width='100%'
			>
				<Logo isFooter={true} />
				<LinksLayout>
					<Link
						as={NextLink}
						href=''
						_hover={{ color: `${theme.colors.blue}`, opacity: 0.7 }}
					>
						Quem somos nós
					</Link>
					<Link
						as={NextLink}
						href=''
						_hover={{ color: `${theme.colors.blue}`, opacity: 0.7 }}
					>
						Política de privacidade
					</Link>
					<Link
						as={NextLink}
						href=''
						_hover={{ color: `${theme.colors.blue}`, opacity: 0.7 }}
					>
						Programa de fidelidade
					</Link>
					<Link
						as={NextLink}
						href=''
						_hover={{ color: `${theme.colors.blue}`, opacity: 0.7 }}
					>
						Nossas lojas
					</Link>
					<Link
						as={NextLink}
						href=''
						_hover={{ color: `${theme.colors.blue}`, opacity: 0.7 }}
					>
						Quero ser um franqueado
					</Link>
					<Link
						as={NextLink}
						href=''
						_hover={{ color: `${theme.colors.blue}`, opacity: 0.7 }}
					>
						Anuncie aqui
					</Link>
				</LinksLayout>
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
						type='text'
						value={''}
						handleChange={undefined}
					/>
					<TextArea
						placeholder='Digite sua mensage...'
						value={''}
						handleChange={undefined}
					/>
					<Button text='Enviar mensagem' variant='solid' isPrimary={false} />
				</FormControl>
			</Flex>
			<Flex
				alignItems='center'
				background={theme.colors.white}
				height='102px'
				justifyContent='center'
				position='static'
				width='100%'
			>
				<Text>Desenvolvido por Gabriel Fernandes 2023</Text>
			</Flex>
		</>
	);
}

export default Footer;
