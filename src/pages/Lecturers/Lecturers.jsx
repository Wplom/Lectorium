import { useState } from 'react'
import { lecturersData } from '../../data/lecturers'
import LecturerCard from '../../components/LecturerCard/LecturerCard'
import LecturerDetails from '../../components/LecturerDetails/LecturerDetails'
import SearchFilter from '../../components/SearchFilter/SearchFilter' // <-- Импорт
import PageHeader from '../../components/PageHeader/PageHeader' // <-- Импорт
import './Lecturers.css'

function Lecturers() {
    const [selectedLecturer, setSelectedLecturer] = useState(null)
    const [searchQuery, setSearchQuery] = useState('') // <-- Состояние поиска

    // Логика фильтрации
    const filteredLecturers = lecturersData.filter(lecturer => {
        const query = searchQuery.toLowerCase()
        return (
            lecturer.name.toLowerCase().includes(query) ||
            lecturer.disciplines.some(d => d.title.toLowerCase().includes(query))
        )
    })

    if (selectedLecturer) {
        return (
            <main className="lecturers-page">
                <button 
                    className="back-btn" 
                    onClick={() => setSelectedLecturer(null)}
                >
                    ← Назад к списку
                </button>
                <LecturerDetails lecturer={selectedLecturer} />
            </main>
        )
    }

    return (
        <main className="lecturers-page">
            <PageHeader 
                label="Наши преподаватели"
                title="Найдите своего наставника"
                description="Выберите лектора, чтобы узнать подробнее о его программе и тарифах."
            />


            {/* Добавили компонент поиска */}
            <SearchFilter 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery} 
            />

            <section className="lecturers-grid">
                {filteredLecturers.length > 0 ? (
                    filteredLecturers.map(lecturer => (
                        <LecturerCard 
                            key={lecturer.id} 
                            lecturer={lecturer} 
                            onClick={() => setSelectedLecturer(lecturer)} 
                        />
                    ))
                ) : (
                    <p className="no-results">По вашему запросу ничего не найдено.</p>
                )}
            </section>
        </main>
    )
}

export default Lecturers