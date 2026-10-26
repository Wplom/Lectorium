import './LecturerDetails.css'

function LecturerDetails({ lecturer }) {
    return (
        <div className="details-wrapper">
            <div className="details-header">
                <img 
                    src={lecturer.photo} 
                    alt={lecturer.name} 
                    className="details-photo"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/300x300?text=Фото' }}
                />
                <div className="details-info">
                    <h1>{lecturer.name}</h1>
                    <p><strong>Образование:</strong> {lecturer.education}</p>
                    <p><strong>Стаж:</strong> {lecturer.experience}</p>
                    <p><strong>Учёная степень:</strong> {lecturer.degree}</p>
                </div>
            </div>

            <div className="details-disciplines">
                <h2>Преподаваемые дисциплины</h2>
                {lecturer.disciplines.map((disc, index) => (
                    <div className="discipline-block" key={index}>
                        <h3>{disc.title}</h3>
                        <p className="disc-desc">{disc.description}</p>
                        <ol className="topics-list">
                            {disc.topics.map((topic, i) => (
                                <li key={i}>{topic}</li>
                            ))}
                        </ol>
                    </div>
                ))}
            </div>

            <div className="details-tariffs">
                <h2>Тарифы</h2>
                <div className="tariffs-grid">
                    {lecturer.tariffs.map((tariff, index) => (
                        <div className="tariff-card" key={index}>
                            <span>{tariff.type}</span>
                            <strong>{tariff.price}</strong>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LecturerDetails