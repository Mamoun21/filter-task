const { filterRows } = require('../filter');

const table = [
    { id: "15", category: "f", name: "asdasd" },
    { id: "17", category: "f", name: "asdasd" },
    { id: "15", category: "f", name: "asdasd" },
    { id: "17", category: "van", name: "omar" },
    { id: "1", category: "car", name: "abd" },
    { id: "5", category: "watch", name: "mamoun" },
    { id: "9", category: "ba", name: "nazal" }
]
//////////////Is Equal To
test('should be return empty list in equal to + And', () => {
    const FilterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    const FilterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "2",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, FilterFormValues)).toMatchObject(
        []
    );
    expect(filterRows(table, FilterFormValues2)).toMatchObject(
        []
    );
});
test('should be return table in equal to + And + OR ', () => {
    const FilterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: "2",
        compareValue: "And",
        column: "id",
    };
    const FilterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: "2",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, FilterFormValues)).toMatchObject(
        [
            { id: "15", category: "f", name: "asdasd" },
            { id: "17", category: "f", name: "asdasd" },
            { id: "15", category: "f", name: "asdasd" },
            { id: "17", category: "van", name: "omar" },
            { id: "1", category: "car", name: "abd" },
            { id: "5", category: "watch", name: "mamoun" },
            { id: "9", category: "ba", name: "nazal" }
        ]
    );
    expect(filterRows(table, FilterFormValues2)).toMatchObject(
        [
            { id: "15", category: "f", name: "asdasd" },
            { id: "17", category: "f", name: "asdasd" },
            { id: "15", category: "f", name: "asdasd" },
            { id: "17", category: "van", name: "omar" },
            { id: "1", category: "car", name: "abd" },
            { id: "5", category: "watch", name: "mamoun" },
            { id: "9", category: "ba", name: "nazal" }
        ]
    );

});
test('should be return list of id = 15 in equal to + And', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject(
        [
            { id: "15", category: "f", name: "asdasd" },
            { id: "15", category: "f", name: "asdasd" },
        ]
    );
    expect(filterRows(table, filterFormValues2)).toMatchObject(
        [
            { id: "15", category: "f", name: "asdasd" },
            { id: "15", category: "f", name: "asdasd" },
        ]
    );
});
test('should be return list of id = 15 in equal to + Or', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "15",
        compareValue: "OR",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "15",
        compareValue: "OR",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "2",
        compareValue: "OR",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
});
test('should be return list of id = 15 + id = 1 or 17 in equal to + Or', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "1",
        compareValue: "OR",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "17",
        compareValue: "OR",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
});
test('should be return empty list in equal to & not equal to + and', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
});
test('should be return list of id = 15 in equal to & not equal to + and ', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "2",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
});
test('should be return the table in equal to & not equal to + or', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list of id withot id = 17 in equal to & not equal to + or', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "17",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return all table in equal to & start with + And + OR ', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list of id = 15 in equal to & start with + and ', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
});
test('should be return empty list in equal to + start with + and', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "2",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "9",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);

});
test('should be return all id begin with 1 in equal to & start with + or', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: '15', category: 'f', name: 'asdasd' },
        { id: '17', category: 'f', name: 'asdasd' },
        { id: '15', category: 'f', name: 'asdasd' },
        { id: '17', category: 'van', name: 'omar' },
        { id: '1', category: 'car', name: 'abd' },
    ]);
});
test('should be return list of id = 15 and id = brgin 9 if exist in equal to & start with + or',()=>{
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "9",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "99",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        
    ]);
});
test('should be return all table in equal & contain',()=>{
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);

});
test('should be return list of id = 15 in equal to & contains + And ',()=>{
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "5",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
    expect(filterRows(table,filterFormValues3)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
});
test('should be return empty list in equal to & contains + and',()=>{
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "2",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "9",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([]);
});
test('should be return list of id = 15 plus in id contains 1 in equal to &  contains + or',()=>{
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" }, 
    ]);
});
test('should be return list of id = 15 plus in id contains 9 if exist in equal to &  contains + or',()=>{
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "9",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "9", category: "ba", name: "nazal" },
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        
    ]);
});
test('should be return all table in equal to & does not contains ',()=>{
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: "9",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: "9",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues3)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return empty list in equal to & Does not contains + and',()=>{
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "5",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
    ]);
    expect(filterRows(table,filterFormValues3)).toMatchObject([
    ]);
});
test('should be return list of id = 15 in equal to & Does not contains + and',()=>{
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "9",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "2",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
    expect(filterRows(table,filterFormValues3)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
});
test('should be return list of id = 15 and any id without id 5 if exist in equal to & Does not contains + or ',()=>{
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "5",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return all table  if 2 not exist in equal to & Does not contains + or ',()=>{
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "88",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return all list of id = 15 in equal to & Does not contains + or ',()=>{
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        
    ]);
});
test('should be return all table  in equal to & ends with',()=>{
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return empty list in equal to & ends with + and',()=>{
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    }; 
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "2",
        compareValue: "And",
        column: "id",
    };  
    expect(filterRows(table,filterFormValues)).toMatchObject([]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([]);
})
test('should be return list of id = 15 in equal to & ends with + and',()=>{
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "5",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);

});
test('should be return list of id = 15 and list end of id = 7 if exits in equal to & ends with + or',()=>{
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "7",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
});
/////////////////////////////////////////////////

