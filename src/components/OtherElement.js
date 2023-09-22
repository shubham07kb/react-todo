import React from 'react';
import '../assets/OtherElement.css';

function OtherElement() {

	// Return Footer with Notes.
	return (
		<>
			<div className="notes">
				<h3>Notes: </h3>
				<ul>
					<li>On Desktop, We you Start Edit Tasks and not want to update, just click ctrl+Z or cmd+z till keep button appear, or refresh page without update.</li>
					<li>On Mobile, Just refresh Page.</li>
				</ul>
			</div>
			<div className="footer">
				Create by
				{' '}
				<a className="name-link" href="https://github.com/shubham07kb/react-todo">Shubham Kumar Bansal</a>
				{' '}
				with
				<span className="heart">&#x2764;</span>
			</div>
		</>
	);
}

export default OtherElement;
