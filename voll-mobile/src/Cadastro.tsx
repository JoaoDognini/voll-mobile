

import Logo from './assets/Logo.png';
import { Box, Checkbox, Image, ScrollView, Text, useToast } from 'native-base';
import { Titulo } from './components/Titulo';
import Botao from './components/Botao';
import { InputTexto } from './components/InputTexto';
import { useState } from 'react';
import { secoes } from './utils/CadastroTextos';
import { cadastrarPaciente } from './services/PacienteServico';

export default function Cadastro({ navigation }: any) {
	const [numSecao, setNumSecao] = useState(0);
	const [dados, setDados] = useState({} as any);
	const [planos, setPlanos] = useState([] as number[]);
	const toast = useToast();

	function avancarSecao() {
		numSecao < secoes.length - 1 ? setNumSecao(numSecao + 1) : cadastrar()
	};

	function voltarSecao() {
		if (numSecao > 0) setNumSecao(numSecao - 1);
	}

	function atualizarDados(id: string, valor: string) {
		setDados({ ...dados, [id]: valor })
	}

	async function cadastrar() {
		const resultado = await cadastrarPaciente({
			cpf: dados.cpf,
			nome: dados.nome,
			email: dados.email,
			endereco: {
				cep: dados.cep,
				rua: dados.rua,
				numero: dados.numero,
				estado: dados.estado,
				complemento: dados.complemento
			},
			senha: dados.senha,
			telefone: dados.telefone,
			possuiPlanoSaude: planos.length > 0,
			planosSaude: planos,
			imagem: dados.imagem
		})

		if (resultado) {
			toast.show({
				title: 'Cadastro realizado com sucesso',
				description: 'Você já pode fazer login',
				backgroundColor: 'green.500',
			})
			navigation.replace('Login');
		}
		else {
			toast.show({
				title: 'Erro ao cadastrar',
				description: 'Verifique os dados e tente novamente',
				backgroundColor: 'red.500',
			})
		}
	}

	return (
		<ScrollView flex={1} p={5}>
			<Image source={Logo} alt='Logo Voll' alignSelf='center' />
			<Titulo>
				{secoes[numSecao].titulo}
			</Titulo>

			<Box>
				{secoes[numSecao].entrada?.map(input =>
					<InputTexto
						placeholder={input.placeholder}
						label={input.label}
						key={input.id}
						secureTextEntry={input.secureTextEntry}
						value={dados[input.name]}
						onChangeText={(valor) => atualizarDados(input.name, valor)}
					/>
				)}
			</Box>
			{secoes[numSecao].checkbox.length > 0 && <Box>
				<Text
					color='blue.800'
					fontWeight='bold'
					fontSize='md'
					mt={2} mb={4}
				>
					Selecione o plano:
				</Text>
				{secoes[numSecao].checkbox?.map(checkbox =>
					<Checkbox
						key={checkbox.id}
						value={checkbox.plano}
						isChecked={planos.includes(checkbox.id)}
						onChange={() => {
							setPlanos((planosAnteriores) => {
								console.log(checkbox.id, checkbox.plano)
								if (planosAnteriores.includes(checkbox.id)) {
									return planosAnteriores.filter((id) => id !== checkbox.id)
								}
								return [...planosAnteriores, checkbox.id]
							})
						}}
					>
						{checkbox.plano}
					</Checkbox>
				)}
			</Box>}
			{numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor='gray.400'>Voltar</Botao>}
			<Botao onPress={() => avancarSecao()} mt={4} mb={20}>{numSecao !== 2 ? 'Avançar' : 'Finalizar'}</Botao>
		</ScrollView>
	);
}
