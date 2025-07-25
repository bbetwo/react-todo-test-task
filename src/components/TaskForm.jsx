import { useState } from "react";
import { useTask } from "../context/useTask";
//
export const TaskForm = () => {
    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
    });

    const { addTask } = useTask();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTask.title.trim()) return;
        addTask(newTask);

        setNewTask({
            title: "",
            description: "",
        });
    };

    const handleChange = (e) => {
        setNewTask((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    return (
        <div className="md:row-span-2 bg-blue-50 p-4 rounded-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
                Добавить Задачу
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 ">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Заголовок
                    </label>

                    <input
                        type="text"
                        value={newTask.title}
                        name="title"
                        onChange={(e) => handleChange(e)}
                        className="w-full  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder=" Текст заголовка"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Описание
                    </label>

                    <input
                        type="text"
                        value={newTask.description}
                        name="description"
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Текст описания"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200"
                >
                    Добавить Задачу
                </button>
            </form>
        </div>
    );
};
