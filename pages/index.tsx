import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Box, Typography} from '@mui/material';
import useStyles from '../styles/useStyles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router';



const Home: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();

  const routeToLogin = () => {
    router.push('/login');
  }

  const routeToSignUp = () => {
    router.push('/signup');
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.container}>
        <Stack spacing={2} direction="column">
          <Typography className={classes.brandName} variant='h3' >Swift Portfolio</Typography>
          <Typography className={classes.faintText} variant='h6' >Fastest way to to showcase your professional experience!</Typography>
          <Button variant='outlined' className={classes.button} onClick={routeToSignUp}>Get Started!</Button>
          <Box sx={{width:600}} className={classes.box}>
          <Typography className={classes.faintText}>Already have an account?</Typography>
          <Typography className={classes.loginButton} onClick={routeToLogin}>Login</Typography>
          </Box>
        </Stack>
      </Container>
    </React.Fragment>
  )
}

export default Home
