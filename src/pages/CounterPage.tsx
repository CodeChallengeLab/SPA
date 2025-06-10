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
    <Box 
  display="flex" 
  flexDirection="column"  
  justifyContent="center" 
  alignItems="center" 
  minHeight="100vh"
  width="100vw"
  sx={{ 
    backgroundColor: 'transparent',
    margin: 0,
    padding: 4
  }}
>
  <Typography variant="h3" component="h1" gutterBottom>
    Counter
  </Typography>
  
  <Typography variant="h2" component="div" sx={{ my: 4, fontWeight: 'bold' }}>
    {counterStore.count}
  </Typography>
  
  <Box 
    display="flex" 
    flexDirection="row"  
    gap={4} 
    flexWrap="wrap" 
    justifyContent="center"
  >
    <Button 
      onClick={counterStore.decrement}
      variant="contained"
      size="large"
      sx={{ 
        borderRadius: 4,
        minWidth: 100,
        height: 56
      }}
    >
      -1
    </Button>
    
    <Button 
      onClick={counterStore.reset}
      variant="contained"
      color="secondary"
      size="large"
      sx={{ 
        borderRadius: 4,
        minWidth: 100,
        height: 56
      }}
    >
      Reset
    </Button>
    
    <Button 
      onClick={counterStore.increment}
      variant="contained"
      size="large"
      sx={{ 
        borderRadius: 4,
        minWidth: 100,
        height: 56
      }}
    >
      +1
    </Button>
  </Box>
</Box>
  );
});