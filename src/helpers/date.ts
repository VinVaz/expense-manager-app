const MONTHS: string[] = [
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

function helperGetMonthDescription(month: string): string {
  return MONTHS[Number(month)];
}

function getYear(date: string): string {
  return date.split('-')[0];
}
function getMonth(date: string): string {
  return date.split('-')[1];
}
function getDate(year: string, month: string): string {
  return `${year}-${month}`;
}

export { helperGetMonthDescription, getYear, getMonth, getDate };
