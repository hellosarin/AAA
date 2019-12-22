import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import 'bulma/css/bulma.css'
import Info from './pages/info'

function App() {
	return (
		<Router>
			<div>
				<nav className="navbar" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<a className="navbar-item" href="https://bulma.io">
							<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
						</a>
					</div>

					<div id="navbarBasicExample" className="navbar-menu">
						<div className="navbar-start">
							<Link to="/" className="navbar-item">
								Home
							</Link>

							<Link to="/info" className="navbar-item">
								Information
							</Link>

							<div className="navbar-item has-dropdown is-hoverable">
								<a className="navbar-link">More</a>
								<div className="navbar-dropdown">
									<a className="navbar-item">About</a>
									<a className="navbar-item">Jobs</a>
									<a className="navbar-item">Contact</a>
									<hr className="navbar-divider" />
									<a className="navbar-item">Report an issue</a>
								</div>
							</div>
						</div>

						<div className="navbar-end">
							<div className="navbar-item">
								<div className="buttons">
									<a className="button is-primary">
										<strong>Sign up</strong>
									</a>
									<a className="button is-light">Log in</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/info">
						<Info />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
