
const currencies = {
    "USD": "$",
    "EUR": "€",
    "GBP": "GBP"
};

function Card({card}) {

    console.log(card);

    const currency = currencies[card.currency_code] || "GBP";
    const quantity = card.quantity;

    let classQuantity = "item-quantity ";

    // Что-то ничего лучше 3-х if или switch с true не придумал
    switch (true) {
        case (quantity > 20):
            classQuantity += "level-high";
            break;
        case (quantity < 10):
            classQuantity += "level-low";
            break;
        default:
            classQuantity += "level-medium";
    }

    return (
        <div className="item-list">
            <div className="item">
                <div className="item-image">
                    <a href={card.url}>
                        <img src={card.MainImage.url_570xN}/>
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{card.title}</p>
                    <p className="item-price">{currency + card.price}</p>
                    <p className={classQuantity}>{quantity} left</p>
                </div>
            </div>
        </div>
    );
}

Card.defaultProps = { currency_code : 'GBP' };