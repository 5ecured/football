import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Fab from '@mui/material/Fab';
import premierleague from '../../asset/premierleague.jpg'
import { useStyles } from './style'
import { AppDispatch, RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../features/englishPremierLeague/englishPremierLeagueSlice'
import DisplayEnglishPremierLeagueMatches from '../../components/DisplayEnglishPremierLeagueMatches/DisplayEnglishPremierLeagueMatches'



interface Props {
  showSidebar: boolean
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const EnglishLeague: React.FC<Props> = ({ showSidebar, setShowSidebar }) => {
  const classes = useStyles()
  const { matchday, loading } = useSelector((state: RootState) => state.englishPremierLeague)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchData())
  }, [])


  return (
    <Box flex={5}>
      <Container maxWidth='lg'>
        <Box className={classes.center}>
          <a href='https://www.premierleague.com/' target='_blank' rel="noreferrer">
            <img src={premierleague} className={classes.image} alt='English Premier League' />
          </a>
        </Box>


        <Typography sx={{ marginBottom: 3, marginTop: 5 }} textAlign='center' variant='h5'>Most recent English Premier League matches</Typography>
        <Typography sx={{ marginBottom: 3 }} textAlign='center' variant='h4'>{matchday}</Typography>
        {loading ?
          (<Box className={classes.center}>
            <CircularProgress />
          </Box>)
          :
          <Grid container>
            <DisplayEnglishPremierLeagueMatches />
          </Grid>
        }



        {!showSidebar &&
          <Fab sx={{ position: 'fixed', bottom: '50%', left: 20 }} onClick={() => setShowSidebar(true)}>
            <ArrowForwardIcon />
          </Fab>
        }

        <Fab sx={{ position: 'fixed', bottom: 20, right: 20 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ArrowUpwardIcon />
        </Fab>
      </Container>
    </Box>
  )
}

export default EnglishLeague