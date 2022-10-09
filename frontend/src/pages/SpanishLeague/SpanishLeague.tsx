import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Fab from '@mui/material/Fab';
import laliga from '../../asset/laliga.jpg'
import { useStyles } from './style'
import DisplaySpanishLeagueMatches from '../../components/DisplaySpanishLeagueMatches/DisplaySpanishLeagueMatches'
import { AppDispatch, RootState } from '../../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../features/spanishLeague/spanishLeagueSlice'



interface Props {
  showSidebar: boolean
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const SpanishLeague: React.FC<Props> = ({ showSidebar, setShowSidebar }) => {
  const classes = useStyles()
  const { matchday, loading } = useSelector((state: RootState) => state.spanishLeague)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchData())
  }, [])


  return (
    <Box flex={5}>
      <Container maxWidth='lg'>
        <Box className={classes.center}>
          <a href='https://www.laliga.com/en-GB' target='_blank' rel="noreferrer">
            <img src={laliga} className={classes.image} alt='La Liga' />
          </a>
        </Box>



        <Typography sx={{ marginBottom: 3, marginTop: 5 }} textAlign='center' variant='h5'>Most recent La Liga match</Typography>
        <Typography sx={{ marginBottom: 3 }} textAlign='center' variant='h4'>{matchday}</Typography>
        {loading ?
          (<Box className={classes.center}>
            <CircularProgress />
          </Box>)
          :
          <Grid container>
            <DisplaySpanishLeagueMatches />
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

export default SpanishLeague