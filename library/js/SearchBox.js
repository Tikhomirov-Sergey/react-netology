

class SearchBox extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.search = this.search.bind(this);
    }

    search() {
        let value = search.value;
        this.props.filterBooks(value);
    }

    render() {
        return (
            <input type="text" id="search" placeholder="Поиск по названию или автору" value={this.props.value}  onChange={this.search}/>
        );
    }
};