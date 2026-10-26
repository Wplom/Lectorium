import { useState } from 'react'
import { initialReviews } from '../../data/reviews'
import ReviewCard from '../../components/ReviewCard/ReviewCard'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import PageHeader from '../../components/PageHeader/PageHeader' // <-- Импорт
import './Reviews.css'

function Reviews() {
    const [reviews, setReviews] = useState(initialReviews)

    function handleAddReview(newReview) {
        setReviews([newReview, ...reviews])
    }

    return (
        <main className="reviews-page">
           <PageHeader 
                label="Отзывы"
                title="Что говорят наши студенты"
                description="Реальные истории обучения на платформе."
            />


            <div className="reviews-layout">
                <div className="reviews-list">
                    {reviews.map(review => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>

                <aside className="reviews-sidebar">
                    <ReviewForm onAddReview={handleAddReview} />
                </aside>
            </div>
        </main>
    )
}

export default Reviews