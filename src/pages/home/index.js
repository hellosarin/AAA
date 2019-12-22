import React from 'react'
import logo from './logo.svg'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => (
	<div className="App">
		<header className="App-header">
			<Link to="/info">
				<button className="button is-primary" style={{ backgroundColor: 'orange' }}>
					Primary
				</button>
			</Link>

			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				HomePage
			</a>
		</header>
	</div>
)

export default Home
