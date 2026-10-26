import { useState } from 'react'
import './ReviewForm.css'

function ReviewForm({ onAddReview }) {
    const [author, setAuthor] = useState('')
    const [text, setText] = useState('')
    const [rating, setRating] = useState(5)

    function handleSubmit(e) {
        e.preventDefault()
        if (!author.trim() || !text.trim()) return

        const newReview = {
            id: Date.now(),
            author: author.trim(),
            text: text.trim(),
            rating: Number(rating),
            date: new Date().toLocaleDateString('ru-RU')
        }

        onAddReview(newReview)
        setAuthor('')
        setText('')
        setRating(5)
    }

    return (
        <form className="review-form" onSubmit={handleSubmit}>
            <h2>Оставить отзыв</h2>
            
            <div className="form-group">
                <label htmlFor="author">Ваше имя</label>
                <input 
                    type="text" 
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Введите имя"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="rating">Оценка</label>
                <select 
                    id="rating" 
                    value={rating} 
                    onChange={(e) => setRating(e.target.value)}
                >
                    <option value="5">5 звёзд</option>
                    <option value="4">4 звезды</option>
                    <option value="3">3 звезды</option>
                    <option value="2">2 звезды</option>
                    <option value="1">1 звезда</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="text">Текст отзыва</label>
                <textarea 
                    id="text" 
                    rows="4"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Поделитесь впечатлениями..."
                    required
                ></textarea>
            </div>

            <button type="submit" className="submit-btn">
                Отправить отзыв
            </button>
        </form>
    )
}

export default ReviewForm