import './PartnerCard.css'

function PartnerCard({ partner }) {
    return (
        <article className="partner-card">
            <img 
                    src={partner.logoUrl} 
                    alt={`Логотип ${partner.name}`} 
                    className="partner-logo-img"
                    onError={(e) => {
                        // Если картинки нет, показываем текст
                        e.target.style.display = 'none';
                        e.target.parentElement.innerText = partner.name;
                    }}
                />
            <div className="partner-content">
                <h2>{partner.name}</h2>
                <p>{partner.description}</p>
                {partner.website !== '#' && (
                    <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Перейти на сайт
                    </a>
                )}
            </div>
        </article>
    )
}

export default PartnerCard