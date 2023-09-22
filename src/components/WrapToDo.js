import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/WrapToDo.css';

function WrapToDo({
	task, toggleTask, toggleEdit, deleteTask,
}) {

	// Set taskName, id and isCompleted from task.
	const { id, isCompleted, taskName } = task;

	// Return a list with taskName, icons and line-through if isCompleted is true.
	return (
		<div className="list">
			<h2 className={isCompleted ? 'text-with-line' : undefined}>{taskName}</h2>
			<div className="icons">
				<i className={`bi ${isCompleted ? 'bi-x' : 'bi-check2'}`} onClick={() => toggleTask(id)} />
				<i className="bi bi-pencil" onClick={() => toggleEdit(id)} />
				<i className="bi bi-trash3" onClick={() => deleteTask(id)} />
			</div>
		</div>
	);
}

export default WrapToDo;
