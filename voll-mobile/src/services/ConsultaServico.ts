import api from "./api";

export async function agendarConsulta(data: Date, especialistaId: string, pacienteId: string) {
  try {
    const resultado = await api.post('/consulta', {
      especialista: especialistaId,
      paciente: pacienteId,
      data: data
    })
    return resultado.data
  }
  catch (error) {
    return null;
  }
}


export async function cancelarConsulta(id: string) {
  try {
    const resultado = await api.delete(`/consulta/${id}`)
    return resultado.data
  } catch (error) {
    return null
  }
}