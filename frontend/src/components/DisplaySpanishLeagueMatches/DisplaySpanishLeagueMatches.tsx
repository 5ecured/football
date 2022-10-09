import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './style'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

const DisplaySpanishLeagueMatches: React.FC = () => {
  const classes = useStyles()
  const data = useSelector((state: RootState) => state.spanishLeague.data)

  const render = data.map((matchday, i) => (
    <>
      <Grid item xs={12} lg={6} >
        <Box className={i % 2 === 0 ? `${classes.gridBotRight}` : `${classes.gridBotLeft}`}>
          <Box className={classes.center}>
            <Typography variant='h6'>{matchday.homeTeam}</Typography>
            <Typography variant='h6'>{matchday.awayTeam}</Typography>
          </Box>
          <Box className={classes.score}>
            <img src={matchday.homeLogo} alt='home team logo' />
            <Typography variant='h5'>{matchday.homeTeamScore}</Typography>
            <Typography variant='h5'>{matchday.awayTeamScore}</Typography>
            <img src={matchday.awayLogo} alt='away team logo' />
          </Box>
        </Box>
      </Grid>
    </>

  ))


  return (
    <>
      {render}
    </>
  )
}

export default DisplaySpanishLeagueMatches