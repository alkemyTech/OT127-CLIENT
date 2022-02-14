import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import '../../sass/layout/_header.scss'

const Header = () => {
	const isLogged = useSelector(state => state.authReducer.userIsLogged)

	const menuItems = [
		{ link: '/school-campaign', name: 'Campaña escolar' },
		{ link: '/toys-campaign', name: 'Campaña de juguetes' },
		{ link: '/nosotros', name: 'Nosotros' },
		{ link: '/contacto', name: 'Contacto' }
	]

	return (
		<>
			<header className="header">
				<nav className="header__nav">
					<div className="header__nav-left">
						<NavLink
							className="links"
							activeClassName="active"
							to="/">Inicio
						</NavLink>
					</div>
					<div className="header__nav-right">
						{isLogged
							? (
								<ul className="header__nav-list">
									{menuItems.map(item => (
										<li key={item.name} className="header__nav-item">
											<NavLink
												className="links"
												activeClassName="active"
												to={item.link}>
												{item.name}
											</NavLink>
										</li>
									))}
								</ul>
							)
							: null //Login/Register ?
						}
					</div>
				</nav>
			</header>
		</>
	)
}
export default Header