import { Divider, ScrollView, Text, VStack } from "native-base";
import { CardConsulta } from "../components/CardConsulta";
import { Titulo } from "../components/Titulo";
import Botao from "../components/Botao";

export default function Consulta() {
	return (
		<ScrollView>
			<VStack p={5}>
				<Titulo color='blue.500'>Minhas consultas</Titulo>
				<Botao>Agendar outra consulta</Botao>
				<Titulo color='blue.500' fontSize='lg' alignSelf='flex-start' mb={2}>Próximas consultas</Titulo>
				<CardConsulta
					nome="Luana Comin"
					especialidade="Psicóloga"
					foto="https://media-gru2-2.cdn.whatsapp.net/v/t61.24694-24/212845320_102942485330017_6680049319307305221_n.jpg?ccb=11-4&oh=01_Q5AaIJIMd68DT_NJItYHGjP6akzQbZckEtblUVMN9pFCndr_&oe=6658F910&_nc_sid=e6ed6c&_nc_cat=109"
					data="20/05/2024"
					foiAgendado
				/>
				<Divider mt={5} />
				<Titulo color='blue.500' fontSize='lg' alignSelf='flex-start' mb={2}>Consultas passadas</Titulo>
				<CardConsulta
					nome="Caroline Petri"
					especialidade="Nutricionista"
					foto="https://media-gru2-2.cdn.whatsapp.net/v/t61.24694-24/292270924_1726332861032752_1840355928138291264_n.jpg?ccb=11-4&oh=01_Q5AaIDOowtZt3BsNnX0h5dVJEFdP5KLLvjujWe5rXjuzUvA1&oe=66585DC8&_nc_sid=e6ed6c&_nc_cat=107"
					data="20/05/2024"
					foiAtendido
				/>
				<CardConsulta
					nome="Luana Comin"
					especialidade="Psicóloga"
					foto="https://media-gru2-2.cdn.whatsapp.net/v/t61.24694-24/212845320_102942485330017_6680049319307305221_n.jpg?ccb=11-4&oh=01_Q5AaIJIMd68DT_NJItYHGjP6akzQbZckEtblUVMN9pFCndr_&oe=6658F910&_nc_sid=e6ed6c&_nc_cat=109"
					data="20/05/2024"
					foiAtendido
				/>
			</VStack>
		</ScrollView>
	)
}