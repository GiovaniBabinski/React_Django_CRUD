import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { createTarefa, deletarTarefa, updateTarefa, getTarefa } from '../api/tarefas.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function TarefasFormPage() {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateTarefa(params.id, data)
            toast.success("Atualização bem sucedida!!", {
                position: 'top-center',
                style: { background: 'blue', color: 'white' }
            })
        } else {
            await createTarefa(data)
            toast.success("Tarefa criada com sucesso!", {
                position: 'top-center',
                style: { background: 'green', color: 'white' }
            })
        }
        navigate('/tarefas')

    })

    useEffect(() => {
        async function loadTarefas() {
            if (params.id) {
                const res = await getTarefa(params.id)
                setValue('titulo', res.data.titulo)
                setValue('descricao', res.data.descricao)
            }
        }
        loadTarefas()

    }, [])

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder="Título"
                    {...register('titulo', { required: true })}
                    className='bg-zinc-600 p-3 rounded-lg block mb-3 w-96'
                />
                {errors.titulo && <span>O campo título é obrigatório</span>}

                <textarea rows={4} placeholder="Descrição"
                    {...register('descricao', { required: true })}
                    className='bg-zinc-600 p-3 rounded-lg block mb-3 w-full'

                ></textarea>
                {errors.descricao && <span>O campo descrição é obrigatório</span>}

                <button className=' p-3 rounded-lg block w-48 mt-3 bg-emerald-500 font-semibold' >Salvar tarefa</button>
            </form>
            {params.id &&
                <button className='bg-red-500 p-3 rounded-lg block mt-3 w-48 '
                    onClick={async () => {
                        const aceitar = window.confirm("Tem certeza que deseja excluir essa tarefa?")
                        if (aceitar) {
                            await deletarTarefa(params.id)
                            navigate('/tarefas')
                            toast.success("A tarefa foi deletada com sucesso!", {
                                position: 'top-center',
                                style: { background: 'red', color: 'white' }
                            })
                        }
                    }}>Deletar tarefa</button>}
        </div>
    )
}