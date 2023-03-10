const {GoogleSpreadsheet} = require('google-spreadsheet');


const creds = require('../credentials.json');
const sheetID = '1DnmW4BXrCWMaWvvBqj8WLBJ3kJeMmFjv5AMidk6gQt8';
const doc = new GoogleSpreadsheet(sheetID);

async function addRow(vname, voltypes, timestamp) {
    
    await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];
        await sheet.addRow([vname, voltypes, timestamp])
}


module.exports.addRow = addRow;