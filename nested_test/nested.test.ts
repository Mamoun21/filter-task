const { filterRows } = require('../refactor');
const table = [
    { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
    { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
    { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
];

/////////////////Is equal to

//////////Is equal to
/////And//////
test('should be return list of is equal to null + is equal to any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list of is equal to  ahmad + is equal to  a (AND) ', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "ahmad",
        filter2By: "Is equal to",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject(
        []);
});
test('should be return list of is equal to ahamd + is equal to null (AND)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "ahmad",
        filter2By: "Is equal to",
        filter2Value: '',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject(
        [{
            id: '15',
            category: 'f',
            name: { firstname: 'ahmad', lastname: 'hasan' }
        }]
    );
});
/////OR/////
test('should be return list is equal to ahmad + is equal to abd (OR) ', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "ahmad",
        filter2By: "Is equal to",
        filter2Value: 'abd',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: '15', category: 'f', name: { firstname: 'ahmad', lastname: 'hasan' } },
        { id: '15', category: 'f', name: { firstname: 'abd', lastname: 'ahmad' } }
    ]);
});

/////////Is not equal to////
////And////
test('should be return list of is equal to null + is not equal to any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list of is equal to ahamd + is not equal to nazal (AND)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "ahmad",
        filter2By: "Is not equal to",
        filter2Value: 'nazal',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject(
        [{
            id: '15',
            category: 'f',
            name: { firstname: 'ahmad', lastname: 'hasan' }
        }]
    );
});
/////OR/////
test('should be return list of is equal to ahmad + is not equal to abd (OR)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "ahmad",
        filter2By: "Is not equal to",
        filter2Value: 'abd',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
    ]);
});

/////////Start with/////
////And////
test('should be return list of is equal to null + Starts with any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list of is equal to ahmad + Starts with a (AND)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "ahmad",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
    ]);
});
test('should be return list of is equal to ahmad + Starts with n (AND)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "ahmad",
        filter2By: "Starts with",
        filter2Value: 'n',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
    ]);
});
//////OR//////
test('should be return list of is equal to ahamd + Starts with a (OR)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "ahmad",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: '15', category: 'f', name: { firstname: 'ahmad', lastname: 'hasan' } },
        { id: '15', category: 'f', name: { firstname: 'abd', lastname: 'ahmad' } }
    ]);
});

/////////Contains/////
////and////
test('should be return list of is equal to null + Contains any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list of is equal to ahmad + contains a (And)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "ahmad",
        filter2By: "Contains",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
    ]);
});
/////OR////
test('should be return list of is equal to ahmad + contains a (OR) ', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "ahmad",
        filter2By: "Contains",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});

///////Does not contain/////
////And///
test('should be return list of is equal to null + does not contains any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Does not Contain",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list of is equal to ahmad + does not contain a (And)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "ahmad",
        filter2By: "Does not contain",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
    ]);
});
//////Or////
test('should be return list of is equal to ahmad + does not contain a (Or)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "ahmad",
        filter2By: "Does not contain",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
    ]);
});

///////Ends With/////
///And///////
test('should be return list of is equal to null + Ends with any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Is equal to",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list of is equal to ahmad + Ends with d (And)', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "ahmad",
        filter2By: "Ends with",
        filter2Value: 'd',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
    ]);
});
//////OR//////
test('should be return list of is equal to ahmad +  ends with d (OR) ', () => {
    const filterFormValues = {
        filter1By: "Is equal to",
        filter1Value: "ahmad",
        filter2By: "Ends with",
        filter2Value: 'd',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
///////////////////////

/////////////////Is not equal 

////////Is equal to/////
////And////
test('should be return list of is not equal to null + is equal to any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list is not equal to ahmad + is equal to abd (AND) ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "ahmad",
        filter2By: "Is equal to",
        filter2Value: 'abd',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: '15', category: 'f', name: { firstname: 'abd', lastname: 'ahmad' } }
    ]);
});

