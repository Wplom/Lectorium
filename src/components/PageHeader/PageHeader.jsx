import './PageHeader.css'

function PageHeader({ label, title, description }) {
    return (
        <section className="page-header">
            {label && <span>{label}</span>}
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </section>
    )
}

export default PageHeader