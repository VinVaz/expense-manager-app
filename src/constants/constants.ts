const MONTHS: string[] = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];
const YEARS: string[] = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];

interface IDisplayOptions {
  SUMMARY: number,
  DETAILS: number,
}
const DISPLAY_OPTIONS: IDisplayOptions = {
  DETAILS: 0,
  SUMMARY: 1,
};

export { MONTHS, YEARS, DISPLAY_OPTIONS };