////OR///
test('should be return list is not equal to ahmad + is equal to abd (OR) ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "ahmad",
        filter2By: "Is equal to",
        filter2Value: 'abd',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: '15', category: 'f', name: { firstname: 'abd', lastname: 'ahmad' } }
    ]);
});

///////IS not equal to/////
///And/////
test('should be return list of is not equal to null + is not equal to any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list is not equal to ahmad + is not equal to abd (AND) ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "ahmad",
        filter2By: "Is not equal to",
        filter2Value: 'abd',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
    ]);
});
/////Or////
test('should be return list is not equal to ahmad + is not  equal to abd (OR) ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "ahmad",
        filter2By: "Is not equal to",
        filter2Value: 'abd',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: '15', category: 'f', name: { firstname: 'abd', lastname: 'ahmad' } }
    ]);
});

/////Starts with///
///And///
test('should be return list of is not equal to null + starts with any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list is not equal to ahmad + starts with a (AND) ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "ahmad",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: '15', category: 'f', name: { firstname: 'abd', lastname: 'ahmad' } }
    ]);
});

//////OR///////
test('should be return list is not equal to ahmad + starts with a (OR) ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "ahmad",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: '15', category: 'f', name: { firstname: 'abd', lastname: 'ahmad' } }
    ]);
});

///////Contains////
////And
test('should be return list of is not equal to null + Conatins any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list is not equal to ahmad + contains naz (AND) ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "ahmad",
        filter2By: "Contains",
        filter2Value: 'naz',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
    ]);
});
/////OR////
test('should be return list is not equal to ahmad + contains naz (Or) ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "ahmad",
        filter2By: "Contains",
        filter2Value: 'naz',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});

/////////Does not contain////
///And///
test('should be return list of is not equal to null + does not contain any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list is not equal to ahmad + does not contain naz (AND) ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "ahmad",
        filter2By: "Does not contain",
        filter2Value: 'naz',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
///////OR////
test('should be return list is not equal to ahmad + does not contain naz (OR) ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "ahmad",
        filter2By: "Does not contain",
        filter2Value: 'naz',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});

//////Ends with////
///And////
test('should be return list of is not equal to null + Ends with any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Is not equal to",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list is not equal to ahmad + ends with d (AND) ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "ahmad",
        filter2By: "Ends with",
        filter2Value: 'd',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
/////OR///

test('should be return list is not equal to ahmad + ends with d (OR) ', () => {
    const filterFormValues = {
        filter1By: "Is not equal to",
        filter1Value: "ahmad",
        filter2By: "Ends with",
        filter2Value: 'd',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
///////////////////

//////////////////Starts with

///////Is equal to////
///And///
test('should be return list of Starts with null + Is equal to any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list Starts with a + Is equal to  abd (AND) ', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "a",
        filter2By: "Is equal to",
        filter2Value: 'abd',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});

/////OR///
test('should be return list Starts with a + Is equal to  abd (Or) ', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "a",
        filter2By: "Is equal to",
        filter2Value: 'abd',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});

////////IS not equal to/////
////And///
test('should be return list of Starts with null + Is not equal to any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list Starts with a + Is not equal to  abd (AND) ', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "a",
        filter2By: "Is not equal to",
        filter2Value: 'abd',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
    ]);
});
////OR////
test('should be return list Starts with a + Is not equal to  abd (Or) ', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "a",
        filter2By: "Is not equal to",
        filter2Value: 'abd',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});

////////Starts with////
////And///
test('should be return list of Starts with null + Starts with any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list Starts with a + Starts with a (And) ', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "a",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
/////OR/////
test('should be return list Starts with a + Starts with n (OR) ', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "a",
        filter2By: "Starts with",
        filter2Value: 'n',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});

