

import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png';
import { Box, Image, Link, Text, VStack } from "native-base";
import { Titulo } from './components/Titulo';
import Botao from './components/Botao';
import { InputTexto } from './components/InputTexto';

export default function Login() {
	return (
		<VStack flex={1} alignItems="center" p={5} justifyContent='center'>
			<Image source={Logo} alt='Logo Voll' />
			<Titulo>
				Faça login em sua conta
			</Titulo>

			<Box>
				<InputTexto
					label='Email'
					placeholder='Escreva seu endereço de email'
				/>

				<InputTexto
					label='Senha'
					placeholder='Escreva sua senha'
					secureTextEntry={true}
				/>
			</Box>
			<Botao>Entrar</Botao>

			<Link href='https://alura.com.br' mt={2}>Esqueceu sua senha?</Link>

			<Box w='100%' flexDirection='row' justifyContent='center' mt={8}>
				<Text>Ainda não tem cadastro? </Text>
				<TouchableOpacity>
					<Text color='blue.500'>
						Cadastre-se
					</Text>
				</TouchableOpacity>
			</Box>

		</VStack>
	);
}
