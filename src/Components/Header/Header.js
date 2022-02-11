import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import '../../sass/layout/_header.scss'

const Header = () => {
	const isLogged = useSelector(state => state.authReducer.userIsLogged)
	const menu = {
		"School Campaign": "/school-campaign",
		"Toys Campaign": "/toys-campaign",
		"About Us": "/nosotros",
		"Contact": "/contacto"
	}

	return (
		<>
			<header className="header">
				<nav className="header__nav">
					<div className="header__nav-left">
						<NavLink
							className="links"
							activeClassName="active"
							to="/">Home
						</NavLink>
					</div>
					<div className="header__nav-right">
						{isLogged
							? (
								<ul className="header__nav-list">
									{Object.keys(menu).map((key, index) => (
										<li key={index} className="header__nav-item">
											<NavLink
												to={menu[ key ]}
												className="links"
												activeClassName="active"
											>
												{key}
											</NavLink>
										</li>
									))}
								</ul>)
							: null //Login/Register ?
						}
					</div>
				</nav>
			</header>
		</>
	)
}
export default Header