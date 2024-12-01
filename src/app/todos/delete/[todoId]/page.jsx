import { redirect } from "next/navigation";


export default async function TodoDelete({params}) {
    const  todoId  = params.todoId;
    const data = await fetch(`http://localhost:3001/todos/${todoId}`, {
        method: 'DELETE',
        'cache': 'no-store'
    });
    if (data.ok ) {
        redirect('/todos');
    }
    return (
        <div className="container m-auto mt-3">
            {todoId} 
        </div>
    );
}