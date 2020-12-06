function formatLongDate(date) {
  var dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  var dayName = dayNames[date.getDay()];
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return `${dayName} ${day} ${monthNames[monthIndex]} ${year}`;
}

export const isDate = (val) => {
  return Date.parse(val);
};

export const parseDMY = (value) => {
  let date = value.split('/');
  let d = parseInt(date[0], 10),
    m = parseInt(date[1], 10),
    y = parseInt(date[2], 10);

  return new Date(y, m - 1, d);
};

function parseTime(value) {
  let date = value.split(' ');
  return date[1];
}

export const formatDate = (date) => {
  let parsedDate = parseDMY(date);

  if (!isDate(parsedDate)) {
    console.log('Error parsing date', parsedDate);
    return '';
  }

  return formatLongDate(new Date(parsedDate));
};

export const formatTime = (date) => {
  return parseTime(date);
};
