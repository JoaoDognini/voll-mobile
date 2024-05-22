import { Box } from 'native-base'
import React from 'react'
import { InputTexto } from './InputTexto'
import Botao from './Botao'

export default function BoxPesquisa() {
	return (
		<Box w='100%' borderRadius='lg' mt={10} shadow='1' p={3} borderRightRadius='md'>
			<InputTexto placeholder="Digite sua especialidade" />
			<InputTexto placeholder="Digite sua localização" />
			<Botao mt={3} mb={3}>Buscar</Botao>
		</Box>
	)
}
