import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './assets/App.css';
import FormToDo from './components/FormToDo';
import WrapToDo from './components/WrapToDo';
import EditToDo from './components/EditToDo';
import OtherElement from './components/OtherElement';

uuidv4();

const App = () => {

	// Custom hook to manage local storage
	const todoLocalStorage = (data) => {
		localStorage.setItem('ToDo', JSON.stringify(data));
	};

	// Check if local storage is empty or not
	if (localStorage.getItem('ToDo') === null) {
		todoLocalStorage([]);
	}

	// Declare a new state variable, which we'll call "tasks".
	const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('ToDo'))); // tasks = [] and setTasks = function

	// Add task to tasks.
	const addTask = (task) => {
		setTasks([...tasks, {
			id: uuidv4(), taskName: task, isCompleted: false, isEdit: false,
		}]);
		todoLocalStorage([...tasks, {
			id: uuidv4(), taskName: task, isCompleted: false, isEdit: false,
		}]);
	};

	// Toggle isCompleted in tasks.
	const toggleTask = (id) => {
		setTasks(tasks.map((task) => (task.id === id
			? { ...task, isCompleted: !task.isCompleted }
			: task)));
		todoLocalStorage(tasks.map((task) => {
			if (task.id === id) {
				return { ...task, isCompleted: !task.isCompleted };
			}
			return task;
		}));
	};

	// Toggle isEdit in tasks.
	const toggleEdit = (id) => {
		setTasks(tasks.map((task) => (task.id === id ? { ...task, isEdit: !task.isEdit } : task)));
	};

	// Edit task in tasks.
	const editTask = (id, newTask) => {
		setTasks(tasks.map((task) => (
			task.id === id ? { ...task, taskName: newTask, isEdit: !task.isEdit } : task
		)));
		todoLocalStorage(tasks.map((task) => {
			if (task.id === id) {
				return { ...task, taskName: newTask, isEdit: !task.isEdit };
			}
			return task;
		}));
	};

	// Delete task from tasks.
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
		todoLocalStorage(tasks.filter((task) => task.id !== id));
	};

	// Return a div with a h1, a div with lists and a FormToDo component.
	return (
		<>
			<div className="main">
				<h1>ToDo App</h1>
				<div className="lists">
					{tasks.map((task, index) => {
						if (task.isCompleted === false && task.isEdit === false) {
							return <WrapToDo task={task} key={index} toggleTask={toggleTask} toggleEdit={toggleEdit} deleteTask={deleteTask} />;
						} if (task.isCompleted === false && task.isEdit === true) {
							return <EditToDo task={task} key={index} editTask={editTask} />;
						}
						return '';
					})}
					{tasks.map((task, index) => {
						if (task.isCompleted === true && task.isEdit === false) {
							return <WrapToDo task={task} key={index} toggleTask={toggleTask} toggleEdit={toggleEdit} deleteTask={deleteTask} />;
						} if (task.isCompleted === true && task.isEdit === true) {
							return <EditToDo task={task} key={index} editTask={editTask} />;
						}
						return '';
					})}
					<FormToDo addTask={addTask} />
				</div>
			</div>
			<OtherElement />
		</>
	)
}

export default App
