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
  column?: keyof Column;
};

export interface Column {
  id: string;
  category: string;
  name: string;
}
 export const filterRows = (rows: Column[], filterValues: FilterFormValues): Column[] => {
  let rowsToFilter = rows;
  const column: keyof Column = filterValues.column;

  if (!filterValues.filter1Value) {
    return rowsToFilter;
  }

  switch (filterValues.filter1By) {
    case "Is equal to":
      if (filterValues.filter2By === "Is equal to") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>  //{id:"15",catagory:"asd",name:"asds"}
              row[column].toLowerCase() === filterValues.filter1Value.toLowerCase() && //opreation 1
              (filterValues.filter2Value  //false  or true
                ? row[column].toLowerCase() ===  //opreation 2
                  filterValues.filter2Value.toLowerCase() // return true or false
                : true) 
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>//{id:"dada",name:"asds"}
              row[column].toLowerCase() === filterValues.filter1Value.toLowerCase() ||
              (filterValues.filter2Value
                ? row[column].toLowerCase() ===
                  filterValues.filter2Value.toLowerCase()
                : false)
          );
        }
      } else if (filterValues.filter2By === "Is not equal to") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filterValues.filter1Value.toLowerCase() &&
              (filterValues.filter2Value
                ? row[column].toLowerCase() !==
                  filterValues.filter2Value.toLowerCase()
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filterValues.filter1Value.toLowerCase() ||
              (filterValues.filter2Value
                ? row[column].toLowerCase() !==
                  filterValues.filter2Value.toLowerCase()
                : false)
          );
        }
      } else if (filterValues.filter2By === "Starts with") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filterValues.filter1Value.toLowerCase() &&
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .startsWith(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filterValues.filter1Value.toLowerCase() ||
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .startsWith(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      } else if (filterValues.filter2By === "Contains") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filterValues.filter1Value.toLowerCase() &&
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filterValues.filter1Value.toLowerCase() ||
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      } else if (filterValues.filter2By === "Does not contain") { // one
        if (filterValues.compareValue === "And") {  //two
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filterValues.filter1Value.toLowerCase() &&   // three and opreator
              (filterValues.filter2Value
                ? !row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())    // four opreation 
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filterValues.filter1Value.toLowerCase() ||
              (filterValues.filter2Value
                ? !row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      } else if (filterValues.filter2By === "Ends with") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filterValues.filter1Value.toLowerCase() &&
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .endsWith(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filterValues.filter1Value.toLowerCase() ||
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .endsWith(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      }
      break;
    case "Is not equal to":
      if (filterValues.filter2By === "Is equal to") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filterValues.filter1Value.toLowerCase() &&
              (filterValues.filter2Value
                ? row[column].toLowerCase() ===
                  filterValues.filter2Value.toLowerCase()
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filterValues.filter1Value.toLowerCase() ||
              (filterValues.filter2Value
                ? row[column].toLowerCase() ===
                  filterValues.filter2Value.toLowerCase()
                : false)
          );
        }
      } else if (filterValues.filter2By === "Is not equal to") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filterValues.filter1Value.toLowerCase() &&
              (filterValues.filter2Value
                ? row[column].toLowerCase() !==
                  filterValues.filter2Value.toLowerCase()
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filterValues.filter1Value.toLowerCase() ||
              (filterValues.filter2Value
                ? row[column].toLowerCase() !==
                  filterValues.filter2Value.toLowerCase()
                : false)
          );
        }
      } else if (filterValues.filter2By === "Starts with") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filterValues.filter1Value.toLowerCase() &&
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .startsWith(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filterValues.filter1Value.toLowerCase() ||
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .startsWith(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      } else if (filterValues.filter2By === "Contains") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filterValues.filter1Value.toLowerCase() &&
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filterValues.filter1Value.toLowerCase() ||
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      } else if (filterValues.filter2By === "Does not contain") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filterValues.filter1Value.toLowerCase() &&
              (filterValues.filter2Value
                ? !row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filterValues.filter1Value.toLowerCase() ||
              (filterValues.filter2Value
                ? !row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      } else if (filterValues.filter2By === "Ends with") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filterValues.filter1Value.toLowerCase() &&
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .endsWith(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filterValues.filter1Value.toLowerCase() ||
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .endsWith(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      }
      break;
    case "Starts with":
      if (filterValues.filter2By === "Is equal to") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .startsWith(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column].toLowerCase() ===
                  filterValues.filter2Value.toLowerCase()
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .startsWith(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column].toLowerCase() ===
                  filterValues.filter2Value.toLowerCase()
                : false)
          );
        }
      } else if (filterValues.filter2By === "Is not equal to") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .startsWith(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column].toLowerCase() !==
                  filterValues.filter2Value.toLowerCase()
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .startsWith(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column].toLowerCase() !==
                  filterValues.filter2Value.toLowerCase()
                : false)
          );
        }
      } else if (filterValues.filter2By === "Starts with") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .startsWith(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .startsWith(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .startsWith(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .startsWith(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      } else if (filterValues.filter2By === "Contains") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .startsWith(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .startsWith(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      } else if (filterValues.filter2By === "Does not contain") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .startsWith(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? !row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .startsWith(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? !row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      } else if (filterValues.filter2By === "Ends with") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .startsWith(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .endsWith(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .startsWith(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .endsWith(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      }
      break;
    case "Contains":
      if (filterValues.filter2By === "Is equal to") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column].toLowerCase() ===
                  filterValues.filter2Value.toLowerCase()
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column].toLowerCase() ===
                  filterValues.filter2Value.toLowerCase()
                : false)
          );
        }
      } else if (filterValues.filter2By === "Is not equal to") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column].toLowerCase() !==
                  filterValues.filter2Value.toLowerCase()
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column].toLowerCase() !==
                  filterValues.filter2Value.toLowerCase()
                : false)
          );
        }
      } else if (filterValues.filter2By === "Starts with") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .startsWith(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .startsWith(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      } else if (filterValues.filter2By === "Contains") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      } else if (filterValues.filter2By === "Does not contain") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? !row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? !row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      } else if (filterValues.filter2By === "Ends with") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .endsWith(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .endsWith(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      }
      break;
    case "Does not contain":
      if (filterValues.filter2By === "Is equal to") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column].toLowerCase() ===
                  filterValues.filter2Value.toLowerCase()
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column].toLowerCase() ===
                  filterValues.filter2Value.toLowerCase()
                : false)
          );
        }
      } else if (filterValues.filter2By === "Is not equal to") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column].toLowerCase() !==
                  filterValues.filter2Value.toLowerCase()
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column].toLowerCase() !==
                  filterValues.filter2Value.toLowerCase()
                : false)
          );
        }
      } else if (filterValues.filter2By === "Starts with") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .startsWith(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .startsWith(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      } else if (filterValues.filter2By === "Contains") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      } else if (filterValues.filter2By === "Does not contain") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? !row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? !row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      } else if (filterValues.filter2By === "Ends with") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .endsWith(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .endsWith(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      }
      break;
    case "Ends with":
      if (filterValues.filter2By === "Is equal to") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column].toLowerCase() ===
                  filterValues.filter2Value.toLowerCase()
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column].toLowerCase() ===
                  filterValues.filter2Value.toLowerCase()
                : false)
          );
        }
      } else if (filterValues.filter2By === "Is not equal to") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column].toLowerCase() !==
                  filterValues.filter2Value.toLowerCase()
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column].toLowerCase() !==
                  filterValues.filter2Value.toLowerCase()
                : false)
          );
        }
      } else if (filterValues.filter2By === "Starts with") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .startsWith(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .startsWith(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      } else if (filterValues.filter2By === "Contains") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      } else if (filterValues.filter2By === "Does not contain") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? !row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? !row[column]
                    .toLowerCase()
                    .includes(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      } else if (filterValues.filter2By === "Ends with") {
        if (filterValues.compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filterValues.filter1Value.toLowerCase()) &&
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .endsWith(filterValues.filter2Value.toLowerCase())
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filterValues.filter1Value.toLowerCase()) ||
              (filterValues.filter2Value
                ? row[column]
                    .toLowerCase()
                    .endsWith(filterValues.filter2Value.toLowerCase())
                : false)
          );
        }
      }
      break;
    default:
      break;
  }
  return rowsToFilter;
};

module.exports={filterRows};