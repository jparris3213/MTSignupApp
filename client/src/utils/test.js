const {
    getAuthToken4,
    getSpreadSheet,
    getSpreadSheetValues,
    updateSpreadSheetValues
  } = require('./googleSheetsService.js');
  
  const spreadsheetId = process.argv[2];
  const sheetName = process.argv[3];
  
  async function testGetSpreadSheet() {
    try {
      const auth = await getAuthToken4();
      const response = await getSpreadSheet({
        spreadsheetId,
        auth
      })
      console.log('output for getSpreadSheet', JSON.stringify(response.data, null, 2));
    } catch(error) {
      console.log(error.message, error.stack);
    }
  }
  

  async function testGetSpreadSheetValues() {
    try {
      const auth = await getAuthToken4();
      const response = await getSpreadSheetValues({
        spreadsheetId,
        sheetName,
        auth
      })
      console.log('output for getSpreadSheetValues', JSON.stringify(response.data, null, 2));
    } catch(error) {
      console.log(error.message, error.stack);
    }
  }

  async function testupdateSpreadsheet() {
    try {
      const auth = await getAuthToken4();
      const response = await updateSpreadSheetValues({
        spreadsheetId,
        sheetName,
        auth
      })
      console.log(`Info Added`);
    } catch(error) {
      console.log(error.message, error.stack)
    }
  }
  
  function main() {
    //testGetSpreadSheet();
    testGetSpreadSheetValues();
    testupdateSpreadsheet();
  }
  
  main()