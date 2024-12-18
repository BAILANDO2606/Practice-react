import React from 'react'
import './Footer.css'

function Footer() {
	return (
		<footer className='bg-dark text-light pt-4'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-4'>
						<h5>Про нас</h5>
						<p>
							Магазин "Мобайл" — ваш надійний партнер у світі мобільних
							технологій. Ми надаємо якісні послуги та сертифіковані товари.
						</p>
					</div>
					<div className='col-md-4'>
						<h5>Корисні посилання</h5>
						<ul className='list-unstyled'>
							<li>
								<a href='#about' className='text-light text-decoration-none'>
									Про нас
								</a>
							</li>
							<li>
								<a href='#services' className='text-light text-decoration-none'>
									Послуги
								</a>
							</li>
							<li>
								<a href='#contact' className='text-light text-decoration-none'>
									Контакти
								</a>
							</li>
						</ul>
					</div>
					<div className='col-md-4'>
						<h5>Контакти</h5>
						<p>Телефон: +38 (050) 123-45-67</p>
						<p>Email: info@mobile.com</p>
					</div>
				</div>
				<div className='row mt-4'>
					<div className='col text-center'>
						<p className='mb-0'>
							&copy; 2024 Магазин "Мобайл". Всі права захищені.
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
