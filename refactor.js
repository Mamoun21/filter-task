"use strict";
exports.__esModule = true;
function isEqualTo(value, column) {
    return column === value;
}
function isNotEqualTo(value, column) {
    return column !== value;
}
function startsWith(value, column) {
    return column.toString().startsWith(value);
}
function Contains(value, column) {
    return column.includes(value);
}
function doesNotContain(value, column) {
    return !column.includes(value);
}
function endsWith(value, column) {
    return column.endsWith(value);
}
function andLogic(value, column) {
    return value && column;
}
function orLogin(value, column) {
    return value || column;
}
var Opertions = {
    "Is equal to": isEqualTo,
    "Is not equal to": isNotEqualTo,
    "Starts with": startsWith,
    "Contains": Contains,
    "Does not contain": doesNotContain,
    "Ends with": endsWith
};
var LogicOpertion = {
    And: andLogic,
    Or: orLogin
};
function func1(column, value, opertion) {
    return opertion(value, column);
}
function func2(column, value, LogicOpertion, opertion) {
    if (value) {
        return opertion(value, column);
    }
    else {
        if (LogicOpertion === "And") {
            return true;
        }
        else {
            return false;
        }
    }
}
function func3(column, filterValues) {
    return (LogicOpertion[filterValues.compareValue](func1(column, filterValues.filter1Value.toLowerCase(), Opertions[filterValues.filter1By]), func2(column, filterValues.filter2Value.toLowerCase(), filterValues.compareValue, Opertions[filterValues.filter2By])));
}
function getInnervalueObject(obj, column) {
    return eval('obj' +
        column
            .split(".")
            .map(function (value) { return "['" + value + "']"; })
            .join(""));
}
exports.filterRows = function (rows, filterValues) {
    var column = filterValues.column;
    if (!filterValues.filter1Value) {
        return rows;
    }
    rows = rows.filter(function (row) {
        return func3(getInnervalueObject(row, column), filterValues);
    });
    return rows;
};
module.exports = { filterRows: exports.filterRows };
