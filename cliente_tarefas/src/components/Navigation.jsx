import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="flex justify-between  py-3 " >
            <Link to={'/tarefas'}>
                <h1 className=" bg-indigo-600 py-3 px-2 rounded-lg hover:bg-indigo-700" >GERENCIADOR DE TAREFAS</h1>
            </Link>
            <div className="bg-green-500 py-3 px-2 rounded-lg hover:bg-emerald-600">
                <Link to={'/tarefas-create'} >Criar nova tarefa</Link>
            </div>
        </div>
    )
}