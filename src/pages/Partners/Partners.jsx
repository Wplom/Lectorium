import partners from '../../data/partners'
import PartnerCard from '../../components/PartnerCard/PartnerCard' // <-- Добавили импорт
import PageHeader from '../../components/PageHeader/PageHeader' // <-- Импорт
import CtaBanner from '../../components/CtaBanner/CtaBanner'
import './Partners.css'

function Partners() {
    return (
        <main className="partners-page">
            <PageHeader 
                label="Наши партнёры"
                title="Вместе создаём возможности для обучения"
                description="Платформа сотрудничает с компаниями и образовательными организациями, заинтересованными в развитии профессиональных знаний."
            />
            <section className="partners-grid">
                {partners.map((partner) => (
                    /* Используем компонент, передавая в него данные */
                    <PartnerCard 
                        key={partner.id} 
                        partner={partner} 
                    />
                ))}
            </section>

             <CtaBanner 
                label="Сотрудничество"
                title="Хотите стать партнёром платформы?"
                description="Оставьте заявку, чтобы обсудить проведение образовательных мероприятий и совместных проектов."
                buttonText="Стать партнёром"
            />
        </main>
    )
}

export default Partners