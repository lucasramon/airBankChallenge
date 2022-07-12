import Transaction from "../interfaces/transaction";
export const parseCSV = (fileDir: string, parseNumbers: boolean) => {
    const csv2json = require('csvjson-csv2json');
    const path = require('path');
    const fs = require("fs");
    const csv = fs.readFileSync(path.join(__dirname, `sampleData/${fileDir}`)).toString();
    let result = csv2json(csv, { parseNumbers: parseNumbers });

    //parseNumber is only true in the transactions case, and the transactions entity is the only one with dates
    if (parseNumbers) {
        result = result.map((item: Transaction) => ({
            ...item,
            date: new Date(item.date)
        }))
    }

    return result
}

