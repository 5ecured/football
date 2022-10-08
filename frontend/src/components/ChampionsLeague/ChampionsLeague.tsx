import { Box, Container, Grid, Typography, CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Fab from '@mui/material/Fab';
import championsleague from '../../asset/championsleague.jpg'
import { useStyles } from './style'
import { fetchData } from '../../features/championsLeague/championsLeagueSlice'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { useDispatch } from 'react-redux'
import DisplayChampionsLeagueMatches from '../DisplayChampionsLeagueMatches/DisplayChampionsLeagueMatches'


interface Props {
  showSidebar: boolean
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const ChampionsLeague: React.FC<Props> = ({ showSidebar, setShowSidebar }) => {
  const classes = useStyles()
  const { data, matchday, loading } = useSelector((state: RootState) => state.championsLeague)
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

        <Typography sx={{ marginBottom: 3 }} textAlign='center' variant='h5'>Most recent Champions League match</Typography>
        <Typography sx={{ marginBottom: 3 }} textAlign='center' variant='h4'>{matchday}</Typography>
        {loading ?
          (<Box className={classes.center}>
            <CircularProgress />
          </Box>)
          :
          <Grid container>
            <DisplayChampionsLeagueMatches data={data} />
          </Grid>
        }

        {!showSidebar &&
          <Fab sx={{ position: 'fixed', bottom: '50%', left: 20 }} onClick={() => setShowSidebar(true)}>
            <ArrowForwardIcon />
          </Fab>
        }
      </Container>
    </Box>
  )
}

export default ChampionsLeague