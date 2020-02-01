export function getTime(atime) {
  var dt = new Date();
  dt.setTime(parseInt(atime));
  return dt.toString();
};

export function getDate(atime) {
  var dt = new Date();
  dt.setTime(parseInt(atime));
  return dt.toDateString();
}

export function moveDateByDay(atime, days) {
  var dt = new Date();
  dt.setTime(parseInt(atime) + (days * 86400000));
  return dt.getTime().toString();
}

export function getDateFromMillisecondString(atime) {
  var dt = new Date();
  dt.setTime(parseInt(atime));
  return dt;
}

function getMonthString(month) {
  month = month + 1;
  if(month < 10) {
    return '0'+month.toString();
  } else {
    return month.toString();
  }
}

export function getCurrentDateInMilliSecond() {
  var dt2 = new Date(Date.now());
  var dt = new Date(dt2.getFullYear(),dt2.getMonth(),dt2.getDate());
  return dt.getTime().toString();
}

export function getDateInMilliSecond(date) {
  var dt = new Date(date.getFullYear(),date.getMonth(),date.getDate());
  return dt.getTime().toString();
}

export function stringToDate(_date,_format,_delimiter)
{
    var formatLowerCase=_format.toLowerCase();
    var formatItems=formatLowerCase.split(_delimiter);
    var dateItems=_date.split(_delimiter);
    var monthIndex=formatItems.indexOf("mm");
    var dayIndex=formatItems.indexOf("dd");
    var yearIndex=formatItems.indexOf("yyyy");
    var month=parseInt(dateItems[monthIndex]);
    month-=1;
    var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
    return formatedDate;
}




