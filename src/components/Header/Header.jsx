import './Header.css'

function Header({ currentPage, setCurrentPage, isDarkTheme, toggleTheme }) {
    const navigationItems = [
        { id: 'home', title: 'Главная' },
        { id: 'partners', title: 'Партнёры' },
        { id: 'about', title: 'О нас' },
        { id: 'lecturers', title: 'Лекторы' },
        { id: 'reviews', title: 'Отзывы' },
        { id: 'login', title: 'Вход' }
    ]

    return (
        <header className="header">
            <button
                className="header-logo"
                onClick={() => setCurrentPage('home')}
            >
                Лекториум
            </button>

            <nav className="navigation">
                {navigationItems.map((item) => (
                    <button
                        key={item.id}
                        className={
                            currentPage === item.id
                                ? 'navigation-link active'
                                : 'navigation-link'
                        }
                        onClick={() => setCurrentPage(item.id)}
                    >
                        {item.title}
                    </button>
                ))}
            </nav>

            <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Переключить тему"
            >
                {isDarkTheme ? '☀ Светлая' : '☾ Тёмная'}
            </button>
        </header>
    )
}

export default Header