import React, { useState } from 'react';
import '../assets/FormToDo.css';

function EditToDo({ task, editTask }) {

	// Declare a new state variable, which we'll call "taskName".
	const [taskName, setTaskName] = useState(task.taskName);

	// Update the taskName state variable when the user types in the input field.
	const handleOnChange = (e) => {
		const trimmedValue = e.target.value.trim();
		trimmedValue.length === 0 ? setTaskName(trimmedValue) : setTaskName(e.target.value);
		document.getElementById(task.id).disabled = trimmedValue.length === 0;
	};

	// Call the callback function with the new task name.
	const handleOnSubmit = (e) => {
		e.preventDefault();
		editTask(task.id, taskName);
	};

	// Change button text to 'Update' if the task name is the same.
	const buttonText = taskName === task.taskName ? 'Keep' : 'Update';

	// Return a form with an input field and a button.
	return (
		<form className="form" onSubmit={handleOnSubmit}>
			<input
				type="text"
				name={task.id}
				value={taskName}
				placeholder="Edit tasks in your list"
				onChange={handleOnChange}
			/>
			<button id={task.id} type="submit" className="BtnToDo">
				{buttonText}
			</button>
		</form>
	);
}

export default EditToDo;
