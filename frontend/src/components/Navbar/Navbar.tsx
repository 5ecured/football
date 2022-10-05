import React from 'react'
import { Typography, Box, AppBar, Toolbar } from '@mui/material'
import { useStyles } from './style'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
    const classes = useStyles()


    //TODO add multiple dropdown menu in navbar

    return (
        <AppBar position='sticky'>
            <Toolbar className={classes.center}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Typography variant='h4' color='white'>
                        <SportsSoccerIcon />
                        {' '}
                        Football database
                        {' '}
                        <SportsSoccerIcon />
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar