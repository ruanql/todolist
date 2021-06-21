import React from 'react';
import { ITask } from '../interfaces';
import { BsTrash } from "react-icons/bs";

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}


const TodoTask = ({ task, completeTask }:Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}/h</span>
            </div>
            <button className="delete-icon" onClick={() => {
                completeTask(task.taskName);
            }}
            ><BsTrash /></button>
        </div>
    );
};

export default TodoTask;