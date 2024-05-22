import { Button, IButtonProps } from "native-base";
import { ReactNode } from "react";

interface BotaoProps extends IButtonProps {
	children: ReactNode
}

export default function Botao({ children, ...estilos }: BotaoProps) {
	return (
		<Button
			w='100%'
			mt={10}
			bg='blue.800'
			borderRadius='lg'
			{...estilos}
		>
			{children}
		</Button>
	)
}
