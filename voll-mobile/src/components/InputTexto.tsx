import { Input, FormControl, Text } from "native-base";

interface InputProps {
	label?: string;
	placeholder: string;
	secureTextEntry?: boolean;
	leftIcon?: React.ReactNode;
	value?: string;
	onChangeText?: (text: string) => void;
}

export function InputTexto({ label, placeholder, value, onChangeText, secureTextEntry = false }: InputProps) {
	return (
		<FormControl mt={3}>
			{label && <Text color='blue.800' fontWeight='bold' fontSize={"md"}>{label}</Text>}
			<Input
				placeholder={placeholder}
				size="lg"
				w="100%"
				borderRadius="lg"
				bgColor="gray.100"
				secureTextEntry={secureTextEntry}
				shadow={3}
				value={value}
				onChangeText={onChangeText}
			/>
		</FormControl>
	);
};