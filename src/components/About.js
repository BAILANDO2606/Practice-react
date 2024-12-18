import React from 'react'
import './About.css'

function About() {
	return (
		<section id='about' className='about py-5'>
			<div className='container'>
				<h2 className='about-title text-center mb-4'>Про магазин "Мобайл"</h2>
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
					<h3 className='text-center'>Чому обирають нас:</h3>
					<ul className='list-group list-group-flush'>
						<li className='list-group-item'>
							✅ Тільки сертифіковані товари від перевірених постачальників.
						</li>
						<li className='list-group-item'>
							✅ Кваліфіковані майстри з багаторічним досвідом роботи.
						</li>
						<li className='list-group-item'>
							✅ Широкий вибір аксесуарів для всіх популярних моделей.
						</li>
						<li className='list-group-item'>
							✅ Можливість обміну старих телефонів на нові.
						</li>
						<li className='list-group-item'>
							✅ Програма лояльності для постійних клієнтів.
						</li>
					</ul>
				</div>

				{/* Розділ "Статистика" */}
				<div className='about-stats row text-center'>
					<div className='col-md-3'>
						<div className='stat'>
							<h3>15+</h3>
							<p>Років на ринку</p>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='stat'>
							<h3>10,000+</h3>
							<p>Задоволених клієнтів</p>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='stat'>
							<h3>500+</h3>
							<p>Відремонтованих пристроїв щомісяця</p>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='stat'>
							<h3>50+</h3>
							<p>Власних унікальних аксесуарів</p>
						</div>
					</div>
				</div>

				{/* Розділ "Наші послуги" */}
				<div className='about-services my-5'>
					<h3 className='text-center'>Наші послуги:</h3>
					<ul className='list-group list-group-flush'>
						<li className='list-group-item'>
							📱 Продаж мобільних телефонів (Apple, Samsung, Xiaomi тощо).
						</li>
						<li className='list-group-item'>
							🔧 Ремонт та розблокування пристроїв будь-якої складності.
						</li>
						<li className='list-group-item'>
							🎧 Продаж аксесуарів (чохли, зарядки, навушники, плівки).
						</li>
						<li className='list-group-item'>
							💾 Перенесення даних зі старих телефонів на нові.
						</li>
						<li className='list-group-item'>
							📈 Оцінка та викуп старих телефонів.
						</li>
						<li className='list-group-item'>
							🚚 Доставка замовлень у межах міста.
						</li>
					</ul>
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
					<blockquote className='blockquote text-center'>
						<p>
							"Магазин 'Мобайл' – це справжній рай для любителів техніки!
							Купував телефон і отримав якісну консультацію та знижку. Дуже
							задоволений!"
						</p>
						<footer className='blockquote-footer'>Олег, клієнт</footer>
					</blockquote>
					<blockquote className='blockquote text-center'>
						<p>
							"Мій телефон зламався, і я боялася, що не зможу його відновити. У
							'Мобайлі' швидко зробили ремонт, і все працює ідеально.
							Рекомендую!"
						</p>
						<footer className='blockquote-footer'>Анна, клієнтка</footer>
					</blockquote>
				</div>
			</div>
		</section>
	)
}

export default About
