
export const parseCSV = (fileDir: string) => {
    const csv2json = require('csvjson-csv2json');
    const path = require('path');
    const fs = require("fs");
    const csv = fs.readFileSync(path.join(__dirname, `sampleData/${fileDir}`)).toString();
    const result = csv2json(csv)
    return result
}

