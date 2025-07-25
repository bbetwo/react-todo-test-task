import { useTask } from "../context/useTask";
//
export const TaskItem = ({ task }) => {
    const { id, description, status, title } = task;

    const { updateStatus, removeTask } = useTask();
    return (
        <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-semibold text-lg">{title}</h3>
                    {description && (
                        <p className="text-gray-600 mt-1 italic">
                            {description}
                        </p>
                    )}
                </div>

                <span
                    className={`px-2 py-1 text-xs rounded-full ${
                        status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : status === "in_progress"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                    }`}
                >
                    {status}
                </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 items-center justify-center space-x-2">
                <button
                    onClick={() => updateStatus(id, "in_progress")}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition"
                >
                    Выполняются
                </button>

                <button
                    onClick={() => updateStatus(id, "done")}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded hover:bg-green-200 transition"
                >
                    В процессе выполнения
                </button>

                <button
                    onClick={() => removeTask(id)}
                    className="px-3 py-1 bg-red-100 text-red-800 rounded hover:bg-red-200 transition"
                >
                    Удалить
                </button>
            </div>
        </div>
    );
};
