
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

                       let value = 0;

                       items.forEach((item) => {
                           value+= item.amount;
                       });

                       let newRow = {};

                       newRow[column] = key;
                       newRow['amount'] = value;

                       newList = newList.concat(newRow);
                   }
                });

                this.params.list = newList;
            }
        }
    }
};


