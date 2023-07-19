import { useNavigate } from "react-router-dom";

export default function TarefasCard({ tarefa }) {

    const navigate = useNavigate()

    return (
        <div className=" bg-black p-3 mt-5 hover:bg-zinc-500" onClick={() => {
            navigate(`/tarefas/${tarefa.id}`)
        }}>
            <h3 className="uppercase text-center mb-2">{tarefa.titulo}</h3>
            <p>{tarefa.descricao}</p>
            <hr />
        </div>
    )
}