//////////////////Is Not Equal to


/////////////////isEqual///////////////////
/////////////////And//////////////////////
test('should be returmn all table',()=>{
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
}),
test('should be return empty list',()=>{
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([]);
});
test('should be return all list without id = 15 in not equal to + equal + and',()=>{
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list with id = 9 ',()=>{
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "9",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "9", category: "ba", name: "nazal" }  
    ]);
});

//////////////OR/////////////
test('should be return all table',()=>{
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);

});
test('should be return list without id = 15',()=>{
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2= {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "999",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]); 
     expect(filterRows(table,filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

///////////////Is not Equal To////////////////

//////////////And////////////////////////////
test('should be return all table ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list without id = 15 ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    }; 
    const filterFormValues3 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };     
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]); 
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]); 
    expect(filterRows(table,filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]); 
});
test('should be return list without id = 15 and id = 9', () => {
    const filterFormValues={ 
        filter1By:"Is not equal to",
        filter1Value:"15",
        filter2By:"Is not equal to",
        filter2Value:"9",
        compareValue:"And",
        column:"id",
        };
        expect(filterRows(table,filterFormValues)).toMatchObject([
            { id: "17", category: "f", name: "asdasd" },
            { id: "17", category: "van", name: "omar" },
            { id: "1", category: "car", name: "abd" },
            { id: "5", category: "watch", name: "mamoun" },
        ]);
});

///////////////////OR//////////////////
test('should be return all table ', () => {
    const filterFormValues={ 
        filter1By:"Is not equal to",
        filter1Value:"15",
        filter2By:"Is not equal to",
        filter2Value:"17",
        compareValue:"Or",
        column:"id",
        };
        const filterFormValues2={ 
            filter1By:"Is not equal to",
            filter1Value:"15",
            filter2By:"Is not equal to",
            filter2Value:"99999",
            compareValue:"Or",
            column:"id",
        };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return all table without id = 15 ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    }; 
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]); 
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

////////////Starts with////////////////
///////////And////////////////////////
test('should be return all table with use AND or OR', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: "77",
        compareValue: "And",
        column: "id",
    }; 
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test(' should be return list without id = 15 start with 1 ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    }; 
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]); 

});
test('should be return empty list', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([]);
});
//////////////OR/////////////////////
test('should all table', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    }; 
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return all table without id = 15', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "9999",
        compareValue: "Or",
        column: "id",
    }; 
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);   
});

//////////////Contains//////////////////

/////////////And//////////////////////
test('should be return all table use And or OR', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: "99",
        compareValue: "And",
        column: "id",
    }; 
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return empty list', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([]);  
});
test('should be return all table without id = 15', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list with contain id = 1 and not equal id = 15', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    }; 
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
/////////////////OR/////////////
test('should return all table', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    }; 
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);   
});
test('should be return all table without id = 15', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "9999",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

/////////////////Does not contains////////////
/////////////////And////////////////////////
test('should be return all table use And or Or ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: "99",
        compareValue: "And",
        column: "id",
    }; 
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);  
});
test('should be return without id = 15 ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "9999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]); 
    expect(filterRows(table,filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]); 
});
test('should be return table without id = 15 and any row contain 1', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

//////////////////OR////////////////////
test('should be return all table ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "999",
        compareValue: "Or",
        column: "id",
    }; 
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return all table with id = 15', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]); 
    expect(filterRows(table,filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);   
});

//////////////////Ends with//////////////////
///////////////////And//////////////////////
test('should be return all table use And or Or', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: "999",
        compareValue: "Or",
        column: "id",
    }; 
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return empty list', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    }; 
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "9999",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([]);
});
test('should be return all table without id =15', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list with last elemnt = 7 ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "7",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },

    ]);
});

////////////////////OR////////////////////////
test('should be return all table without id = 15', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "9999",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "7",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]); 
    expect(filterRows(table,filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);  
});
test('should be return all', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };  
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]); 
});
//////////////////////////////