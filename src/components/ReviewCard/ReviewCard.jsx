import './ReviewCard.css'

function ReviewCard({ review }) {
    return (
        <article className="review-card">
            <div className="review-header">
                <div className="review-author">
                    <div className="author-avatar">
                        {review.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h3>{review.author}</h3>
                        <span className="review-date">{review.date}</span>
                    </div>
                </div>
                <div className="review-rating">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </div>
            </div>
            <p className="review-text">{review.text}</p>
        </article>
    )
}

export default ReviewCard