const { google } = require('googleapis')
const sheets = google.sheets(`v4`);
const { GoogleAuth } = require('google-auth-library');

async function getAuthToken4() {
  const auth = new GoogleAuth({
        keyFile: `../credentials.json`,
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });
    const authToken = await auth.getClient();
    return authToken;
};

async function getSpreadSheet({spreadsheetId, auth}) {
    const res = await sheets.spreadsheets.get({
      spreadsheetId,
      auth,
    });
    return res;
  };
  
async function getSpreadSheetValues({spreadsheetId, auth, sheetName}) {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId,
      auth,
      range: sheetName
    });
    return res;
  };
  
async function updateSpreadSheetValues({spreadsheetId, auth, sheetName, data}) {
  
  const request = {
    spreadsheetId,
    range: 'Sheet1!A:3',
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    resource: {
        "majorDimension": "ROWS",
        "values": [[]]
    },
    auth,
  }

  try {
    const res = await sheets.spreadsheets.values.append(request);
    console.log(JSON.stringify(res, null, 2));
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
    getAuthToken4,
    getSpreadSheet,
    getSpreadSheetValues,
    updateSpreadSheetValues
  }