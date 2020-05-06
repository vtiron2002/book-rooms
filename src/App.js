import React, { useEffect } from 'react';
import './App.css';
import Map from './components/Map/Map';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import './responsive.css'

import mapboxgl from 'mapbox-gl';
import { rooms } from '../src/data2';


export default function App() {
	let map;

	useEffect(() => {
    loadMap();
    document.querySelector('title').innerText = 'Book Rooms'
  }, []);
  
  const loadMap = async () => {
		mapboxgl.accessToken =
			'pk.eyJ1Ijoibmlja2d1cnIiLCJhIjoiY2s5dTl6aG13MW4yODNzcnQ3NmkyajU3NSJ9.FenHRzQwQetOnWTgk8b9ag';
		map = await new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/light-v10',
			zoom: 8,
			center: [-84.581301, 33.715443],
			scrollZoom: false,
		});

		map.on('load', (e) => {
			map.addSource('rooms', {
				type: 'geojson',
				data: rooms,
			});
			addMarkers();
		});
  };
  
  function addMarkers() {
		rooms.forEach((marker) => {
			var el = document.createElement('div');
			el.className = 'marker';

			new mapboxgl.Marker(el, {offset: [0,-800]})
				.setLngLat(marker.cords)
				.addTo(map);
		});
	}

	const flyTo = (cords) => {
		map.flyTo({
			center: cords,
			zoom: 18,
		});
	};

	return (
		<div className='container'>
			<Header />
			<Sidebar flyTo={flyTo} />
			<Map />
		</div>
	);
}
