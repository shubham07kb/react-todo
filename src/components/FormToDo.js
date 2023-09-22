import React, { useState } from 'react';
import '../assets/FormToDo.css';

function FormToDo({ addTask }) {

	// Declare a new state variable, which we'll call "formValue".
	const [formValue, setFormValue] = useState('');


	// Update the formValue state variable when the user types in the input field.
	const handleOnChange = (e) => {
		const trimmedValue = e.target.value.trim();
		trimmedValue.length === 0 ? setFormValue(trimmedValue) : setFormValue(e.target.value);
		document.getElementById('BtnToDo').disabled = trimmedValue.length === 0;
	};

	// Call the callback function with the new task name.
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (formValue) {
			addTask(formValue);
			setFormValue('');
		}
	};

	// Return a form with an input field and a button.
	return (
		<form className="form" onSubmit={handleFormSubmit}>
			<input
				name="AddTask"
				className="InputToDo"
				type="text"
				value={formValue}
				placeholder="Add new tasks to your list"
				onChange={handleOnChange}
			/>
			<button type="submit" className="BtnToDo" id="BtnToDo" disabled={!formValue}>
				Add
			</button>
		</form>
	);
}

export default FormToDo;
