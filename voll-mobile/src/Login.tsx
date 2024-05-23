

import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png';
import { Box, Image, Link, Text, VStack, useToast } from "native-base";
import { Titulo } from './components/Titulo';
import Botao from './components/Botao';
import { InputTexto } from './components/InputTexto';
import { useEffect, useState } from 'react';
import { login } from './services/AutenticacaoServico';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';

export default function Login({ navigation }: any) {
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [carregando, setCarregando] = useState(true);
	const toast = useToast();

	useEffect(() => {
		async function verificaLogin() {
			const token = await AsyncStorage.getItem('token');
			if (token) {
				navigation.replace('Tabs')
			};
			setCarregando(false);
		}

		verificaLogin();
	}, [])

	async function fazerLogin() {
		const resultado = await login(email, senha)
		if (resultado) {
			const { token } = resultado
			const tokenDecodificado = jwtDecode(token) as any
			const pacienteId = tokenDecodificado.id

			AsyncStorage.setItem('token', token)
			AsyncStorage.setItem('pacienteId', pacienteId)

			navigation.replace('Tabs')
		} else {
			toast.show({ title: 'Erro no login', description: 'Email ou senha estão errados', backgroundColor: 'red.500' })
		}
	}

	if (carregando) {
		return null;
	}

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
					value={email}
					onChangeText={setEmail}
				/>

				<InputTexto
					label='Senha'
					placeholder='Escreva sua senha'
					secureTextEntry={true}
					value={senha}
					onChangeText={setSenha}
				/>
			</Box>
			<Botao onPress={fazerLogin} >Entrar</Botao>

			<Link href='https://alura.com.br' mt={2}>Esqueceu sua senha?</Link>

			<Box w='100%' flexDirection='row' justifyContent='center' mt={8}>
				<Text>Ainda não tem cadastro? </Text>
				<TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
					<Text color='blue.500'>
						Cadastre-se
					</Text>
				</TouchableOpacity>
			</Box>

		</VStack>
	);
}
