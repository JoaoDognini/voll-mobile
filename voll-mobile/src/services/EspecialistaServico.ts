import api from "./api";

export async function buscarEspecialistaPorEstado(estado: string, especialidade: string) {
	try {
		const resultado = await api.get('/especialista/busca', {
			params: {
				estado, especialidade
			}
		})
		return resultado.data
	} catch (error) {
		return null;
	}
}

export async function buscarEspecialistas() {
	try {
		const resultado = await api.get('/especialista')
		return resultado.data
	} catch (error) {
		return null;
	}
}
