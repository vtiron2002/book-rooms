import React from 'react';
import './Header.css';

export default function Header() {
	const links = ['Accommodations', 'Car rental', 'Flights', 'Special deals'];

	return (
		<div className='header'>
			<h1 className='logo'>
        BOOK 
        <strong>
        ROOMS

        </strong>
        </h1>

			<ul className='links'>
				{links.map((l) => (
					<li key={l} className='link'>
						<a className="" href='#'>{l}</a>
					</li>
				))}
			</ul>
		</div>
	);
}
