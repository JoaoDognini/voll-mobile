import { ScrollView, Text, VStack } from "native-base";
import BoxPesquisa from "../components/BoxPesquisa";
import { useState } from "react";
import { Titulo } from "../components/Titulo";
import Botao from "../components/Botao";
import { CardConsulta } from "../components/CardConsulta";

export default function Explorar() {
	const [resultados, setResultados] = useState(1);

	return (
		<ScrollView>
			<VStack p={5}>
				<BoxPesquisa />

				{!!resultados && (
					<>
						<Titulo color='blue.500' mb={5}>Resultado da busca</Titulo>
						<CardConsulta
							nome="Luana Comin"
							especialidade="Psicóloga"
							foto="https://media-gru2-2.cdn.whatsapp.net/v/t61.24694-24/212845320_102942485330017_6680049319307305221_n.jpg?ccb=11-4&oh=01_Q5AaIJIMd68DT_NJItYHGjP6akzQbZckEtblUVMN9pFCndr_&oe=6658F910&_nc_sid=e6ed6c&_nc_cat=109"
							data="20/05/2024"
						/>
					</>
				)}
			</VStack>
		</ScrollView>
	)
}