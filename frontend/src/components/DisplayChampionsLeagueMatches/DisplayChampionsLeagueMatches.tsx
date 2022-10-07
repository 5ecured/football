import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './style'

interface Props {
    data: any[]
}

const DisplayChampionsLeagueMatches: React.FC<Props> = ({ data }) => {
    console.log('data', data)

    const classes = useStyles()

    const render = data.map(matchday => (
        <Grid item xs={12} lg={6}>
            <Box sx={{ marginBottom: 10 }}>
                <Box className={classes.center}>
                    <Typography variant='h5'>{matchday.homeTeam}</Typography>
                    <Typography variant='h5'>{matchday.awayTeam}</Typography>
                </Box>
                <Box className={classes.score}>
                    <img src={matchday.homeLogo} />
                    <Typography variant='h4'>{matchday.homeTeamScore}</Typography>
                    <Typography variant='h4'>{matchday.awayTeamScore}</Typography>
                    <img src={matchday.awayLogo} />
                </Box>
            </Box>
        </Grid>

    ))



    return (
        <>
            {render}
        </>
    )
}

export default DisplayChampionsLeagueMatches