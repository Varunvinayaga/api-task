import React from 'react';

const TaskItem = ({ task, onEdit, onDelete }) => (
    <li>
        {task.title}
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
    </li>
);

export default TaskItem;
