function changeColumns() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Taxpayer-Webinar-25K-by-ROLE-ID");
  sheet.moveColumns(sheet.getRange("B1"), 1);
}


function setSemiColon() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Taxpayer-Webinar-25K-by-ROLE-ID");
  const sheetRange = sheet.getRange("D1:D13798").getValues();

  for (var i = 2; i < sheetRange.length; i++) {
    sheet.getRange(i, 4).setValue(";" + sheetRange[i]);
  }
}

function urlReformat() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Taxpayer-Webinar-25K-by-ROLE-ID");
  const sheetRange = sheet.getRange("U1:U13798").getValues();
  sheet.insertColumnAfter(20);
  var final = [];
  for (var i = 1; i < sheetRange.length; i++) {
    var value1 = sheetRange[i];
    var value2 = value1.toString();
    var value3 = value2.split("");
    const check1 = ".";
    const check2 = ":";
    const check3 = "w";
    if ((value3[8] == check3 && value3[9] == check3) || (value3[8] == check3 && value3.length > 0)) {
      switch (check1) {
        case value3[10]:
          textSlice(11);
          break;
        case value3[11]:
          textSlice(12);
          break;
        case value3[7]:
          textSlice(8);
          break;
        default:
          defaultSlicer();
      }
    }
    if (value3[8] != check3 && value3.length > 0) {
      switch (check2) {
        case value3[4]:
          textSlice(7);
          break;
        case value3[5]:
          textSlice(8);
          break;
        default:
          defaultSlicer();
      }
    }
    if (value3.length == 0) {
      var value3 = "No Website Found";
      var value4 = value3.toString();
      pushArray = final.push(value3);
    }
  }
  function pasteToSheet() {
    for (var i = 0; i <= final.length; i++) {
      var temp2 = final[i];
    }
    for (var j = 1; j <= final.length; j++) {
      temp2 = final[j - 1];
      range = sheet.getRange(j, 21);
      newRange = range.offset(1, 0);
      newRange.setValue(temp2);
    }
  }
  //if none of the cases met, call this function
  function defaultSlicer() {
    var slash = value3[value3.length - 1];
    if (slash == "/") {
      value3.pop();
    }
    var value4 = value3.join('');
    var pushArray = final.push(value4);
  }
  //if one of the cases met, call this function
  function textSlice(sliceChar) {
    var value4 = value3.slice(sliceChar);
    var slash = value4[value4.length - 1];
    if (slash == "/") {
      value4.pop();
    }
    value4.toString();
    var value5 = value4.join('');
    var pushArray = final.push(value5);
  }
  pasteToSheet();
}

function jobTitleClean() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Taxpayer-Webinar-25K-by-ROLE-ID");
  const sheetRange = sheet.getRange("D1:D13798").getValues();
  sheet.insertColumnAfter(3);
  for (var i = 1; i < sheetRange.length; i++) {
    var value1 = sheetRange[i];
    var value2 = value1.toString();
    var value3 = value2.split(",");
    final = [];
    commaReplacer();
  }

  function commaReplacer() {
    var newText = ";" + value3.join(';');
    var newString = newText.toString();
    var pushArray = final.push(newString);
    placeToSheet();
  }

  function placeToSheet() {
    temp2 = final[0];
    range = sheet.getRange(i, 4);
    newRange = range.offset(1, 0);
    newRange.setValue(temp2);
  }
}

