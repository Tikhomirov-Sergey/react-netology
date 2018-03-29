
const configComponentWithValidPropsForTable = (propsToValid) => {

    return (Component) => {

        return class extends React.Component {

            params = { list:[] };

            render() {
                this.allowPropertiesToValid();

                return <Component {...this.params}/>
            }

            allowPropertiesToValid () {

                this.props.list.forEach((item) => {

                    let newItem = {};

                    propsToValid.forEach((property) => {

                        const valueProps = item[property.keyOld];

                        if(valueProps) {

                            const keyNew = property.keyNew || property.keyOld;

                            newItem[keyNew] = property.toValid ? property.toValid(valueProps) : valueProps;
                        }
                    });

                    this.params.list.push(newItem);
                });
            }
        }
    }
};

const propsToValidMonthTable = [
    {
        keyNew:'month',
        keyOld:'date',
        toValid: (valueOld) => {
            return new Date(valueOld).getMonth();
        }
    },
    {
        keyOld:'amount'
    }
];

let getMountTableComponentWithValid = configComponentWithValidPropsForTable(propsToValidMonthTable);
let MountTableComponentWithValid = getMountTableComponentWithValid(MonthTable);

const propsToValidYearTable = [
    {
        keyNew:'year',
        keyOld:'date',
        toValid: (valueOld) => {
            return new Date(valueOld).getYear();
        }
    },
    {
        keyOld:'amount'
    }
];

let getYearTableComponentWithValid = configComponentWithValidPropsForTable(propsToValidYearTable);
let YearTableComponentWithValid = getYearTableComponentWithValid(YearTable);