////////Contains//////
////And/////
test('should be return list of Starts with null + Contains any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list Starts with a + Contains mad (And) ', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "a",
        filter2By: "Contains",
        filter2Value: 'mad',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
    ]);
});
//////OR///
test('should be return list Starts with a + Contains mad (Or) ', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "a",
        filter2By: "Contains",
        filter2Value: 'mad',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});

////////Does not contain////
////And////
test('should be return list of Starts with null + does not contain any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list Starts with a + does not contain mad (And) ', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "a",
        filter2By: "Does not contain",
        filter2Value: 'mad',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
/////OR///////
test('should be return list Starts with a + does not contain mad (Or) ', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "a",
        filter2By: "Does not contain",
        filter2Value: 'mad',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});

/////////Ends with/////
////And///
test('should be return list of Starts with null + Ends with any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Starts with",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list Starts with a + Ends with d (And) ', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "a",
        filter2By: "Ends with",
        filter2Value: 'd',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});

//////OR/////
test('should be return list Starts with a + Ends with l (Or) ', () => {
    const filterFormValues = {
        filter1By: "Starts with",
        filter1Value: "a",
        filter2By: "Ends with",
        filter2Value: 'l',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
/////////////////////

////////////////Contains

/////Is equal to///
///And/////
test('should be return list of Contains null + Is equal to any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list of Contains ah + Is equal to abd (AND)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "ah",
        filter2By: "Is equal to",
        filter2Value: 'abd',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
    ]);
});
/////Or////
test('should be return list of Contains ah + Is equal to abd (AND)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "ah",
        filter2By: "Is equal to",
        filter2Value: 'abd',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        {
            id: '15',
            category: 'f',
            name: { firstname: 'ahmad', lastname: 'hasan' }
        },
        {
            id: '15',
            category: 'f',
            name: { firstname: 'abd', lastname: 'ahmad' }
        }
    ]);
});

//////Is not equal to /////
///And///
test('should be return list of Contains null + Is not equal to any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list of Contains ah + Is not equal to abd (AND)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "ah",
        filter2By: "Is not equal to",
        filter2Value: 'abd',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        {
            id: '15', category: 'f', name: { firstname: 'ahmad', lastname: 'hasan' }
        }
    ]);
});
/////Or////
test('should be return list of Contains ah + Is not equal to abd (AND)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "ah",
        filter2By: "Is not equal to",
        filter2Value: 'abd',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: '15', category: 'f', name: { firstname: 'ahmad', lastname: 'hasan' } },
        { id: '17', category: 'f', name: { firstname: 'nazal', lastname: 'hasan' } }
    ]);
});

/////////Starts with/////
////And////
test('should be return list of Contains null + Starts with any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list of Contains ah + Starts with a (AND)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "ah",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        {
            id: '15', category: 'f', name: { firstname: 'ahmad', lastname: 'hasan' }
        }
    ]);
});
///////OR//////////
test('should be return list of Contains ah + Starts with a (Or)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "ah",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: '15', category: 'f', name: { firstname: 'ahmad', lastname: 'hasan' } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },

    ]);
});

///////////Contains/////
////And////
test('should be return list of Contains null + Contains any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list of Contains ah + Contains a (AND)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "ah",
        filter2By: "Contains",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        {
            id: '15', category: 'f', name: { firstname: 'ahmad', lastname: 'hasan' }
        }
    ]);
});

//////OR////
test('should be return list of Contains ah + Contains az (OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "ah",
        filter2By: "Contains",
        filter2Value: 'az',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: '15', category: 'f', name: { firstname: 'ahmad', lastname: 'hasan' } },
        { id: '17', category: 'f', name: { firstname: 'nazal', lastname: 'hasan' } }
    ]);
});

//////////Does not contain////
///And///
test('should be return list of Contains null + Does not contain any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list of Contains ah + Does not contain az (AND)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "ah",
        filter2By: "Does not contain",
        filter2Value: 'az',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        {
            id: '15', category: 'f', name: { firstname: 'ahmad', lastname: 'hasan' }
        }
    ]);
});
/////OR///////
test('should be return list of Contains ah + does not contain az (OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "ah",
        filter2By: "Does not contain",
        filter2Value: 'az',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: '15', category: 'f', name: { firstname: 'ahmad', lastname: 'hasan' } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});

