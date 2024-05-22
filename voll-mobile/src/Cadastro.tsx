

import Logo from './assets/Logo.png';
import { Box, Checkbox, Image, ScrollView, Text } from 'native-base';
import { Titulo } from './components/Titulo';
import Botao from './components/Botao';
import { InputTexto } from './components/InputTexto';
import { useState } from 'react';
import { secoes } from './utils/CadastroTextos';

export default function Cadastro() {
	const [numSecao, setNumSecao] = useState(0);

	const senha = (label: string) => {
		return label.toLowerCase() === 'senha' ? true : false;
	}

	function avancarSecao() {
		if (numSecao < secoes.length - 1) setNumSecao(numSecao + 1);
	}

	function voltarSecao() {
		if (numSecao > 0) setNumSecao(numSecao - 1);
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
						secureTextEntry={senha(input.label)}
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
					>{checkbox.plano}</Checkbox>
				)}
			</Box>}
			{numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor='gray.400'>Voltar</Botao>}
			<Botao onPress={() => avancarSecao()} mt={4} mb={20}>Avançar</Botao>
		</ScrollView>
	);
}
