import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'

function Header() {
	return (
		<header className='header'>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
				<div className='container'>
					<a className='navbar-brand' href='#home'>
						Мобайл
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item'>
								<a href='#about' className='btn btn-primary me-2'>
									Про нас
								</a>
							</li>
							<li className='nav-item'>
								<a href='#contact-phone' className='btn btn-primary'>
									Контакти
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