//////Ends with////////
///And////
test('should be return list of Contains null + Ends with any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Contains",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list of Contains ah + ends with d (AND)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "ah",
        filter2By: "Ends with",
        filter2Value: 'd',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        {
            id: '15', category: 'f', name: { firstname: 'ahmad', lastname: 'hasan' }
        }
    ]);
});

///OR/////
test('should be return list of Contains ah + ends with l (OR)', () => {
    const filterFormValues = {
        filter1By: "Contains",
        filter1Value: "ah",
        filter2By: "Ends with",
        filter2Value: 'l',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: '15', category: 'f', name: { firstname: 'ahmad', lastname: 'hasan' } },
        { id: '17', category: 'f', name: { firstname: 'nazal', lastname: 'hasan' } }
    ]);
});
////////////////////////////////////

//////////////Does not contain

/////Is equal to/////
//And////
test('should be return list of Does not contain null + Is equal to any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list of Does not contain ah + Is equal to abd (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "ah",
        filter2By: "Is equal to",
        filter2Value: 'abd',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        {
            id: '15',
            category: 'f',
            name: { firstname: 'abd', lastname: 'ahmad' }
        }
    ]);
});
/////OR////
test('should be return list of Does not contain ah + Is equal to abd (OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "ah",
        filter2By: "Is equal to",
        filter2Value: 'abd',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        {
            id: '17',
            category: 'f',
            name: { firstname: 'nazal', lastname: 'hasan' }
        },
        { id: '15', category: 'f', name: { firstname: 'abd', lastname: 'ahmad' } }
    ]);
});

/////////////Is not equal to/////
////And////
test('should be return list of Does not contain null + Is not equal to any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list of Does not contain ah + Is not equal to abd (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "ah",
        filter2By: "Is not equal to",
        filter2Value: 'abd',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: '17',
        category: 'f',
        name: { firstname: 'nazal', lastname: 'hasan' } }
    ]);
});

/////Or/////
test('should be return list of Does not contain ah + Is not equal to abd (OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "ah",
        filter2By: "Is not equal to",
        filter2Value: 'abd',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});

/////////Starts with/////
////And/////
test('should be return list of Does not contain null + Starts with any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list of Contains ah + Starts with a (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "ah",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: '15',category: 'f',name: { firstname: 'abd', lastname: 'ahmad' } }
    ]);
});

//////OR////
test('should be return list of Does not contain ah + Starts with a (Or)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "ah",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },

    ]);
});

////////Contains/////
////And////
test('should be return list of Does not contain null + Contains any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list of Does not contain ah + Contains a (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "ah",
        filter2By: "Contains",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});

//////OR////
test('should be return list of Does not contain ah + Contains az (OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "ah",
        filter2By: "Contains",
        filter2Value: 'az',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});

//////////Does not contain////
///And///
test('should be return list of Does not contain null + Does not contain any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list of Does not contain ah + Does not contain az (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "ah",
        filter2By: "Does not contain",
        filter2Value: 'az',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
/////OR///////
test('should be return list of Does not contain ah + does not contain az (OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "ah",
        filter2By: "Does not contain",
        filter2Value: 'az',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});

//////Ends with////////
///And////
test('should be return list of Does not contain null + Ends with any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Does not contain",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list of Does not contain ah + ends with d (AND)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "ah",
        filter2By: "Ends with",
        filter2Value: 'd',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});

