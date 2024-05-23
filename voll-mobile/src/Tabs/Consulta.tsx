import { Divider, ScrollView, Text, VStack, useToast } from "native-base";
import { CardConsulta } from "../components/CardConsulta";
import { Titulo } from "../components/Titulo";
import Botao from "../components/Botao";
import { useEffect, useState } from "react";
import { Especialista } from "../interfaces/Especialista";
import { buscarConsultasPaciente } from "../services/PacienteServico";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { cancelarConsulta } from "../services/ConsultaServico";
import { useIsFocused } from "@react-navigation/native";

interface Consulta {
	id: string;
	data: string;
	especialista: Especialista
}

export default function Consulta() {
	const [consultasProximas, setConsultasProximas] = useState<Consulta[]>([]);
	const [consultasPassadas, setConsultasPassadas] = useState<Consulta[]>([]);
	const [recarregar, setRecarregar] = useState(false);
	const isFocused = useIsFocused();
	const toast = useToast();

	useEffect(() => {
		async function buscaConsultas() {
			const pacienteId = await AsyncStorage.getItem('pacienteId');

			if (!pacienteId) return;

			const todasConsultas: Consulta[] = await buscarConsultasPaciente(pacienteId)
			const agora = new Date();

			const proximas = todasConsultas.filter(consulta =>
				new Date(consulta.data) > agora
			)
			const passadas = todasConsultas.filter(consulta =>
				new Date(consulta.data) < agora
			)

			setConsultasProximas(proximas);
			setConsultasPassadas(passadas);
		}
		buscaConsultas();
	}, [recarregar, isFocused])

	async function cancelar(id: string) {
		const resultado = await cancelarConsulta(id)

		if (resultado) {
			setRecarregar(!recarregar);
			toast.show({ title: 'Consulta cancelada com sucesso', backgroundColor: 'green.500' })
		} else {
			toast.show({ title: 'Erro ao cancelar consulta', backgroundColor: 'red.500' })
		}

	}

	return (
		<ScrollView>
			<VStack p={5}>
				<Titulo color='blue.500'>Minhas consultas</Titulo>
				<Botao>Agendar outra consulta</Botao>
				<Titulo color='blue.500' fontSize='lg' alignSelf='flex-start' mb={2}>Próximas consultas</Titulo>
				{!consultasProximas && <Text>Nenhuma consulta agendada.</Text>}
				{consultasProximas?.map(consulta =>
					<CardConsulta
						key={consulta.id}
						nome={consulta?.especialista?.nome}
						especialidade={consulta?.especialista?.especialidade}
						foto={consulta?.especialista?.imagem}
						data={consulta.data}
						foiAgendado
						onPress={() => cancelar(consulta.id)}
					/>
				)}
				<Divider mt={5} />
				{!consultasPassadas && <Titulo color='blue.500' fontSize='lg' alignSelf='flex-start' mb={2}>Consultas passadas</Titulo>}
				{consultasPassadas?.map(consulta =>
					<CardConsulta
						key={consulta.id}
						nome={consulta?.especialista?.nome}
						especialidade={consulta?.especialista?.especialidade}
						foto={consulta?.especialista?.imagem}
						data={consulta.data}
						foiAtendido
					/>
				)}
			</VStack>
		</ScrollView>
	)
}