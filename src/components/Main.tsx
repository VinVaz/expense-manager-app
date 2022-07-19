import { useState } from 'react';

import { Tabs, Tab } from '@material-ui/core';

import { DISPLAY_OPTIONS } from '../constants/constants';
import { IExpense } from '../helpers/backend';

import Summary from './Summary';
import Details from './Details';

interface IExpenseTableProps {
  filteredExpenses: IExpense[];
}

export default function Main(props:IExpenseTableProps) {
  const [displayOption, setDisplayOption] = useState<number>(DISPLAY_OPTIONS.DETAILS);
  return (
    <>
      <Tabs 
        value={displayOption} 
        onChange={(e, value) => setDisplayOption(value)}
        aria-label="basic tabs">
        <Tab label={DISPLAY_OPTIONS.SUMMARY} value={DISPLAY_OPTIONS.SUMMARY}>
          <div>summary</div>
        </Tab>
        <Tab label={DISPLAY_OPTIONS.DETAILS} value={DISPLAY_OPTIONS.DETAILS}>
          <div>detail</div>
        </Tab>
      </Tabs>
      <div>
        {(() => {
          switch (displayOption) {
            case DISPLAY_OPTIONS.SUMMARY:
              return <Summary expenses={props.filteredExpenses} />;
            case DISPLAY_OPTIONS.DETAILS:
              return <Details expenses={props.filteredExpenses} />;
            default:
              return <div>Something went wrong...</div>;
          }
        })()}
      </div>
    </>
  );
}
