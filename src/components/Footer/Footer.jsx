import './Footer.css'

function Footer({ setCurrentPage }) {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h2>Лекториум</h2>
                    <p>Платформа для поиска профессиональных лекторов и организации обучения.</p>
                </div>
                
                <div className="footer-links">
                    <h3>Навигация</h3>
                    <button onClick={() => setCurrentPage('home')}>Главная</button>
                    <button onClick={() => setCurrentPage('lecturers')}>Лекторы</button>
                    <button onClick={() => setCurrentPage('reviews')}>Отзывы</button>
                    <button onClick={() => setCurrentPage('about')}>О нас</button>
                </div>

                <div className="footer-contacts">
                    <h3>Контакты</h3>
                    <p>info@lectorium.ru</p>
                    <p>+7 (999) 123-45-67</p>
                    <p>Москва, ул. Образцовая, 10</p>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Лекториум. Все права защищены.</p>
            </div>
        </footer>
    )
}

export default Footer