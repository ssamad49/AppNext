import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import Link from "next/link";

  
  export function DeleteTodo({todo}) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className=" bg-red-500 text-white" variant="outline">Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure? </AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the todo with id: {todo.title}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>
               <Link href={`/todos/delete/${todo.id}`}>Delete</Link>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  