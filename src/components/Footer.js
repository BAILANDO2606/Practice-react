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
					<div id='contact-phone' className='col-md-4'>
						<h5>Контакти</h5>
						<p>
							<a
								href='https://www.facebook.com/mobile.kolomyya'
								className='text-light text-decoration-none'
							>
								Facebook
							</a>
						</p>
						<p>Телефон: +38 (096) 566-16-67</p>
						<p>Адреса магазину: площа Шевченка, 22, Коломия</p>
					</div>
				</div>
				<div className='row mt-4'>
					<div className='col-md-4'>
						<h5>Графік роботи</h5>
						<ul className='list-unstyled'>
							<li>Понеділок – П’ятниця: 09:00 – 18:00</li>
							<li>Субота: 09:00 – 16:00</li>
							<li>Неділя: Вихідний</li>
						</ul>
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
