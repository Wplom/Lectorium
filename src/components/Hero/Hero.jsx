import './Hero.css'

function Hero({ setCurrentPage }) {
    return (
        <section className="hero">
            <div className="hero-content">
                <span className="hero-label">
                    Учебная платформа
                </span>
                <h1>
                    Находите<br />
                    преподавателей и<br />
                    получайте новые<br />
                    знания
                </h1>
                <p>
                    Наша учебная платформа соединяет компании, образовательные
                    учреждения и НКО с профессиональными лекторами, спикерами и тренерами.
                    Мы упрощаем процесс подбора, бронирования и организации лекций,
                    помогая находить экспертов, которые не просто делятся знаниями,
                    но и вдохновляют аудиторию.
                </p>
                <div className="hero-actions">
                    <button
                        className="primary-button"
                        onClick={() => setCurrentPage('lecturers')}
                    >
                        Найти лектора
                    </button>
                    <button
                        className="secondary-button"
                        onClick={() => setCurrentPage('about')}
                    >
                        О платформе
                    </button>
                </div>
            </div>

            <div className="hero-visual">
                <img 
    src="/images/hero-photo.jpg" 
    alt="Знания от специалистов" 
    className="hero-image" 
/>
                <h2>Знания от специалистов</h2>
                <p>
                    Онлайн- и офлайн-занятия по<br />
                    различным направлениям
                </p>
            </div>
        </section>
    )
}

export default Hero