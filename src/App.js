import React, { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
const App = () => {
    const [tasks, setTasks] = useState([]);
    const [editTask, setEditTask] = useState(null);

    // Fetch tasks on component mount
    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const response = await getTasks();
        setTasks(response.data);
    };

    const handleCreateTask = async (task) => {
        const response = await createTask(task);
        setTasks([...tasks, response.data]);
    };

    const handleUpdateTask = async (task) => {
        const response = await updateTask(task.id, task);
        setTasks(tasks.map((t) => (t.id === task.id ? response.data : t)));
        setEditTask(null);
    };

    const handleDeleteTask = async (id) => {
        await deleteTask(id);
        setTasks(tasks.filter((t) => t.id !== id));
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm
                onSubmit={editTask ? handleUpdateTask : handleCreateTask}
                editTask={editTask}
            />
            <TaskList
                tasks={tasks}
                onEdit={setEditTask}
                onDelete={handleDeleteTask}
            />
        </div>
    );
};

export default App;
