import { Text, ScrollView, Avatar, Divider, VStack } from "native-base";
import { Titulo } from "../components/Titulo";

export default function Perfil() {
	return (
		<ScrollView flex={1}>
			<VStack flex={1} alignItems='center' p={5}>
				<Titulo color='blue.500'>Meu Perfil</Titulo>
				<Avatar source={{uri: 'https://github.com/JoaoDognini.png'}} mt={5} size='xl' />

				<Titulo color='blue.500'>Informações pessoais</Titulo>
				<Titulo fontSize='lg' mb={1}>João Dognini</Titulo>
				<Text>01/07/2000</Text>
				<Text>Ascurra - SC</Text>

				<Divider mt={5}/>

				<Titulo color='blue.500' mb={1}>Histórico médico</Titulo>
				<Text>Bronquite</Text>
				<Text>Sinusite</Text>
			</VStack>
		</ScrollView>
	)
}