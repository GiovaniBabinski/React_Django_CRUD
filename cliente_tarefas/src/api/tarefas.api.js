import axios from 'axios';

const tarefasApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/tarefas/api/tarefas/'
})

export const getAllTarefas = () => {
    return tarefasApi.get('/')
}

export const getTarefa = (id) => {
    return tarefasApi.get(`${id}/`)
}

export const createTarefa = (tarefa) => {
    return tarefasApi.post('/', tarefa)
}


export const deletarTarefa = (id) => {
    return tarefasApi.delete(`/${id}/`)
}

export const updateTarefa = (id, tarefa) => {
    return tarefasApi.put(`/${id}/`, tarefa)
}