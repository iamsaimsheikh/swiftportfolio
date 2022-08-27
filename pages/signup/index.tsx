import * as React from 'react';
import Container from '@mui/material/Container';
import { Box, Button, Grid, Typography } from '@mui/material';
import useStyles from '../../styles/useStyles';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

const SignUpPage : React.FC = () => {
    const classes = useStyles();

    return(
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
                        width: 350,
                        height: 500,
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
                        <Typography sx={{textAlign:'left !important'}} variant='h5' className={classes.faintText} >Sign up</Typography>
                        </Stack>
                        </Stack>
                        <Stack spacing={2}>
                            <Typography sx={{textAlign:'left !important'}} className={classes.faintText} variant='subtitle2'>Choose a unique username</Typography>
                            <TextField label="Username" type='text' variant="outlined" size='small' />
                            <TextField label="Password" type='password' variant="outlined" size='small' />
                            <TextField label="Re-Enter Password" type='password' variant="outlined" size='small' />
                            <Typography sx={{textAlign:'left !important'}} className={classes.faintText} variant='subtitle2'></Typography>
                        </Stack>
                        <Typography className={classes.brandName} sx={{textAlign:'left !important'}} variant='subtitle2'>Forgot password?</Typography>
                        <Button variant='outlined' className={classes.button}>Confirm</Button>
                    </Stack>
                    </Paper>
                </Box>
                </Grid>
            </Grid>
            </Container>
        </React.Fragment>
    )
}

export default SignUpPage