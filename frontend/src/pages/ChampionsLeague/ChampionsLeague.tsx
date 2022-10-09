import { Box, Container, Grid, Typography, CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Fab from '@mui/material/Fab';
import championsleague from '../../asset/championsleague.jpg'
import { useStyles } from './style'
import { fetchData } from '../../features/championsLeague/championsLeagueSlice'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import DisplayChampionsLeagueMatches from '../../components/DisplayChampionsLeagueMatches/DisplayChampionsLeagueMatches'


interface Props {
  showSidebar: boolean
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const ChampionsLeague: React.FC<Props> = ({ showSidebar, setShowSidebar }) => {
  const classes = useStyles()
  const { matchday, loading } = useSelector((state: RootState) => state.championsLeague)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchData())
  }, [])




  return (
    <Box flex={5}>
      <Container maxWidth='lg'>
        <Box className={classes.center} >
          <a href='https://www.uefa.com/uefachampionsleague/' target='_blank' rel="noreferrer">
            <img src={championsleague} className={classes.image} alt='Champions League' />
          </a>
        </Box>

        <Typography sx={{ marginBottom: 3 }} textAlign='center' variant='h5'>Most recent Champions League matches</Typography>
        <Typography sx={{ marginBottom: 3 }} textAlign='center' variant='h4'>{matchday}</Typography>
        {loading ?
          (<Box className={classes.center}>
            <CircularProgress />
          </Box>)
          :
          <Grid container>
            <DisplayChampionsLeagueMatches />
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

export default ChampionsLeague