import { Text, ScrollView, Avatar, Divider, VStack } from "native-base";
import { Titulo } from "../components/Titulo";
import { useEffect, useState } from "react";
import { buscarPaciente } from "../services/PacienteServico";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Paciente } from "../interfaces/Paciente";
import Botao from "../components/Botao";

export default function Perfil({ navigation }: any) {
	const [dadosPaciente, setDadosPaciente] = useState({} as Paciente);

	useEffect(() => {
		async function dadosPaciente() {
			const pacienteId = await AsyncStorage.getItem('pacienteId')
			if (!pacienteId) return;

			const resultado = await buscarPaciente(pacienteId);
			setDadosPaciente(resultado)
		}
		dadosPaciente();
	}, [])

	function deslogar() {
		AsyncStorage.removeItem('token');
		AsyncStorage.removeItem('pacienteId');
		navigation.replace('Login')
	}

	return (
		<ScrollView flex={1}>
			<VStack flex={1} alignItems='center' p={5}>
				<Titulo color='blue.500'>Meu Perfil</Titulo>
				<Avatar source={{ uri: dadosPaciente?.imagem }} mt={5} size='xl' />

				<Titulo color='blue.500'>Informações pessoais</Titulo>
				<Titulo fontSize='lg' mb={1}>{dadosPaciente?.nome}</Titulo>
				<Text>{dadosPaciente?.email}</Text>
				<Text>{dadosPaciente?.endereco?.estado}</Text>

				<Divider mt={5} />

				<Titulo color='blue.500' mb={1}>Planos de saúde</Titulo>
				{dadosPaciente?.planosSaude?.map(plano => <Text>{plano}</Text>)}

				<Botao onPress={deslogar}>Deslogar</Botao>
			</VStack>
		</ScrollView>
	)
}