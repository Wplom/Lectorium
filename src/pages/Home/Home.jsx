import Hero from '../../components/Hero/Hero' // <-- Добавили импорт
import CtaBanner from '../../components/CtaBanner/CtaBanner'
import './Home.css'

const directions = [
    {
        id: 1,
        title: 'Программирование',
        description: 'Python, JavaScript, алгоритмы и веб-разработка',
        icon: '💻'
    },
    {
        id: 2,
        title: 'Экономика',
        description: 'Финансы, анализ предприятий и управление',
        icon: '📊'
    },
    {
        id: 3,
        title: 'Инженерия',
        description: 'Технические дисциплины и современные технологии',
        icon: '⚙️'
    }
]

function Home({ setCurrentPage }) {
    return (
        <main className="home">
            {/* Заменили огромный блок section на компонент */}
            <Hero setCurrentPage={setCurrentPage} />

            <section className="home-about">
                <div className="section-heading">
                    <span>О платформе</span>
                    <h2>Учитесь у практикующих специалистов</h2>
                </div>

                <div className="about-grid">
                    <article className="about-item">
                        <strong>01</strong>
                        <div>
                            <h3>Опытные лекторы</h3>
                            <p>
                                Выбирайте преподавателей по направлению,
                                опыту работы и программе занятий.
                            </p>
                        </div>
                    </article>

                    <article className="about-item">
                        <strong>02</strong>
                        <div>
                            <h3>Удобный формат</h3>
                            <p>
                                Находите занятия в подходящем формате
                                и выбирайте удобную программу.
                            </p>
                        </div>
                    </article>

                    <article className="about-item">
                        <strong>03</strong>
                        <div>
                            <h3>Разные направления</h3>
                            <p>
                                Изучайте технические, экономические
                                и гуманитарные дисциплины.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="directions">
                <div className="section-heading">
                    <span>Направления</span>
                    <h2>Популярные области обучения</h2>
                    <p>
                        Выберите интересующую область и найдите
                        подходящего преподавателя.
                    </p>
                </div>

                <div className="directions-grid">
                    {directions.map((direction) => (
                        <article
                            className="direction-card"
                            key={direction.id}
                        >
                            <div className="direction-icon">
                                {direction.icon}
                            </div>
                            <h3>{direction.title}</h3>
                            <p>{direction.description}</p>
                            <button
                                onClick={() => setCurrentPage('lecturers')}
                            >
                                Смотреть лекторов
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            <CtaBanner 
                label="Начните обучение"
                title="Найдите лектора под свои цели"
                description="Перейдите в каталог и сравните направления, программы и опыт преподавателей."
                buttonText="Перейти в каталог"
                onClick={() => setCurrentPage('lecturers')}
            />
        </main>
    )
}

export default Home