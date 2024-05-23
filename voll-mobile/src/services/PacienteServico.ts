import { Paciente } from "../interfaces/Paciente";
import api from "./api";

export async function cadastrarPaciente(paciente: Paciente) {
	if (!paciente) return null;

	try {
		const resultado = await api.post('/paciente', paciente)
		return resultado.data
	} catch (error) {
		return null
	}
}

export async function buscarPaciente(id: string) {
	try {
		const resultado = await api.get(`/paciente/${id}`)
		return resultado.data
	} catch (error) {
		return null
	}
}

export async function buscarConsultasPaciente(id: string) {
	try {
		const resultado = await api.get(`/paciente/${id}/consultas`)
		return resultado.data
	} catch (error) {
		return null
	}
}