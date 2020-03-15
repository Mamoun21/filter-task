const { filterRows } = require('../refactor');

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

//////////Is equal to/////////
////And/////////////
test('should be return empty list of is equal to 15 + is equal to 1 & 2 (AND)', () => {
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
test('should be return table when use (in equal to ) + (And + OR)', () => {
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
test('should be return list of is equal to 15 + is equal 15 & null (AND)', () => {
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

////OR//////////
test('should be return list of list of is equal to 15 + is equal 15 & null & 2 (OR) ', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "2",
        compareValue: "Or",
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
test('should be return list of is equal to 15 + is equal 1 & 17 (OR)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "17",
        compareValue: "Or",
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

/////////Is not equal to///////////
///AND///////
test('should be return all table when use (Is not equal to) + (And + OR)', () => { 
    const FilterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: "17",
        compareValue: "And",
        column: "id",
    };
    const FilterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Is not equal to",
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
test('should be return empty list of is equal to 15 + is not equal to 15 (AND)', () => {
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
test('should be return list of is equal to 15 + is not equal to 1 & 999 (AND)  ', () => {
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
        filter2Value: "9999",
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

/////OR//////
test('should be return list of is equal to 15 + is not equal to 15 (OR)', () => {
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
test('should be return list of is equal to 15 + is not equal to 17 & null(OR)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "17",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "",
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
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
});

///////////Starts with////////////
/////AND///////
test('should be return all table in (equal to & start with) + (And + OR)', () => {
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

/////OR/////
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
test('should be return list is equal to 15 + starts with 9 & 8888 (OR)', () => {
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
        filter2Value: "8888",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },

    ]);
});

////////Contains//////
///AND///////
test('should be return all table in equal & contain + (AND + OR)', () => {
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
test('should be return list of id = 15 in equal to & contains + And ', () => {
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
test('should be return empty list in equal to & contains + and', () => {
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
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
});

////OR/////
test('should be return list of is equal to 15 + contains 1 (OR)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Contains",
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
    ]);
});
test('should be return list of is equal to 15 + contains 9 & null (OR)', () => {
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
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "9", category: "ba", name: "nazal" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },

    ]);
});

////////Does not contain//////////
///AND/////////
test('should be return all table in equal to & does not contains + (AND + OR) ', () => {
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
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return empty list in equal to 15 + Does not contains 1 & 5 & 15  (AND)', () => {
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
    expect(filterRows(table, filterFormValues)).toMatchObject([
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
    ]);
});
test('should be return list of  is equal to 15 + Does not contains 9 & 8888 & null  (AND)', () => {
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
        filter2Value: "8888",
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

////OR//////
test('should be return list of is equal to 15 + does not contain 5 (OR) ', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "5",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list of is equal to 15 + does not contain 888 (OR) ', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "888",
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
test('should be return all list is equal to 15 + does not contain null (OR) ', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },

    ]);
});

////////Ends with///////
////AND////
test('should be return all table  in equal to + ends with', () => {
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
test('should be return empty list in equal to + ends with (AND)', () => {
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
        filter2Value: "8888",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
})
test('should be return list of is equal to 15 + ends with 5 & null (AND)', () => {
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

/////OR//////
test('should be return list is equal to 15 + ends with 7 & null & 15  (OR)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "7",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
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
/////////////////////////////////////////////////

//////////////////Is Not Equal to


/////////////////isEqual///////////////////
/////////////////And//////////////////////
test('should be returmn all table when use (is Equal to) + (AND or OR)', () => {
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
}),
    test('should be return empty list of is not equal to 15  + is equal to 15 & 999 (AND) ', () => {
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
        expect(filterRows(table, filterFormValues)).toMatchObject([]);
        expect(filterRows(table, filterFormValues2)).toMatchObject([]);
    });
test('should be return list of is not equal to 15 + is equal to null (AND)', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list of is not equal to 15 + is equal to 9 (AND) ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "9",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

//////////////OR/////////////
test('should be return list of is not equal to 15 + is equal 15 (OR)', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
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
test('should be return list is not equal to 15 + is equal to 1 & null & 9999 (OR)', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
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
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

///////////////Is not Equal To////////////////

//////////////And////////////////////////////
test('should be return when use (is not equal to)  + (And or OR) ', () => {
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
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
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
test('should be return list of is not equal to 15 + is not equal to 15 & null (AND)', () => {
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
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list of is not equal to 15 + is not equal to 9 (AND)', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "9",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
    ]);
});

///////////////////OR//////////////////
test('should be return list of is not equal to 15 + is equal to 17 & 999 (OR) ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "17",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "99999",
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
test('should be return list of is not equal to 15 + is not equal 15 & null (OR) ', () => {
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
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

////////////Starts with////////////////
///////////And////////////////////////
test('should be return all table when use (Starts with) + ( AND or OR)', () => {
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
test(' should be return list of is not equal to 15 + starts with 1 (AND) ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);

});
test('should be return empty list of is not equal to 15 + starts with 15 & 999 (AND) ', () => {
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
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
});
//////////////OR/////////////////////
test('should be return list of is not equal to 15 + starts with 15 & 1 (OR)', () => {
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
test('should be return list of is not equal to 15 + starts with 999 & null (OR)', () => {
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
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

//////////////Contains//////////////////

/////////////And//////////////////////
test('should be return all table when use (Contains) + (And or OR)', () => {
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
test('should be return empty list of is not equal to + contains 15 & 999 (AND)', () => {
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
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
});
test('should be return list of is not equal to 15 + contains null (AND)', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list of is not equal to 15 + contains 1 (AND) ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
/////////////////OR/////////////
test('should return list of is not equal to 15 + contains 1 & 15 (OR)', () => {
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
test('should be return list of is not equal to 15 + contains 999 & null (OR)', () => {
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
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

/////////////////Does not contains////////////
/////////////////And////////////////////////
test('should be return all table when use (Does not contain) + ( And or Or) ', () => {
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
test('should be return list of is not equal to 15 + does not contain 999 & null & 15 (AND)  ', () => {
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
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list of is not equal to 15 + does not contain  (AND)', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

//////////////////OR////////////////////
test('should be return list of is not equal to 15 + does not contain 999 (OR) ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "999",
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
test('should be return list of is not equal to 15 + does not contain 1 & 15 & null (OR)', () => {
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
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

//////////////////Ends with//////////////////
///////////////////And//////////////////////
test('should be return all table when use (Ends with) + ( And or Or)', () => {
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
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
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
test('should be return empty list of is not equal to 15 + ends with 999  (AND)', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
});
test('should be return list of is not equal to 15 + ends with null (AND)', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list of is not equal to 15 + ends with 7 (AND) ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "7",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },

    ]);
});

////////////////////OR////////////////////////
test('should be return list of is not equal to 15 + ends with 999 & null (OR)', () => {
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
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list of is not equal to 15 + ends with 15 (OR)', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "15",
        filter2By: "Ends with",
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
//////////////////////////////

///////////////////Starts with

///////////////////Is equal to/////////////////
////////////////And////////////////////
test('should be return all table when use (is equal to ) + (And or Or)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: "999",
        compareValue: "And",
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
test('should be return list of starts with 15 + is equal to 15 & null (AND)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "15",
        filter2By: "Is equal to",
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
test('should be return empty list of starts with 15 + is equal to 999 (AND)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "99999",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
});
test('should be return list of starts with 1 + is equal to 1 (AND)  ', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Is equal to",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "1", category: "car", name: "abd" },
    ])
});
///////////////////OR//////////////////////////
test('should  be return list starts with 15 + is equal 15 & null & 999 (OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Starts with",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "9999",
        compareValue: "Or",
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
test('should be return list of starts with 1 + is equal to 15 & 999 (OR) ', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Is equal to",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Is equal to",
        filter2Value: "999",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Is equal to",
        filter2Value: "9",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

//////////////////Is not equal to//////////////
//////////////////And///////////////////////
test('should be return all table when use (is not equal to ) + (And or OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: "999",
        compareValue: "And",
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
test('should be return list of starts with 1 + is not equal to 999 & null (AND)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Is not equal to",
        filter2Value: "9999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Is not equal to",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
test('should be return list of Starts with 1 + is not equal to 15 (AND) ', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Is not equal to",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
/////////////////OR////////////////////
test('should be retuen all table when use starts with 1 + is not equal to 15 & 999 (OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Is not equal to",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Is not equal to",
        filter2Value: "999",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Is not equal to",
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
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list of starts with 1+ is not equal null (OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Is not equal to",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});

///////////////////Starts with/////////////////
///////////////////And//////////////////////
test('should be return all table when use (Starts with) + ( And or Or)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: "999",
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
test('should be return list of statrs with 1+ starts with 1 & null (AND)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Starts with",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Starts with",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
})
test('should be return empty list of starts with 1 + starts with 9 & 999 (AND)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Starts with",
        filter2Value: "99999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Starts with",
        filter2Value: "9",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
});

//////////////////OR/////////////////
test('should be return list of starts with 1+ starts with 1 & 999 & null  (OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Starts with",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Starts with",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Starts with",
        filter2Value: "999",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
test('should be return list of starts with 1 + starst with 9 (OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Starts with",
        filter2Value: "9",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
})

////////////////////Contains/////////////
///////////////////And//////////////////
test('should be return all table when use (contains) + (And or OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: "999",
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
test('should be return empty list of starts with 1 + contain 9 & 999 (AND)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Contains",
        filter2Value: "9",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Contains",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
});
test('should be return list of starts with 1 + contains 1 & null (AND)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Contains",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Contains",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
test('should be return list starts with 1 and contain 15 (AND)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Contains",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
});
/////////////////////OR///////////////////////
test('should be return list of starts with 1 + contains 1 & null (OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Contains",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Contains",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Contains",
        filter2Value: "99999",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
test('should be return list of start with 1 + contains 9 (OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Contains",
        filter2Value: "9",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

///////////////////////Does not contain//////////////
//////////////////////and//////////////////////
test('should be return all table when use (Start with) + (And or OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: "999",
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
test('should be return empty list of starts with 1 + does not contain 1 (AND)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Does not contain",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
});
test('should be return list of starts with 1 + does not contain 9 & null (AND) ', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Does not contain",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Does not contain",
        filter2Value: "9",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Does not contain",
        filter2Value: "99999",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
test('should be return list of starts with 1 and does not contain 15 (AND)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Does not contain",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
////////////////OR////////////////////
test('should be return all table of starts with 1 + does not contain 1 & 999 (OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Does not contain",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Does not contain",
        filter2Value: "9999",
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
test('should be return list of start with 1 + does not contain null (OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Does not contain",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
test('should be return list of starts with 1 and does not contain 9 (OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Does not contain",
        filter2Value: "9",
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

    ]);
});

/////////////////////////Ends with//////////////////
//////////////////////And///////////////////////
test('should be return all table when use (Ends with) + (And or Or)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: "999",
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
test('should be return list of starts with 1 and end with 7 (AND)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Ends with",
        filter2Value: "7",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
});
test('should be return empty list of starts with 1 + ends with 999 (AND)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Ends with",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([

    ]);
});
test('should be return list of start with 1 and end with null (AND)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Ends with",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
/////////////////////OR//////////////
test('should be return list of starts with 1 and ends with 7 (OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Ends with",
        filter2Value: "7",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
test('should be return list of starts with 1 + ends with 1 & 999  (OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Ends with",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Ends with",
        filter2Value: "999",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Ends with",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
///////////////////////////////////////

/////////////////////Contains

////////////////////Is equal to////////////////////
///////////////////And////////////////////////
test('should  be return all table when use (Is equal to) + (And or OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: "1",
        compareValue: "And",
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
test('should  be return list of contains 15 + is equal to 15 & null (AND)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is equal to",
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
test('should be return empty list when use contains 15 +  is equal to 1 & 999 & 5 (AND)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "5",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([]);
});
//////////OR////////////////
test('should be return list of contain 15 and equal 1 (OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
test('should be return list of Contain 15 + is equal 15 & null & 999 (OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "999",
        compareValue: "Or",
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

///////////IS not equal to //////////////
/////////////And///////////////////
test('should be return all table when use (Is not equal to) + (And or Or)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: "1",
        compareValue: "And",
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
test('should be return list of contain 15 + is not equal to 9 & null & 9999 (AND)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "9",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "999",
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
test('should be return empty list when use contains 15 + is not equal to 15 (AND) ', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
});

////////////OR/////////////
test('should be return list of Contains 15 + is not equal to 999 & 15 (OR)  ', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "999",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
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
test('should be return list of contain 15 and not equal 1 (OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list of contain 15 + is not equal to null (OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
});

/////////////////Starts with///////////////
/////////////////And/////////////////////
test('should be return all table when use (Starts with) + (And or OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: "999",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Starts with",
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
test('should be return list of contain 15 and start with 1 and 15 (AND) ', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "1",
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
test('should be return empty list of contain 15 and starts with 5 and 9 (AND)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "9",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "5",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
});
///////////////OR////////////////////
test('should be return list of contain 15 and start with 1 and 9 (OR) ', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "9",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
test('should be return list of coyain 15 and start with 15 and 999 (OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "9999",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "",
        compareValue: "Or",
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

////////////////Contains//////////////////
///////////////And//////////////////////
test('should be return all table when use (Contains) + (And or Or)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: "999",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: "15",
        compareValue: "And",
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
test('should be return list of Contain 15 and contain 15 + 1  (AND)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "1",
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
test('should be return empty list when use (contain 15 and contain 9 or 9999) (AND)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "9",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
});
//////////////OR//////////////////
test('should be return list of contain 15 + contain 9 & 1  (OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "9",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
test('should  be return list of contaimn 15 + contain 15 & 9999 (OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "9999",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "",
        compareValue: "Or",
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

////////////////////Does not contain/////////////////
///////////////////And//////////////////////////////
test('should be return all table when use (Does not contain) + (And and Or)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Does not contain",
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
test('should be return list of contain 15 + not contain 9 & 9999  (AND)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "9",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "9999",
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
test('should be return empty list of conatin 15 + not contain 1 & 15 (AND)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
});
/////////////OR///////////////////////
test('should be return list of contains 15 + does not contain 999 & 15 (OR) ', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "999",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Does not contain",
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
test('should be return list of contain 15 + not contain 1 & 9 (OR) ', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "9",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
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
    ]);
});
test('should be return list of contain 15 + does not contain null (OR) ', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
});

//////////////////Ends with///////////////////
/////////////////And///////////////////////
test('should be return all table when use (Ends with) + (And or Or)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Ends with",
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
test('should be return list of contain 15 + ends with 5 (AND)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "5",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
});
test('should be return list of contain 15 + ends with 1 & 9 (AND) ', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "9",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
});
///////////////////OR/////////////////
test('should be return list of contain 15 + ends with 5 & 9 (OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "5",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "9",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "5", category: "watch", name: "mamoun" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list of Contain 15 + ends with 15  & 9999 (OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "999",
        compareValue: "Or",
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
////////////////////////////////////////////////

/////////////////Does not contain

////////////////Is equal to////////////
////////////////And/////////////
test('should be return all table when use (Is equal to) + (And or Or)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Is equal to",
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
test('should be return list of does not contain 15 and equal 1 (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "1", category: "car", name: "abd" },
    ]);
});
test('should be return list of does not contain 15 + is equal to 9999 & 15 (AND) ', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
});
test('should be return list of does not contain 15 + is equal to null (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);

});
/////////////OR//////////////////
test('should be return list of does not contain 15 + is equal 1 & 999 (OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "99999",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return all table when use does not contain 15 + is equal 15 (OR) ', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is equal to",
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

///////////////Is not equal to////////////////

/////////////And/////////////////
test('should be return all table when use (Is not equal to) +(And or OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "",
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
test('should be return list of Does not contain 15 + not equal 999 + 15 + null (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list of Does not contain 15 + not equal 1 (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
/////////////OR/////////////////
test('should be return list of Does not contain 15 + not equal 999 + 1 (OR) ', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "999",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is not equal to",
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
test('should be return list of Does not contain 15 + not equal 15 + null (OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

//////////////Starts with///////////////

///////////////And//////////////
test('should be return all table when use (Starts with) + (And or OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Starts with",
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
test('should be return list of does not contain 15 + starts with 1 & 8 & 15 (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "8",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
test('should be return list of does not cotain 15 + starts with null (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

//////////////OR////////////////
test('should be return list of does not contain + start with 1 & 15 (OR) ', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Starts with",
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
test('should be return list of does not contain + starts with 8 & null (OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "8",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

/////////////////contains/////////////////

///////////And////////////////////
test('should be return all table when use (Contains) + (And or Or)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Contains",
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
test('should be return empty when use does not contain 15 + contain 15 & contain 999 (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "999999",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
});
test('should be return list of does not contain 15 + contain 1 (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
test('should be return list of does not contain 15 + contain null (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

/////////////OR////////////////
test('should be return list of does not contain 15 + contain 15 & 9999 (OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "9999",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list of does not contain 15 + contain 1 & 15 (OR) ', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Contains",
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

/////////////////Does not contain///////////

////////////And//////////////////
test('should be return all table when use (Does not contain)+(And or Or)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Does not contain",
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
test('should be return list of dose not contain 15+ does not contain 1 (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list of does not contain 15 + does not contain 15 & 999 & null (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "9999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "null",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

///////////OR///////////
test('should be return list of does not contain 15 + does not contain 15 & 999 & null (OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list of does not contain 15 + does not contain 9999 (OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "999",
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

/////////////////Ends with///////////////

/////////////And////////////////////
test('should be return all table when use (Ends with) + (AND or OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Ends with",
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
test('should be return list of does not contain 15 + ends with 15 & 9999 (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
});
test('should be return list of does not contain 15 + ends with 7 (AND) ', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "7",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },

    ]);
});
test('should be return list of does not contain 15 + ends with null (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
//////////OR/////////////////////////
test('should be return list of does not contain 15 + ends with 7 & null & 99999 (OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "9999",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Ends with",
        filter2Value: "7",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list of deos not contain 15 + ends with 15 (OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Ends with",
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
////////////////////////////////////////


///////////////Ends with

//////////Is equal to////////
//////And////////////////////
test('should be return all table when use (Is not equal) + (AND or OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Is equal to",
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
test('should  be return list of ends with 7 + is equal 15 & 99999 (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Is equal to",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Is equal to",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
});
test('should be return list of ends with 7 + is equal 17 & null (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Is equal to",
        filter2Value: "17",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Is equal to",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
});

//////OR//////////////
test('should be return list of ends with 7 + is equal 17 & 99999 & null (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Is equal to",
        filter2Value: "17",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Is equal to",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Is equal to",
        filter2Value: "99999",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
});
test('should be return list of ends with 7 + is equal 15 (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Is equal to",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
});

//////////////Is not equal to//////////

////////And////////
test('should be return all table when use (Is not equal to) + (And or OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "",
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
test('should be return list of ends with 7 + is not equal 17 (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Is not equal to",
        filter2Value: "17",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
});
test('should be return list of ends with 7 + is not equal 9999 & 15 & null (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Is not equal to",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Is not equal to",
        filter2Value: "99999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Is not equal to",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
});

/////////OR//////////////
test('should be return list of ends with 7 + is not equal 17 & 9999 & null (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Is not equal to",
        filter2Value: "17",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Is not equal to",
        filter2Value: "99999",
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
test('should be return list of ends with 7 + is not equal 15 (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Is not equal to",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }

    ]);
});
test('should be return list of ends with of 7 + is not equal null (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Is not equal to",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
});

/////////////Start with/////////////////
/////////And/////////////
test('should be return all table when use (Start with) + (And or OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Starts with",
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
test('should be return list of ends with 7 + starts with 1 & null (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Starts with",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Starts with",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
});
test('should be return list of ends with 7 + starts with 7 & 9999 & 15 (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Starts with",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Starts with",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Starts with",
        filter2Value: "7",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([]);
});

//////OR//////////
test('should be return list of ends with 7 + starts with 1 (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
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
    ]);
});
test('should be return list of ends with 7 + starts with 7 & 999 & null (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Starts with",
        filter2Value: "7",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Starts with",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Starts with",
        filter2Value: "9999",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
});
test('should be return list of ends with 7 + starts with 15 (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Starts with",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
});

////////////////Contains/////////////
//////////And///////////
test('should be return all table when use (Contains) + (And or OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Contains",
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
test('should be return list of ends with 7 + contains 1 & null & 7 (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Contains",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Contains",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Contains",
        filter2Value: "7",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
});
test('should be return list of ends with 7 + contains 15 && 999 (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Contains",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Contains",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
});

////////OR///////
test('should be return list of ends with 7 + contains 1 (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Contains",
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
    ]);
});
test('should be return list of ends with 7 + contains 7 & 999 & null (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Contains",
        filter2Value: "7",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Contains",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Contains",
        filter2Value: "9999",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
});
test('should be return list ends with 7 + contains 15 (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Contains",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
});

/////////////Does not Contains////////////
/////And////////////
test('should be return all table when use (Does not contain) + (And or OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Does not contain",
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
test('should be return list of ends with 7 + does not contain 15 & 999 & null  (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Does not contain",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Does not contain",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Does not contain",
        filter2Value: "9999",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
});
test('should be return list of ends with 7 + does not contain 1 & 7 (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Does not contain",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Does not contain",
        filter2Value: "7",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
});

//////////OR///////


test('should be return list of ends with 7 + does not contain 1 (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Does not contain",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});
test('should be return list of ends with 7 + does not contain null (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Does not contain",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
});
test('should be return list of ends with 7 + does not contain 7 & 999 (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "999",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "999",
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
test('should be return list of ensd with 7 + does not contain 15 (OR) ', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Does not contain",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
        { id: "5", category: "watch", name: "mamoun" },
        { id: "9", category: "ba", name: "nazal" }
    ]);
});

///////////Ends with//////////
/////And////////////
test('should be return all table when use  (Ends with) + (And or OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Ends with",
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
test('should be return list of ends with 7 + ends with 7 & null (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Ends with",
        filter2Value: "7",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Ends with",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
});
test('should be return list of ends with 7 + ends with 5 & 9 & 15 & 888 (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Ends with",
        filter2Value: "5",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Ends with",
        filter2Value: "9",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Ends with",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues4 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Ends with",
        filter2Value: "888",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
    expect(filterRows(table, filterFormValues3)).toMatchObject([]);
    expect(filterRows(table, filterFormValues4)).toMatchObject([]);
});

///////OR/////////
test('should be return list of ends of 7 + ends of 5 (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Ends with",
        filter2Value: "5",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "5", category: "watch", name: "mamoun" },
    ]);   
});
test('should be return list of ends with 7 + ends with 7 & null & 888 (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Ends with",
        filter2Value: "7",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Ends with",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3 = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Ends with",
        filter2Value: "888",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]); 
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]);  
});
test('should be return list of ends with 7 + ends with 9 (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Ends with",
        filter2Value: "9",
        compareValue: "Or",
        column: "id",
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "9", category: "ba", name: "nazal" }
    ]);  
});
test('should be return list of ends with 7 + ends with 15 (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "7",
        filter2By: "Ends with",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    }; 
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
    ]); 
});
/////////////////////////////////////////













