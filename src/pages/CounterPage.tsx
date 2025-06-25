import { observer } from 'mobx-react-lite';
import { Box, Typography, Button } from '@mui/material';
import { rootStore } from '../state-management/RootStore';

export const CounterPage = observer(() => {
  const { counterStore } = rootStore;

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      width: '100%',
      height: '100%'
    }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Counter
      </Typography>

      <Typography variant="h2" component="div" sx={{ my: 2 }}>
        {counterStore.count}
      </Typography>

      <Box sx={{ 
        display: 'flex', 
        gap: 2, 
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: '400px'
      }}>
        <Button 
          onClick={counterStore.decrement} 
          variant="contained" 
          size="large" 
          sx={{ borderRadius: 6, minWidth: 80, height: 56 }}
        >
          -1
        </Button>

        <Button 
          onClick={counterStore.reset} 
          variant="contained" 
          color="secondary" 
          size="large" 
          sx={{ borderRadius: 6, minWidth: 100, height: 56 }}
        >
          Reset
        </Button>

        <Button 
          onClick={counterStore.increment} 
          variant="contained" 
          size="large" 
          sx={{ borderRadius: 6, minWidth: 80, height: 56 }}
        >
          +1
        </Button>
      </Box>
    </Box>
  );
});