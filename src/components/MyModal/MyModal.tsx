import { Box, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './style'


const Modal = () => {
    const classes = useStyles()

    return (
        <Box className={classes.modal}>
            <Typography textAlign='center' className={classes.text} variant='h6'>Add a player</Typography>
            <Stack spacing={3} className={classes.stack}>
                <TextField variant='outlined' label='Enter player name' className={classes.field} />
                <TextField variant='outlined' label='Enter player club' className={classes.field} />
                <TextField variant='outlined' label='Enter player image (optional)' className={classes.field} />
            </Stack>
        </Box>
    )
}

export default Modal