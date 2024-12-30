import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, editTask }) => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (editTask) setTitle(editTask.title);
    }, [editTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = editTask ? { ...editTask, title } : { title };
        onSubmit(newTask);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">{editTask ? 'Update' : 'Add'} Task</button>
        </form>
    );
};

export default TaskForm;
