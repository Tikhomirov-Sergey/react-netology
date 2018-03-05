'use strict'

class App extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            filter: 'All'
        };

        this.projects = this.props.projects;

        this.onSelectFilter = this.onSelectFilter.bind(this);
    }

    render() {
        return (
            <div>
                <Toolbar
                    filters={this.props.filters}
                    selected={this.state.filter}
                    onSelectFilter={this.onSelectFilter} />
                <Portfolio projects={this.projects} />
            </div>
        );
    }

    onSelectFilter(filter) {
        if (filter === "All") {
            this.projects = this.props.projects;
        } else {
            this.projects = this.props.projects.filter((item) => {
                return filter === item.category;
            });
        }

        this.setState({
            filter
        });
    }
}