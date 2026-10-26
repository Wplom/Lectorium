import './LecturerCard.css'

function LecturerCard({ lecturer, onClick }) {
    return (
        <article className="lecturer-card" onClick={onClick}>
            <div className="lecturer-photo-wrapper">
                <img 
                    src={lecturer.photo} 
                    alt={lecturer.name} 
                    className="lecturer-photo"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300?text=Фото' // Заглушка, если фото нет
                    }}
                />
            </div>
            <div className="lecturer-info">
                <h3>{lecturer.name}</h3>
                <p className="lecturer-degree">Учёная степень:{lecturer.degree}</p>
                <p className="lecturer-subject">{lecturer.disciplines[0].title}</p>
                <button className="lecturer-btn">Подробнее</button>
            </div>
        </article>
    )
}

export default LecturerCard