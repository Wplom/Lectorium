import './About.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import CtaBanner from '../../components/CtaBanner/CtaBanner'
const platformValues = [
    {
        id: 1,
        title: 'Экспертность',
        description: 'Мы работаем только с проверенными специалистами, имеющими практический опыт в своей области.',
        icon: '🎓'
    },
    {
        id: 2,
        title: 'Прозрачность',
        description: 'Честные условия, понятные тарифы и открытая информация о каждом лекторе и его программе.',
        icon: '🤝'
    },
    {
        id: 3,
        title: 'Индивидуальный подход',
        description: 'Мы помогаем подобрать формат обучения, который подходит именно вам или вашей компании.',
        icon: '🎯'
    }
]

function About({ setCurrentPage }) {
    return (
        <main className="about-page">
            {/* Главный блок с текстом из макета */}
            <PageHeader 
                label="О платформе"
                title="Мы упрощаем процесс подбора, бронирования и организации лекций, помогая находить экспертов, которые не просто делятся знаниями, но и вдохновляют аудиторию."
                description="Наша учебная платформа соединяет компании, образовательные учреждения и НКО с профессиональными лекторами."
            />

            <section className="about-stats">
                <div className="stat-item">
                    <strong>10+</strong>
                    <span>Лекторов-экспертов</span>
                </div>
                <div className="stat-item">
                    <strong>30+</strong>
                    <span>Учебных программ</span>
                </div>
                <div className="stat-item">
                    <strong>1000+</strong>
                    <span>Довольных студентов</span>
                </div>
            </section>

            {/* Блок с ценностями */}
            <section className="about-values">
                <div className="section-heading">
                    <span>Наши принципы</span>
                    <h2>Почему выбирают нас</h2>
                </div>
                
                <div className="values-grid">
                    {platformValues.map((value) => (
                        <article className="value-card" key={value.id}>
                            <div className="value-icon">{value.icon}</div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Блок призыва к действию */}
           <CtaBanner 
                label="Начните сегодня"
                title="Готовы найти своего наставника?"
                description="Ознакомьтесь с нашими лекторами и выберите того, кто поможет вам достичь ваших целей."
                buttonText="Перейти к лекторам"
                onClick={() => setCurrentPage('lecturers')}
            />
        </main>
    )
}

export default About