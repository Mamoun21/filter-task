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
test('should be return list of id = 15 and id = brgin 9 if exist in equal to & start with + or', () => {
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
test('should be return all table in equal & contain', () => {
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
test('should be return list of id = 15 plus in id contains 1 in equal to &  contains + or', () => {
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
test('should be return list of id = 15 plus in id contains 9 if exist in equal to &  contains + or', () => {
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
test('should be return all table in equal to & does not contains ', () => {
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
test('should be return empty list in equal to & Does not contains + and', () => {
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
test('should be return list of id = 15 in equal to & Does not contains + and', () => {
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
test('should be return list of id = 15 and any id without id 5 if exist in equal to & Does not contains + or ', () => {
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
test('should be return all table  if 2 not exist in equal to & Does not contains + or ', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "88",
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
test('should be return all list of id = 15 in equal to & Does not contains + or ', () => {
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
test('should be return all table  in equal to & ends with', () => {
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
test('should be return empty list in equal to & ends with + and', () => {
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
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
})
test('should be return list of id = 15 in equal to & ends with + and', () => {
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
test('should be return list of id = 15 and list end of id = 7 if exits in equal to & ends with + or', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "15",
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
    ]);
});
/////////////////////////////////////////////////

//////////////////Is Not Equal to


/////////////////isEqual///////////////////
/////////////////And//////////////////////
test('should be returmn all table', () => {
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
    test('should be return empty list', () => {
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
test('should be return all list without id = 15 in not equal to + equal + and', () => {
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
test('should be return list with id = 9 ', () => {
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
test('should be return all table', () => {
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
test('should be return list without id = 15', () => {
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
test('should be return list without id = 15 and id = 9', () => {
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
test('should be return all table ', () => {
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
test(' should be return list without id = 15 start with 1 ', () => {
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
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
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
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
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
    expect(filterRows(table, filterFormValues)).toMatchObject([
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
    expect(filterRows(table, filterFormValues)).toMatchObject([
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
test('should be return table without id = 15 and any row contain 1', () => {
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
test('should be return all table ', () => {
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
    expect(filterRows(table, filterFormValues)).toMatchObject([]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([]);
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
    expect(filterRows(table, filterFormValues)).toMatchObject([
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
    expect(filterRows(table, filterFormValues)).toMatchObject([
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
test('should be return all', () => {
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
test('should be return all table when use And or Or', () => {
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
test('should be return list of id = 15', () => {
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
test('should be return empty list', () => {
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
test('should be return list  id = 1  ', () => {
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
test('should  be return list of id = 15', () => {
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
test('should be return list of starts with 1 ', () => {
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
    expect (filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect (filterRows(table,filterFormValues2)).toMatchObject([
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
test('should be return all table when use And or OR', () => {
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
test('should be return list of starts with 1', () => {
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
    expect (filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect (filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]); 
});
test('should be return list of id = 1 and without id = 15 ',()=>{
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Is not equal to",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    expect (filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]); 
});
/////////////////OR////////////////////
test('should be retuen all table', () => {
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
test('should be return list of starts with 1', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Is not equal to",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    }; 
    expect (filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]); 
});

///////////////////Starts with/////////////////
///////////////////And//////////////////////
test('should be return all table when use And or Or', () => {
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
test('should be return list of statrs with 1', () => {
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
    expect (filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect (filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);      
})
test('should be return empty list', () => {
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
test('should be return list of starts with 1', () => {
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
    expect (filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect (filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]); 
    expect (filterRows(table,filterFormValues3)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);       
});
test('should be return list of starts with 1 and 9', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Starts with",
        filter2Value: "9",
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
})

////////////////////Contains/////////////
///////////////////And//////////////////
test('should be return all table when use And or OR', () => {
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
test('should be return empty list', () => {
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
    expect(filterRows(table,filterFormValues)).toMatchObject([]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([]);
});
test('should be return list of id = 1', () => {
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
    expect (filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect (filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);    
});
test('should be return list starts with 1 and contain 15', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Contains",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };  
    expect (filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
    ]);
});
/////////////////////OR///////////////////////
test('should be return list of id = 1', () => {
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
    expect (filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect (filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect (filterRows(table,filterFormValues3)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]); 
});
test('should be return list of start with 1 and contains 9', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Contains",
        filter2Value: "9",
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

///////////////////////Does not contain//////////////
//////////////////////and//////////////////////
test('should be return all table when use And or OR', () => {
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
test('should be return empty list', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Does not contain",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([]);
});
test('should be return list of starts with 1', () => {
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
    expect (filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect (filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect (filterRows(table,filterFormValues3)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);   
});
test('should be return list of starts with 1 and does not contain 15', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Does not contain",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
////////////////OR////////////////////
test('should be return all table', () => {
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
test('should be return list of start with 1', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Does not contain",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    expect (filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);   
});
test('should be return list of starts with 1 and does not contain 9', () => {
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
test('should be return all table when use And or Or', () => {
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
test('should be return list of starts with 1 and end with 7', () => {
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
test('should be return empty list', () => {
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
test('should be return list of start with 1 and end with ',()=>{
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Ends with",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    expect (filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]); 
});
/////////////////////OR//////////////
test('should be return list of starts with 1 and ends with 7', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "1",
        filter2By: "Ends with",
        filter2Value: "7",
        compareValue: "Or",
        column: "id",
    };
    expect (filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);    
});
test('should be return list of starts with 1 ', () => {
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
    expect (filterRows(table,filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
    expect (filterRows(table,filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "f", name: "asdasd" },
        { id: "15", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]); 
    expect (filterRows(table,filterFormValues3)).toMatchObject([
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
test('should  be return all table when use And or OR', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2= {
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
test('should  be return list of id = 15', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return empty list ', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2= {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3= {
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
test('should be return list of contain 15 and equal 1 ', () => {
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
test('should be return list of Contain 15 ', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2= {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues3= {
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
test('should be return all table when use And or Or ', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return list of contain 15', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "9",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2= {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3= {
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
test('should be return empty list ', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };  
    expect(filterRows(table,filterFormValues)).toMatchObject([]);
});

////////////OR/////////////
test('should be return all table  ', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "999",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return list of contain 15 and not equal 1', () => {
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
test('should be return list of contain 15 ', () => {
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
test('should be return all table when use And or OR', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: "999",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return list of contain 15 and start with 1 and 15 ', () => {
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
test('should be return empty list of contain 15 and starts with 5 and 9 ', () => {
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
    expect(filterRows(table,filterFormValues)).toMatchObject([]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([]); 
});
///////////////OR////////////////////
test('should be return list of contain 15 and start with 1 and 9 ', () => {
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
test('should be return list of coyain 15 and start with 15 and 999 ', () => {
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
test('should be return all table when use And or Or', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: "999",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return list of Contain 15 and contain 15 + 1 ', () => {
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
test('should be return empty list when use (contain 15 and contain 9 or 9999)', () => {
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
    expect(filterRows(table,filterFormValues)).toMatchObject([]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([]);    
});
//////////////OR//////////////////
test('should be return list of contain 15 + contain 9 or 1 ', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "9",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2= {
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
test('should  be return list of contaimn 15 + contain 15 or 9999', () => {
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
test('should be return all table when use And and Or', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return list of contain 15 + not contain 9 & 9999 ', () => {
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
test('should be return empty list of conatin 15 + not contain 1 & 15 ', () => {
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
    expect(filterRows(table,filterFormValues)).toMatchObject([]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([]);      
});
/////////////OR///////////////////////
test('should be return all table ', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "999",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return list of contain 15 + not contain 1 & 9 ', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "15",
        filter2By: "Does not contain",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return list of contain 15', () => {
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
test('should be return all table when use And or Or', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return list of contain 15 and ends with 5', () => {
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
test('should be return list of contain 15 and ends with 1 & 9  ', () => {
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
    expect(filterRows(table,filterFormValues)).toMatchObject([]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([]);           
});
///////////////////OR/////////////////
test('should be return list of contain 15 + ends with 5 & 9', () => {
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
test('should be return list of Contain 15 + ends with 15  & 9999', () => {
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
test('should be return all table when use And or Or', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return list of does not contain 15 and equal 1', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([
        { id: "1", category: "car", name: "abd" }, 
    ]);
});
test('should be return empty list ', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2= {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is equal to",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    }; 
    expect(filterRows(table,filterFormValues)).toMatchObject([]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([]); 
});
test('should be return all table without id = 15', () => {
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
test('should be return list of does not contain 15 + is equal 1 & 999', () => {
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
test('should be return all table when use does not contain 15 + is equal 15 ', () => {
    const filterFormValues= {
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
test('should be return all table when use And or OR', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return list of Does not contain 15 + not equal 999 + 15 + null', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return list of Does not contain 15 + not equal 1', () => {
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
test('should be return list of Does not contain 15 + not equal 999 + 1 ', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "999",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return list of Does not contain 15 + not equal 15 + null', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Is not equal to",
        filter2Value: "15",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return all table when use And or OR', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return list of does not contain 15 + starts with 1 & 8 & 15 ', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "8",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2= {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues3= {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "1",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([]); 
    expect(filterRows(table, filterFormValues3)).toMatchObject([
        { id: "17", category: "f", name: "asdasd" },
        { id: "17", category: "van", name: "omar" },
        { id: "1", category: "car", name: "abd" },
    ]);
});
test('should be return list of does not cotain 15 + starts with null ', () => {
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
test('should be return list of does not contain + start with 1 & 15 ', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return list of does not contain + starts with 8 & null ', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Starts with",
        filter2Value: "8",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return all table when use And or Or', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return empty when use does not contain 15 + contain 15 & contain 999', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "15",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2= {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "999999",
        compareValue: "And",
        column: "id",
    };
    expect(filterRows(table,filterFormValues)).toMatchObject([]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([]);    
});
test('should be return list of does not contain 15 + contain 1', () => {
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
test('should be return list of does not contain 15 + contain null', () => {
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
test('should be return list of does not contain 15 + contain 15 & 9999 ', () => {
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
test('should be return list of does not contain 15 + contain 1 & 15  ', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "15",
        filter2By: "Contains",
        filter2Value: "1",
        compareValue: "Or",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return all table when use And or Or', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return list of dose not contain 15+ does not contain 1', () => {
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
test('should be return list of does not contain 15 + does not contain 15 & 999 & null', () => {
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
        filter2By:"Does not contain",
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
test('should be return list of does not contain 15 + does not contain 15 & 999 & null', () => {
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
        filter2By:"Does not contain",
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
test('should be return list of does not contain 15 + does not contain 9999', () => {
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
test('should be return all table', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: "999",
        compareValue: "And",
        column: "id",
    };
    const filterFormValues2= {
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
test('should be return list of does not contain 15 + ends with 15 & 9999 ', () => {
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
    expect(filterRows(table,filterFormValues)).toMatchObject([]);
    expect(filterRows(table,filterFormValues2)).toMatchObject([]); 
});
test('should be return list of does not contain 15 + ends with 7 ', () => {
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
test('should be return list of does not contain 15 + ends with null', () => {
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
test('should be return list of does not contain 15 + ends with 7 & null & 99999 ', () => {
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
test('should be return list of deos not contain 15 + ends with 15 ', () => {
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
