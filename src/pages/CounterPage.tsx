import { observer } from 'mobx-react-lite';
import {
  Box,
  Typography,
  Button,
  Paper,
  ButtonGroup,
} from '@mui/material';
import { rootStore } from '../state-management/RootStore';

export const CounterPage = observer(() => {
  const { counterStore } = rootStore;

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center', minWidth: 300 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Counter
        </Typography>
        <Typography variant="h2" component="div" sx={{ my: 4, fontWeight: 'bold' }}>
          {counterStore.count}
        </Typography>
        <ButtonGroup variant="contained" size="large" sx={{ gap: 1 }}>
          <Button onClick={counterStore.decrement}>
            -1
          </Button>
          <Button onClick={counterStore.reset} color="secondary">
            Reset
          </Button>
          <Button onClick={counterStore.increment}>
            +1
          </Button>
        </ButtonGroup>
      </Paper>
    </Box>
  );
});