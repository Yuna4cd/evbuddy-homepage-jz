
export default function RentSections() {
    const RENT_CARDS = [
        {
            title: "Start Earning Instantly",
            subtitle:
            "Hosts can turn their charger into an immediate source of income.",
            cards: [
                {
                    title: "1. Create a Profile",
                    description:
                    "Create a listing profile and verify your charger information.",
                },
                {
                    title: "2. Set It Up",
                    description:
                    "Set your schedule, pricing, hours & access.",
                },
                {
                    title: "3. Start Earning",
                    description:
                    "Accept requests and start earning from your bookings.",
                },
            ],
        },
        {
            title: "Start Charging Instantly",
            subtitle:
            "Drivers can use chargers with just 3 simple steps.",
            cards: [
                {
                    title: "1. Find & Filter",
                    description:
                    "Search nearby chargers with filters.",
                },
                {
                    title: "2. Book",
                    description:
                    "Book a charger session at an available station.",
                },
                {
                    title: "3. Charge",
                    description:
                    "Plug in, start charging, and continue your journey.",
                },
            ],
        },
        {
            title: "Why choose us?",
            subtitle: "Take Advantages from Us",
            cards: [
                {
                    title: "Faster",
                    description:
                    "Drive, charge, and go without long wait times.",
                },
                {
                    title: "Stable",
                    description:
                    "Instant bookings with upfront pricing & access.",
                },
                {
                    title: "Flexible",
                    description:
                    "Community-powered charging, anytime.",
                },
            ],
        },
    ];

    return (
        <div>
            <ul id="rent-cards">
                {RENT_CARDS.map((card, cardIndex) => (
                    <li className="rent-card" key={cardIndex} style={{"--index":cardIndex}}>
                        <div className="card-content">
                            <div className="content-header">
                                <h2>{card.title}</h2>
                                <p>{card.subtitle}</p>
                            </div>
                            <div className="info-container">
                                {card.cards.map((info, inforIndex) => (
                                    <div className="content-info" key={inforIndex}>
                                        <h3>{info.title}</h3>
                                        <p>{info.description}</p>
                                    </div>
                                ))}
                            </div>  
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}