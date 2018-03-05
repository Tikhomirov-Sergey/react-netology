'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      view: 'cardView'
    };

    this.view = {
        cardView: VIEW_MODULE,
        listView: VIEW_LIST
    };

    this.changeView = this.changeView.bind(this);
  }

  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.view[this.state.view]}
            onSwitch={this.changeView} />
        </div>
        {this.renderLayout(true)}
      </div>
    );
  }

  renderLayout(cardView) {
    if (this.state.view === 'cardView') {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (this.state.view === 'cardView') {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }

  changeView() {
    let nextView = this.state.view === 'cardView' ? 'listView' : 'cardView';

    this.setState({
        view: nextView
    });
  }
}
