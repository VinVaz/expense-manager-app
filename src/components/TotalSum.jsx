import { Paper } from '@material-ui/core';

export default function TotalSum({ children: sum }) {
  return (
    <div>
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          p: 3,
          m: 3,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >{`Total Value: ${sum}`}</Paper>
    </div>
  );
}
