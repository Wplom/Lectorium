import './CtaBanner.css'

function CtaBanner({ label, title, description, buttonText, onClick }) {
    return (
        <section className="cta-banner">
            <div>
                {label && <span>{label}</span>}
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            {buttonText && (
                <button onClick={onClick}>
                    {buttonText}
                </button>
            )}
        </section>
    )
}

export default CtaBanner