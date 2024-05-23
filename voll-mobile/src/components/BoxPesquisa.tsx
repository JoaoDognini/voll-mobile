import { Box } from 'native-base'
import React from 'react'
import { InputTexto } from './InputTexto'
import Botao from './Botao'

interface BoxPesquisaProps {
	especialidade?: string;
	setEspecialidade?: React.Dispatch<React.SetStateAction<string>>;
	estado?: string;
	setEstado?: React.Dispatch<React.SetStateAction<string>>;
	buscar?: () => void;
}

export default function BoxPesquisa({ especialidade, setEspecialidade, estado, setEstado, buscar }: BoxPesquisaProps) {
	return (
		<Box w='100%' borderRadius='lg' mt={10} shadow='1' p={3} borderRightRadius='md'>
			<InputTexto
				placeholder="Digite sua especialidade"
				onChangeText={setEspecialidade}
				value={especialidade} />
			<InputTexto
				placeholder="Digite sua localização"
				onChangeText={setEstado}
				value={estado} />
			<Botao mt={3} mb={3} onPress={buscar}>Buscar</Botao>
		</Box>
	)
}
