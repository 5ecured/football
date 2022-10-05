import React from 'react'
import { Typography, Box, AppBar, Toolbar } from '@mui/material'
import { useStyles } from './style'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const Navbar: React.FC = () => {
    const classes = useStyles()


    //TODO add multiple dropdown menu in navbar

    return (
        <AppBar position='sticky'>
            <Toolbar className={classes.center}>
                <Typography variant='h4'>
                    <SportsSoccerIcon />
                    {' '}
                    Football database
                    {' '}
                    <SportsSoccerIcon />
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar