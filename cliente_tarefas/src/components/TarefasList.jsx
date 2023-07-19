import { useEffect } from "react";
import { useState } from "react";
import { getAllTarefas } from "../api/tarefas.api";
import TarefasCard from "./TarefasCard";

export default function TarefasList() {

    const [tarefas, setTarefas] = useState([])

    useEffect(() => {
        async function carregarTarefas() {
            const res = await getAllTarefas()
            setTarefas(res.data)
            console.log(res.data)
        }
        carregarTarefas()
    }, [])

    return (
        <div className="grid grid-cols-3 gap-3" >
            {tarefas.map(tarefa => (
                <TarefasCard key={tarefa.id} tarefa={tarefa} />
            ))}
        </div>
    )
}
