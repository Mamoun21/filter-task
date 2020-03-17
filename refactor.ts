function isEqualTo(value: string, column: string) {
    return column === value;
}
function isNotEqualTo(value: string, column: string) {
    return column !== value;
}
function startsWith(value: string, column: string) {
    return column.toString().startsWith(value)
}
function Contains(value: string, column: string) {
    return column.includes(value);
}
function doesNotContain(value: string, column: string) {
    return !column.includes(value);

}
function endsWith(value: string, column: string) {
    return column.endsWith(value);

}
function andLogic(value: boolean, column: boolean): boolean {
    return value && column
}
function orLogin(value: boolean, column: boolean): boolean {
    return value || column;

}
interface Iopertions {
    "Is equal to": (value: string, column: string) => boolean,
    "Is not equal to": (value: string, column: string) => boolean,
    "Starts with": (value: string, column: string) => boolean,
    "Contains": (value: string, column: string) => boolean,
    "Does not contain": (value: string, column: string) => boolean,
    "Ends with": (value: string, column: string) => boolean,
}
const Opertions: Iopertions = {
    "Is equal to": isEqualTo,
    "Is not equal to": isNotEqualTo,
    "Starts with": startsWith,
    "Contains": Contains,
    "Does not contain": doesNotContain,
    "Ends with": endsWith,
};
type test = (value: string, column: string) => boolean;
const LogicOpertion = {
    And: andLogic,
    Or: orLogin,
};

function func1(column: string, value: string, opertion: test) {
    return opertion(value, column);
}
function func2(column: string, value: string, LogicOpertion: string, opertion: test) {
    if (value) {
        return opertion(value, column);
    } else {
        if (LogicOpertion === "And") {
            return true
        } else {
            return false;
        }
    }
}
function func3(column: string, filterValues: FilterFormValues) {
    return (
        LogicOpertion[filterValues.compareValue]
            (
                func1(column, filterValues.filter1Value.toLowerCase(), Opertions[filterValues.filter1By]),
                func2(column, filterValues.filter2Value.toLowerCase(), filterValues.compareValue, Opertions[filterValues.filter2By])
            )
    )
}
type FilterOptions =
    | "Is equal to"
    | "Is not equal to"
    | "Starts with"
    | "Contains"
    | "Does not contain"
    | "Ends with";

type CompareOptions = "And" | "Or";

export type FilterFormValues = {
    filter1By: FilterOptions;
    filter1Value: string;
    filter2By: FilterOptions;
    filter2Value: string;
    compareValue: CompareOptions;
    column?: (keyof Column)| string;
};
export interface Column {
    id: string;
    category: string;
    name: string | Object;
}
function getInnervalueObject(obj: Column, column: string) {
    return eval(
        'obj'+
        column
          .split(".")
          .map(value => `['${value}']`)
          .join("")
    );
  }
export const filterRows = (rows: Column[], filterValues: FilterFormValues): Column[] => {
    const column:(keyof Column )|string = filterValues.column;
    if (!filterValues.filter1Value) {
        return rows;
    }
    rows = rows.filter(
        row =>
            func3(getInnervalueObject(row, column), filterValues)
    );
    return rows;
}
module.exports = { filterRows }