'use client';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TodoCreate() {
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { title, completed };

        try {
            const response = await fetch('http://localhost:3001/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                router.push('/todos');
            } else {
                console.error('Failed to create todo');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mx-auto mt-6 px-4 sm:px-8 max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Create Todo</h1>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                {/* Title Input */}
                <div>
                    <Label htmlFor="title" className="mb-2 block text-sm font-medium">
                        Title
                    </Label>
                    <Input
                        id="title"
                        type="text"
                        placeholder="Enter todo title"
                        className="w-full"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Completed Switch */}
                <div className="flex items-center justify-between">
                    <Label htmlFor="completed" className="text-sm font-medium">
                        Completed
                    </Label>
                    <Switch
                        id="completed"
                        checked={completed}
                        onCheckedChange={(value) => setCompleted(value)}
                    />
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full">
                    Create
                </Button>
            </form>
        </div>
    );
}
