import { Button } from "@/components/ui/button"
import { DeleteTodo } from "@/components/ui/deleteTodo";
import Link from "next/link";

export default async function todos() {
    const data = await fetch('http://localhost:3001/todos',
        {
            'cache': 'no-store'
        });
    const todos = await data.json();
    return (
        <div className=" container m-auto mt-3">
            <h1>Todo List</h1>
            <div className="flex justify-end mb-2">
                <Button variant="outline" asChild>
                    <Link href="/todos/create">Create</Link>
                </Button>
            </div>
            <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Title</th>
                        <th className="border border-gray-300 px-4 py-2">Completed</th>
                        <th className="border border-gray-300 px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id} className="text-center">
                            <td className="border border-gray-300 px-4 py-2">{todo.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{todo.title}</td>
                            <td className="border border-gray-300 px-4 py-2">{todo.completed ? 'Yes' : 'No'}</td>
                            <td className="border border-gray-300 px-4 py-2">
                            <DeleteTodo  todo={todo} />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );

}