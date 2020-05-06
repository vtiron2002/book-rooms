import React from 'react';
import './Sidebar.css';
import { rooms } from '../../data2';

export default function Sidebar({ flyTo }) {
	return (
		<div className='sidebar'>
			<div className='rooms'>
				<div className='scrollable'>
					{rooms.map((r) => (
						<div onClick={() => flyTo(r.cords)} key={r.id} className='room'>
							<div
								className='image'
								style={{ backgroundImage: `url(${r.image})` }}
							></div>
							<div className='info'>
								<div className='rating'>
									<div>
										<ion-icon name='star'></ion-icon>
										<small>{r.rating}</small>
										<small className='text-muted'>({r.reviews})</small>
									</div>
								</div>
								<div className='namePrice'>
									<h3>{r.name}</h3>
									<span className='price'>${r.price}</span>
								</div>
								<div className='location'>
									<span>{r.location}</span>
									<small>per night</small>
								</div>
								<div className='bookNow'>
									<div className='roomInfo'>
										<span>{r.bedrooms} bedrooms</span>
										<span>{r.size} m&sup2;</span>
										<span>{r.guests}+ guests</span>
									</div>
									<button>Book now</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
