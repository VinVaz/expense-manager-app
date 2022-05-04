const MONTHS = [
  '',
  'jan',
  'fev',
  'mar',
  'abr',
  'mai',
  'jun',
  'jul',
  'ago',
  'set',
  'out',
  'nov',
  'dez',
];

function helperGetMonthDescription(month) {
  return MONTHS[Number(month)];
}

function getYear(date) {
  return date.split('-')[0];
}
function getMonth(date) {
  return date.split('-')[1];
}
function getDate(year, month) {
  return `${year}-${month}`;
}

export { helperGetMonthDescription, getYear, getMonth, getDate };
