export const initialState = {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK": {
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: Date.now(),
                        title: action.payload.title,
                        description: action.payload.description,
                        status: "pending",
                    },
                ],
            };
        }

        case "REMOVE_TASK": {
            return {
                ...state,
                tasks: state.tasks.filter(
                    (task) => task.id !== action.payload.id
                ),
            };
        }

        case "UPDATE_STATUS": {
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    return task.id === action.payload.id
                        ? { ...task, status: action.payload.status }
                        : task;
                }),
            };
        }

        case "FILTER_TASKS": {
            return {
                ...state,
                tasks: state.tasks.filter((task) => {
                    return task.status === action.payload;
                }),
            };
        }

        default:
            return state;
    }
};
