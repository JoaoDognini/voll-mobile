import { Box, ScrollView, Text, VStack } from "native-base";
import BoxPesquisa from "../components/BoxPesquisa";
import { useState } from "react";
import { Titulo } from "../components/Titulo";
import Botao from "../components/Botao";
import { CardConsulta } from "../components/CardConsulta";
import { buscarEspecialistaPorEstado, buscarEspecialistas } from "../services/EspecialistaServico";
import { InputTexto } from "../components/InputTexto";
import { NavigationProps } from "../@types/navigation";
import { Especialista } from "../interfaces/Especialista";

export default function Explorar({ navigation }: NavigationProps<'Explorar'>) {
	const [resultados, setResultados] = useState([]);
	const [estado, setEstado] = useState('');
	const [especialidade, setEspecialidade] = useState('');

	async function buscar() {
		var resultado;
		
		!estado || !especialidade
			? resultado = await buscarEspecialistas()
			: resultado = await buscarEspecialistaPorEstado(estado, especialidade);

		if (resultado) {
			setResultados(resultado);
		}
	}

	return (
		<ScrollView>
			<VStack p={5}>
				<BoxPesquisa
					especialidade={especialidade}
					estado={estado}
					setEspecialidade={setEspecialidade}
					setEstado={setEstado}
					buscar={() => buscar()}
				/>

				{resultados.length > 0 && (
					<>
						<Titulo color='blue.500' mb={5}>Resultado da busca</Titulo>
						{resultados.map((especialista: Especialista) =>
							<CardConsulta
								nome={especialista.nome}
								especialidade={especialista.especialidade}
								foto={especialista.imagem}
								data="20/05/2024"
								onPress={() => navigation.navigate('Agendamento', { especialistaId: especialista.id })}
							/>
						)}
					</>
				)}
			</VStack>
		</ScrollView >
	)
}