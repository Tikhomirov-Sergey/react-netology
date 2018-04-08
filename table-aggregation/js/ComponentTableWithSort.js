const configComponentTableWithSort = (sortFunction) => {

    return (Component) => {

        return class extends React.Component {

            params = { list:[] };

            render() {
                this.sortList();

                return <Component {...this.params}/>
            }

            sortList () {
                this.params.list = this.props.list;

                if(this.params.list[0] && this.params.list[0][columSort]) {
                    this.params.list = this.params.list.sort(sortFunction);
                }
            }
        }
    }
};
