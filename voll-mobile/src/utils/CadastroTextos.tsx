const secoes = [
	{
		id: 1,
		titulo: 'Insira alguns dados básicos:',
		entrada: [
			{
				id: 1,
				label: 'Nome',
				placeholder: 'Digite seu nome completo',
				name: 'nome'
			},
			{
				id: 2,
				label: 'Email',
				placeholder: 'Insira seu endereço de email',
				name: 'email'
			},
			{
				id: 3,
				label: 'Crie uma senha',
				placeholder: 'Insira sua senha',
				secureTextEntry: true,
				name: 'senha'
			},
			{
				id: 4,
				label: 'Repita a senha',
				placeholder: 'Insira sua senha',
				secureTextEntry: true,
				name: 'confirmaSenha'
			},
			{
				id: 5,
				label: 'CPF',
				placeholder: 'Insira seu CPF',
				name: 'cpf'
			},
			{
				id: 6,
				label: 'Foto de perfil',
				placeholder: 'Link da foto',
				name: 'imagem'
			}
		],
		checkbox: []
	},
	{
		id: 2,
		titulo: 'Agora, mais alguns dados sobre você:',
		entrada: [
			{
				id: 1,
				label: 'CEP',
				placeholder: 'Insira seu CEP',
				name: 'cep'
			},
			{
				id: 2,
				label: 'Rua',
				placeholder: 'Insira sua rua',
				name: 'rua'
			},
			{
				id: 3,
				label: 'Número',
				placeholder: 'Insira seu número',
				name: 'numero'
			},
			{
				id: 4,
				label: 'Complemento',
				placeholder: 'Insira seu complemento',
				name: 'complemento'
			},
			{
				id: 5,
				label: 'Telefone',
				placeholder: '(00) 00000-0000',
				name: 'telefone'
			},
			{
				id: 6,
				label: 'Estado',
				placeholder: 'Insira seu estado',
				name: 'estado'
			}
		],
		checkbox: []
	},
	{
		id: 3,
		titulo: 'Para finalizar, qual seu plano de saúde?',
		entradaTexto: [],
		checkbox: [
			{
				id: 1,
				plano: 'Sulamerica'
			},
			{
				id: 2,
				plano: 'Unimed'
			},
			{
				id: 3,
				plano: 'Bradesco'
			},
			{
				id: 4,
				plano: 'Amil'
			},
			{
				id: 5,
				plano: 'Biosaúde'
			},
			{
				id: 6,
				plano: 'Biovida'
			},
			{
				id: 7,
				plano: 'Outros'
			}
		]
	}
]

export { secoes };