import {
  getDate,
  getYear,
  getMonth,
} from '../helpers/date';
import { YEARS, MONTHS } from '../constants/constants';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';


interface IFilterSelectorProps {
  yearMonth: string;
  onChangeYearMonth: (yearMonth: string) => void;
}

export default function FilterSelector(props:IFilterSelectorProps) {
  let [year, month] = props.yearMonth ? props.yearMonth.split("-") : ['', ''];
  
  return (
    <div>
      <FormControl>
        <InputLabel>Year</InputLabel>
        <Select
          value={year}
          onChange={(e)=>props.onChangeYearMonth(e.target.value + "-" + month)}
          displayEmpty
          label="Year"
        >
          {YEARS.map((displayYear, index) => (
            <MenuItem key={index} value={displayYear}>
              {displayYear}
            </MenuItem>
          ))}
        </Select> 
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-helper-label">Month</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={month}
          label="Month"
          onChange={(e)=>props.onChangeYearMonth(year + "-" + e.target.value)}
        >
          {MONTHS.map((displayMonth, index) => (
            <MenuItem key={index} value={displayMonth}>
              {displayMonth}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
