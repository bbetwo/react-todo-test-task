import { useTask } from "../context/useTask";
import { TaskItem } from "./TaskItem";
//
export const TaskList = () => {
    const { tasks } = useTask();

    return (
        <div className="md:col-span-1 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Задачи</h2>

            {tasks.length === 0 ? (
                <p className="text-gray-500">Задачи отсутствуют.</p>
            ) : (
                <div className="space-y-3">
                    {tasks.map((task) => (
                        <TaskItem key={task.id} task={task} />
                    ))}
                </div>
            )}
        </div>
    );
};
