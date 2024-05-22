import { Box, Divider, Image, ScrollView, Text, VStack } from "native-base";
import Logo from '../assets/Logo.png';
import { Titulo } from "../components/Titulo";
import { InputTexto } from "../components/InputTexto";
import Botao from "../components/Botao";
import { depoimentos } from "../utils/mock";
import BoxPesquisa from "../components/BoxPesquisa";

export default function Principal() {
	return (
		<ScrollView flex={1} bgColor='white'>
			<VStack flex={1} alignItems='flex-start' justifyContent='flex-start' p={5}>
				<Image source={Logo} alt='Logo Voll' />
				<Titulo color='blue.500' textAlign='left'>Boas-Vindas!</Titulo>

				<BoxPesquisa />

				<Titulo color='blue.800' mb={5} alignSelf='center'>Depoimentos</Titulo>
				<VStack space={3} divider={<Divider />} w='100%'>
					{depoimentos.map(depoimento =>
						<Box key={depoimento.id}>
							<Text color='gray.500'>{depoimento.depoimento}</Text>
							<Titulo fontSize='md' mt={2} mb={0}>{depoimento.autor}</Titulo>
						</Box>
					)}
				</VStack>
			</VStack>
		</ScrollView>
	)
}