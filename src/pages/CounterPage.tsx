import { observer } from 'mobx-react-lite';
import { Container, Typography, Button } from '@mui/material';
import { rootStore } from '../state-management/RootStore';

export const CounterPage = observer(() => {
  const { counterStore } = rootStore;

  return (
    <Container sx={{
      width: '100vw',
      minHeight: '100vh',
      minWidth: '100vw',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      p: 0,
      m: 0,
    }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Counter
      </Typography>

      <Typography variant="h2" component="div" sx={{ my: 2 }}>
        {counterStore.count}
      </Typography>

      <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'center' }}>
        <Button onClick={counterStore.decrement} variant="contained" size="large" sx={{ borderRadius: 6, minWidth: 80, height: 56 }}>
          -1
        </Button>

        <Button onClick={counterStore.reset} variant="contained" color="secondary" size="large" sx={{ borderRadius: 6, minWidth: 100, height: 56 }}>
          Reset
        </Button>

        <Button onClick={counterStore.increment} variant="contained" size="large" sx={{ borderRadius: 6, minWidth: 80, height: 56 }}>
          +1
        </Button>
      </Container>
    </Container>
  );
});