function Listing({items}) {

    items = items.map((item) => {
        return (
            <Card key={item.listing_id} card={item}/>
        );
    });

    return (
        <div className="wrapper">
            {items}
        </div>
    );
}