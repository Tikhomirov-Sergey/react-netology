
const configComponentWithAggregationProp = (column) => {

    return (Component) => {

        return class extends React.Component {

            params = { list:[] };

            render() {
                this.aggregation();

                return <Component {...this.params}/>
            }

            aggregation () {

                let newList = [];
                let addedKey = [];

                this.props.list.forEach((item) => {

                    const key = item[column];

                   if(addedKey.indexOf(key) === -1) {

                       addedKey.push(key);

                       let items = this.props.list.filter((value) => {
                          return  value[column] === key;
                       });

                       for(let i = 1; i < items.length; i++) {
                           items[i][column] = "";
                       }

                       newList = newList.concat(items);
                   }
                });

                this.params.list = newList;
            }
        }
    }
};