///OR/////
test('should be return list of Does not contain ah + ends with l (OR)', () => {
    const filterFormValues = {
        filter1By: "Does not contain",
        filter1Value: "ah",
        filter2By: "Ends with",
        filter2Value: 'l',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: '17', category: 'f', name: { firstname: 'nazal', lastname: 'hasan' } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
////////////////////////////////////

//////////////////////////////////////Ends with

/////////Is equal to/////////
////And////////
test('should be return list of Ends with null + is equal to any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Is equal to",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list Ends with d + is equal to ahmad (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "d",
        filter2By: "Is equal to",
        filter2Value: 'ahmad',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },

    ]);  
});

////////OR/////
test('should be return list Ends with d + is equal to ahmad (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "d",
        filter2By: "Is equal to",
        filter2Value: 'ahmad',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },

    ]);  
});

/////////Is not equal to/////////
////And////////
test('should be return list of Ends with null + is not equal to any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Is not equal to",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list Ends with d + is not equal to ahmad (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "d",
        filter2By: "Is not equal to",
        filter2Value: 'ahmad',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },

    ]);  
});

////////OR/////
test('should be return list Ends with d + is not equal to ahmad (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "d",
        filter2By: "Is equal to",
        filter2Value: 'ahmad',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },

    ]);  
});

/////////Starts with/////////
////And////////
test('should be return list of Ends with null + Starts with any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list Ends with d + Starts with a (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "d",
        filter2By: "Starts with",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },

    ]);  
});
test('should be return list Ends with d + Starts with n (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "d",
        filter2By: "Starts with",
        filter2Value: 'n',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
    ]);  
});

////////OR/////
test('should be return list Ends with d + Starts with n (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "d",
        filter2By: "Starts with",
        filter2Value: 'n',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },

    ]);  
});

/////////Contains/////////
////And////////
test('should be return list of Ends with null + Contains any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Contains",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list Ends with d + Contains a (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "d",
        filter2By: "Contains",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },

    ]);  
});
test('should be return list Ends with d + Contains naz (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "d",
        filter2By: "Contains",
        filter2Value: 'naz',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
    ]);  
});

////////OR/////
test('should be return list Ends with d + Contains naz (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "d",
        filter2By: "Contains",
        filter2Value: 'naz',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },

    ]);  
}); 

/////////Does not contain/////////
////And////////
test('should be return list of Ends with null + Does not contain any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Does not contain",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list Ends with d + Does not contain a (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "d",
        filter2By: "Does not contain",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
    ]);  
});
test('should be return list Ends with d + Does not contain naz (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "d",
        filter2By: "Does not contain",
        filter2Value: 'naz',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);  
});

////////OR/////
test('should be return list Ends with d + Does not contain naz (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "d",
        filter2By: "Does not contain",
        filter2Value: 'naz',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },

    ]);  
});


/////////Ends with/////////
////And////////
test('should be return list of Ends with null + Ends with any (AND+ OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: 'a',
        compareValue: "And",
        column: 'name.firstname'
    };
    const filterFormValues2 = {
        filter1By: "Ends with",
        filter1Value: "",
        filter2By: "Ends with",
        filter2Value: 'a',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
    expect(filterRows(table, filterFormValues2)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);
});
test('should be return list Ends with d + Ends with d (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "d",
        filter2By: "Ends with",
        filter2Value: 'd',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },
    ]);  
});
test('should be return list Ends with d + Ends with l (AND)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "d",
        filter2By: "Ends with",
        filter2Value: 'l',
        compareValue: "And",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
    ]);  
});

////////OR/////
test('should be return list Ends with d + Ends with l (OR)', () => {
    const filterFormValues = {
        filter1By: "Ends with",
        filter1Value: "d",
        filter2By: "Ends with",
        filter2Value: 'l',
        compareValue: "Or",
        column: 'name.firstname'
    };
    expect(filterRows(table, filterFormValues)).toMatchObject([
        { id: "15", category: "f", name: { firstname: "ahmad", lastname: "hasan" } },
        { id: "17", category: "f", name: { firstname: "nazal", lastname: "hasan" } },
        { id: "15", category: "f", name: { firstname: "abd", lastname: "ahmad" } },

    ]);  
});





