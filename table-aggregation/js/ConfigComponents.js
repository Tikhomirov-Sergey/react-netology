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
let getMountTableComponentWithAggregationProp = configComponentWithAggregationProp('month');

let MountTableComponentWithAggregationProp = getMountTableComponentWithAggregationProp(MonthTable);
let MountTableComponentWithValid = getMountTableComponentWithValid(MountTableComponentWithAggregationProp);

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
let getYearTableComponentWithAggregationProp = configComponentWithAggregationProp('year');

let YearTableComponentWithAggregationProp = getYearTableComponentWithAggregationProp(YearTable);
let YearTableComponentWithValid = getYearTableComponentWithValid(YearTableComponentWithAggregationProp);



const columSort = 'date';

let sortFunction = (a, b) => {
    if(new Date(a[columSort]) < new Date(b[columSort])) return 1;
    if(new Date(a[columSort]) > new Date(b[columSort])) return -1;
};

let getComponentTableWithSort = configComponentTableWithSort(sortFunction);
let ComponentTableWithSort = getComponentTableWithSort(SortTable);
