import { useEffect, useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { initialState, reducer } from "./taskReducer";

export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
    }, [state.tasks]);

    //
    const addTask = (task) => {
        dispatch({ type: "ADD_TASK", payload: task });
    };
    const removeTask = (id) => {
        dispatch({ type: "REMOVE_TASK", payload: { id } });
    };
    const updateStatus = (id, status) => {
        dispatch({ type: "UPDATE_STATUS", payload: { id, status } });
    };

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                addTask,
                removeTask,
                updateStatus,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};
