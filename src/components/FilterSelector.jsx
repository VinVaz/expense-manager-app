import { useEffect, useState } from 'react';
import {
  helperGetMonthDescription,
  getDate,
  getYear,
  getMonth,
} from '../helpers/helpers';
import { YEARS, MONTHS } from '../constants/constants';
import {
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
} from '@material-ui/core';

export default function FilterSelector({ setSelectedDate, selectedDate }) {
  const handleChangeMonth = (event) => {
    setSelectedDate(getDate(getYear(selectedDate), event.target.value));
  };
  const handleChangeYear = (event) => {
    setSelectedDate(getDate(event.target.value, getMonth(selectedDate)));
  };

  return (
    <div>
      <FormControl sx={{ m: 2, minWidth: 120 }}>
        <Select
          value={getYear(selectedDate)}
          onChange={handleChangeYear}
          displayEmpty
          label="Year"
        >
          {YEARS.map((displayYear, index) => (
            <MenuItem key={index} value={displayYear}>
              {displayYear}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Day</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 2, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Month</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={getMonth(selectedDate)}
          label="Month"
          onChange={handleChangeMonth}
        >
          {MONTHS.map((displayMonth, index) => (
            <MenuItem key={index} value={displayMonth}>
              {helperGetMonthDescription(displayMonth)}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Month</FormHelperText>
      </FormControl>
    </div>
  );
}
