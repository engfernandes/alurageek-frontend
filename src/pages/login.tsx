import theme from '@/Theme';
import Button from '@/components/Button';
import Heading from '@/components/Heading';
import Input from '@/components/Input';
import Layout from '@/components/layout/Layout';
import { Flex, FormControl } from '@chakra-ui/react';

function Login() {
	return (
		<Flex
			alignItems='center'
			background={theme.colors.lightGrey}
			flexDirection='column'
			justifyContent='center'
		>
			<Layout>
				<Flex
					alignItems='center'
					display='flex'
					flexDirection='column'
					gap='32px'
					justifyContent='center'
					margin='92px 0'
				>
					<Heading text='Iniciar Sessão' color={theme.colors.black} />
					<FormControl
						alignItems='center'
						display='flex'
						flexDirection='column'
						gap='32px'
						justifyContent='center'
					>
						<Input
							placeholder='Digite seu e-mail'
							type='email'
							value={''}
							handleChange={undefined}
						/>
						<Input
							placeholder='Digite sua senha'
							type='password'
							value={''}
							handleChange={undefined}
						/>
						<Button
							text='Entrar'
							isPrimary={false}
							variant='solid'
							handleClick={undefined}
						/>
					</FormControl>
				</Flex>
			</Layout>
		</Flex>
	);
}

export default Login;
