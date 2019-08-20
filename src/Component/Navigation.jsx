import React from 'react';
import styles from './navigation.css';
import SearchForm from './searchForm';
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link to={{
					pathname: `../`,
				}}> <div id={styles.brand}>
						MovieCube
				</div>
				</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse"
					data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto" id={styles.ul}>
						<li className="nav-item active">
							<SearchForm />
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
};

export default Navigation;
