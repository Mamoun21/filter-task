const { filterRows } = require('./filter');
const table = [
    { id: "15", category: "f", name: "asdasd" },
    { id: "17", category: "f", name: "asdasd" },
    { id: "15", category: "f", name: "asdasd" },
    { id: "17", category: "van", name: "omar" },
    { id: "1", category: "car", name: "abd" },
    { id: "5", category: "watch", name: "mamoun" },
    { id: "9", category: "ba", name: "nazal" }
]
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
test('should be return list of id = 15 in equal to + Or',()=>{
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
test('should be return list of id = 15 + id = 1 or 17 in equal to + Or',()=>{
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
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
});