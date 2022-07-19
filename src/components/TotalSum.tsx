import { Paper } from '@material-ui/core';

interface ITotalProps {
  total: string
}

export default function TotalSum(props:ITotalProps) {
  return (
    <div>
      <Paper
        
      >{`Total Value: ${props.total}`}</Paper>
    </div>
  );
}
