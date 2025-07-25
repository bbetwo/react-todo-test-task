import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

export function Tasks() {
    return (
        <div className="min-h-screen  p-6 text-black">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-6">
                    {/*  */}
                    <TaskForm />
                    <TaskList />
                </div>
            </div>
        </div>
    );
}
