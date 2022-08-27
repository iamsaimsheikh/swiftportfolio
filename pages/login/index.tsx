import * as React from 'react'
import Container from '@mui/material/Container';
import { Box, Button, Grid, Typography } from '@mui/material';
import useStyles from '../../styles/useStyles';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import { useRouter } from 'next/router';

const LoginPage: React.FC = () => {
    const classes = useStyles();
    const router = useRouter();

    const routeToSignUp = () => {
        router.push('/signup');
      }

    const routeToDashboard = () => {
        router.push('/dashboard');
    }

    return (
        <React.Fragment>
            <Container maxWidth="xl" className={classes.container}>
            <Grid container className={classes.gridItemContainer}>
                <Grid item xs={6}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: 1,
                        width: 300,
                        height: 470,
                        },
                    }}
                    >
                    <Paper className={classes.paperContainer} elevation={3} >
                    <Stack spacing={3}>
                        <Stack spacing={3}>
                        <Stack spacing={2}>
                        <Typography className={classes.brandName} variant='h6'>Swift Portfolio</Typography>
                        <Divider />
                        </Stack>
                        <Stack>
                        <Typography sx={{textAlign:'left !important'}} variant='h6' className={classes.faintText} >Log in to your account</Typography>
                        </Stack>
                        </Stack>
                        <Stack spacing={3}>
                            <TextField label="Username" variant="outlined" size='small' />
                            <TextField label="Password" variant="outlined" size='small' />
                        </Stack>
                        <Typography className={classes.brandName} sx={{textAlign:'left !important'}} variant='subtitle2'>Forgot password?</Typography>
                        <Button variant='outlined' className={classes.button} onClick={routeToDashboard}>Login</Button>
                        <Button variant='outlined' className={classes.buttonFilled} onClick={routeToSignUp}>Sign Up</Button>
                    </Stack>
                    </Paper>
                </Box>
                </Grid>
            </Grid>
            </Container>
        </React.Fragment>
    )
}

export default LoginPage