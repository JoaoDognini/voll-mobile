import React from 'react'
import { Titulo } from './Titulo'
import { Avatar, Text, VStack } from 'native-base'
import Botao from './Botao'

interface CardConsultaProps {
	nome: string;
	foto: string;
	especialidade: string;
	data?: string;
	foiAtendido?: boolean;
	foiAgendado?: boolean;
}

export function CardConsulta({ nome, foto, especialidade, data, foiAtendido, foiAgendado }: CardConsultaProps) {
	return (
		<VStack w='100%' p={5} borderRadius='lg' shadow='2' bg={foiAtendido ? 'blue.100' : 'white'} mb={5}>
			<VStack flexDir='row'>
				<Avatar
					source={{ uri: foto }}
					size='lg'
				/>
				<VStack pl={5}>
					<Text fontSize='md' fontWeight='bold'>{nome}</Text>
					<Text>{especialidade}</Text>
					<Text>{data}</Text>
				</VStack>
			</VStack>
			<Botao mt={3}>{foiAgendado ? 'Cancelar' : 'Agendar consulta'}</Botao>
		</VStack>
	)
}
