import "./NewsHeader.css"

export default function NewsHeader() {
    const newsCards = [

    ]

    return (
        <section className="header-section">
            <h1>News</h1>
            <p>Learn about the newest EV Topics & Stay Updated with Us!</p>
            <div className="news-search">
                <input
                    type="text"
                    placeholder="Search posts..."
                    className="news-search-input"
                />
                <button>Explore</button>
            </div>
        </section>
    )
}