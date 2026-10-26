import { useState } from 'react'
import './Login.css'

function Login({ setCurrentPage }) {
    const [isRegister, setIsRegister] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        // Заглушка для имитации входа
        alert(isRegister ? 'Регистрация успешна!' : 'Вход выполнен!')
        setCurrentPage('home')
    }

    return (
        <main className="login-page">
            <div className="login-container">
                <div className="login-header">
                    <h1>{isRegister ? 'Создать аккаунт' : 'Вход в систему'}</h1>
                    <p>{isRegister ? 'Присоединяйтесь к нашей платформе' : 'Рады видеть вас снова'}</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    {isRegister && (
                        <div className="form-group">
                            <label>Ваше имя</label>
                            <input 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                placeholder="Иван Иванов"
                                required
                            />
                        </div>
                    )}
                    
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="example@mail.ru"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Пароль</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn">
                        {isRegister ? 'Зарегистрироваться' : 'Войти'}
                    </button>
                </form>

                <div className="login-footer">
                    <p>
                        {isRegister ? 'Уже есть аккаунт?' : 'Нет аккаунта?'}
                        <button type="button" onClick={() => setIsRegister(!isRegister)}>
                            {isRegister ? 'Войти' : 'Зарегистрироваться'}
                        </button>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Login