import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Counter' },
  { path: '/albums', label: 'Albums' },
  { path: '/posts-users', label: 'Posts and Users' },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SPA
        </Typography>
        <Stack direction="row" spacing={1} >
          {navItems.map((item) => (
            <Button
              key={item.path}
              color="inherit"
              component={Link}
              to={item.path}
              variant={location.pathname === item.path ? 'outlined' : 'text'}
              sx={{
                borderColor: location.pathname === item.path ? 'white' : 'transparent'
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};