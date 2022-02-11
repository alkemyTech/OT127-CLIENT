import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../sass/layout/_header.scss'

const Header = () => {
	const [ isLogged, setIsLogged ] = useState(false)
	const menu = {
		inicio: "/",
		campaigns: "/campaigns",
		nosotros: "/nosotros",
		contacto: "/contacto"
	}

	return (
		<>
			<header className="header">
				<div className="header__home">
					<Link to="/">Inicio</Link>
				</div>
				<nav className="header__nav">
					<ul className="header__nav-list">
						<li className="header__nav-item">
							<Link to="/about">Campaña</Link>
						</li>
					</ul>
				</nav>
			</header>

			inicio -active
			campañas
			nosotros
			contacto
		</>
	)
}
export default Header