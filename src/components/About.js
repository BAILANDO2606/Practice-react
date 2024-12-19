import React from 'react'
import './About.css'

function Review({ avatar, name, review, rating }) {
	return (
		<div className='review d-flex align-items-center justify-content-center mb-4'>
			<img
				src={avatar}
				alt={name}
				className='review-avatar rounded-circle me-3'
			/>
			<div>
				<p className='review-text mb-2'>{review}</p>
				<div className='review-footer d-flex align-items-center'>
					<div className='review-name me-3'>{name}</div>
					<div className='review-rating'>
						{[...Array(5)].map((_, index) => (
							<span
								key={index}
								className={`star ${index < rating ? 'filled' : ''}`}
							>
								★
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

function About() {
	return (
		<section id='about' className='about py-5'>
			<div className='container'>
				<h2 className='about-title text-center mb-4'>Магазин Мобайл</h2>
				<p className='about-description text-center mb-5'>
					Магазин <strong>"Мобайл"</strong> – це місце, де ваші технологічні
					потреби знаходять своє вирішення. Ми пропонуємо не лише якісні
					мобільні телефони, але й найкращий сервіс для їх обслуговування.
					Завдяки багаторічному досвіду ми стали одними з лідерів у галузі
					мобільної техніки.
				</p>

				{/* Розділ "Історія" */}
				<div className='row'>
					<div className='col-md-6'>
						<h3>Наша історія</h3>
						<p>
							Магазин "Мобайл" було засновано у 2010 році як невеликий сімейний
							бізнес. З роками ми перетворилися на одну з провідних компаній у
							місті, завдяки довірі клієнтів та постійному вдосконаленню. Наша
							команда завжди йде в ногу з технологічними інноваціями, щоб
							забезпечити вас найновішими гаджетами.
						</p>
					</div>
					<div className='col-md-6'>
						<h3>Наша місія</h3>
						<p>
							Ми прагнемо стати вашим надійним партнером у світі мобільних
							технологій, забезпечуючи якісний сервіс, широкий вибір продуктів
							та доступні ціни. Наш головний пріоритет – це задоволення потреб
							наших клієнтів.
						</p>
					</div>
				</div>

				{/* Розділ "Переваги" */}
				<div className='about-features my-5'>
					<h3 className='text-center mb-4' style={{ fontSize: '2.5rem' }}>
						Чому обирають нас:
					</h3>
					<ul className='list-group list-group-flush'>
						<li className='list-group-item d-flex align-items-center'>
							<i
								className='bi bi-check-circle text-success me-3'
								style={{ fontSize: '1.5rem' }}
							></i>
							Тільки сертифіковані товари від перевірених постачальників.
						</li>
						<li className='list-group-item d-flex align-items-center'>
							<i
								className='bi bi-check-circle text-success me-3'
								style={{ fontSize: '1.5rem' }}
							></i>
							Кваліфіковані майстри з багаторічним досвідом роботи.
						</li>
						<li className='list-group-item d-flex align-items-center'>
							<i
								className='bi bi-check-circle text-success me-3'
								style={{ fontSize: '1.5rem' }}
							></i>
							Широкий вибір аксесуарів для всіх популярних моделей.
						</li>
						<li className='list-group-item d-flex align-items-center'>
							<i
								className='bi bi-check-circle text-success me-3'
								style={{ fontSize: '1.5rem' }}
							></i>
							Можливість обміну старих телефонів на нові.
						</li>
						<li className='list-group-item d-flex align-items-center'>
							<i
								className='bi bi-check-circle text-success me-3'
								style={{ fontSize: '1.5rem' }}
							></i>
							Програма лояльності для постійних клієнтів.
						</li>
					</ul>
				</div>

				{/* Розділ "Статистика" */}
				<div className='stats-section py-5 bg-light'>
					<h3 className='text-center mb-5 display-4 text-dark'>
						Наша статистика
					</h3>
					<div className='container'>
						<div className='row row-cols-1 row-cols-md-3 g-4 text-center'>
							<div className='col'>
								<div className='stat-card p-4 border rounded shadow-sm bg-white'>
									<i className='bi bi-people-fill display-3 text-primary mb-3'></i>
									<h5 className='fw-bold text-dark'>Років на ринку</h5>
									<p className='fs-1 text-primary'>15+</p>
								</div>
							</div>
							<div className='col'>
								<div className='stat-card p-4 border rounded shadow-sm bg-white'>
									<i className='bi bi-tools display-3 text-success mb-3'></i>
									<h5 className='fw-bold text-dark'>Задоволених клієнтів</h5>
									<p className='fs-1 text-success'>10,000+</p>
								</div>
							</div>
							<div className='col'>
								<div className='stat-card p-4 border rounded shadow-sm bg-white'>
									<i className='bi bi-box-seam display-3 text-warning mb-3'></i>
									<h5 className='fw-bold text-dark'>Продано аксесуарів</h5>
									<p className='fs-1 text-warning'>20,000+</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Розділ "Наші послуги" */}
				<div className='about-services my-5'>
					<h3 className='text-center mb-4 display-4 text-primary'>
						Наші послуги
					</h3>
					<div className='row row-cols-1 row-cols-md-3 g-4'>
						<div className='col'>
							<div className='card h-100 border-0 shadow-lg service-card'>
								<div className='card-body text-center'>
									<div className='service-icon mb-4'>
										<i className='bi bi-phone display-3 text-primary'></i>
									</div>
									<h5 className='card-title fw-bold text-dark'>
										Продаж мобільних телефонів
									</h5>
									<p className='card-text text-secondary'>
										Apple, Samsung, Xiaomi та інші популярні бренди.
									</p>
								</div>
							</div>
						</div>
						<div className='col'>
							<div className='card h-100 border-0 shadow-lg service-card'>
								<div className='card-body text-center'>
									<div className='service-icon mb-4'>
										<i className='bi bi-tools display-3 text-warning'></i>
									</div>
									<h5 className='card-title fw-bold text-dark'>
										Ремонт та розблокування
									</h5>
									<p className='card-text text-secondary'>
										Виконуємо ремонт будь-якої складності швидко та якісно.
									</p>
								</div>
							</div>
						</div>
						<div className='col'>
							<div className='card h-100 border-0 shadow-lg service-card'>
								<div className='card-body text-center'>
									<div className='service-icon mb-4'>
										<i className='bi bi-headphones display-3 text-success'></i>
									</div>
									<h5 className='card-title fw-bold text-dark'>
										Продаж аксесуарів
									</h5>
									<p className='card-text text-secondary'>
										Чохли, зарядки, навушники, захисні плівки тощо.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Розділ "Наша команда" */}
				<div className='about-team my-5'>
					<h3 className='text-center'>Наша команда</h3>
					<p>
						У магазині працює команда висококваліфікованих спеціалістів, які
						завжди готові допомогти у виборі техніки, наданні консультацій та
						виконанні ремонту будь-якої складності. Наші працівники регулярно
						проходять тренінги для підвищення кваліфікації.
					</p>
				</div>

				{/* Розділ "Відгуки клієнтів" */}
				<div className='about-reviews my-5'>
					<h3 className='text-center'>Відгуки клієнтів</h3>

					{/* Відгуки */}
					<div className='review d-flex align-items-center justify-content-center mb-4'>
						<img
							src='https://randomuser.me/api/portraits/men/11.jpg'
							alt='Олег'
							className='review-avatar rounded-circle me-3'
						/>
						<div>
							<p className='review-text mb-2'>
								Магазин 'Мобайл' – це справжній рай для любителів техніки!
								Купував телефон і отримав якісну консультацію та знижку. Дуже
								задоволений!
							</p>
							<div className='review-footer d-flex align-items-center'>
								<div className='review-name me-3'>Олег</div>
								<div className='review-rating'>
									{[...Array(5)].map((_, index) => (
										<span
											key={index}
											className={`star ${index < 5 ? 'filled' : ''}`}
										>
											★
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className='review d-flex align-items-center justify-content-center mb-4'>
						<img
							src='https://randomuser.me/api/portraits/women/22.jpg'
							alt='Olga Romaniuk'
							className='review-avatar rounded-circle me-3'
						/>
						<div>
							<p className='review-text mb-2'>
								Мій телефон зламався, і я боялася, що не зможу його відновити. У
								'Мобайлі' швидко зробили ремонт, і все працює ідеально.
								Рекомендую!
							</p>
							<div className='review-footer d-flex align-items-center'>
								<div className='review-name me-3'>Анна</div>
								<div className='review-rating'>
									{[...Array(5)].map((_, index) => (
										<span
											key={index}
											className={`star ${index < 4 ? 'filled' : ''}`}
										>
											★
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className='review d-flex align-items-center justify-content-center mb-4'>
						<img
							src='https://randomuser.me/api/portraits/men/13.jpg'
							alt='Віталій'
							className='review-avatar rounded-circle me-3'
						/>
						<div>
							<p className='review-text mb-2'>
								Магазин 'Мобайл' – це справжній рай для любителів техніки!
								Купував телефон і отримав якісну консультацію та знижку. Дуже
								задоволений!
							</p>
							<div className='review-footer d-flex align-items-center'>
								<div className='review-name me-3'>Віта</div>
								<div className='review-rating'>
									{[...Array(5)].map((_, index) => (
										<span
											key={index}
											className={`star ${index < 5 ? 'filled' : ''}`}
										>
											★
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
;<link
	rel='stylesheet'
	href='https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css'
/>

export default About
