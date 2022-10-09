import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Fab from '@mui/material/Fab';
import seriea from '../../asset/seriea.png'
import { useStyles } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { fetchData } from '../../features/italianLeague/italianLeagueSlice'
import DisplayItalianLeagueMatches from '../../components/DisplayItalianLeagueMatches/DisplayItalianLeagueMatches';

interface Props {
  showSidebar: boolean
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const ItalianLeague: React.FC<Props> = ({ showSidebar, setShowSidebar }) => {
  const classes = useStyles()
  const { matchday, loading } = useSelector((state: RootState) => state.italianLeague)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchData())
  }, [])


  return (
    <Box flex={5}>
      <Container maxWidth='lg'>
        <Box className={classes.center}>
          <a href='https://www.legaseriea.it/en' target='_blank' rel="noreferrer">
            <img src={seriea} className={classes.image} alt='Serie A' />
          </a>
        </Box>


        <Typography sx={{ marginBottom: 3, marginTop: 5 }} textAlign='center' variant='h5'>Most recent Serie A matches</Typography>
        <Typography sx={{ marginBottom: 3 }} textAlign='center' variant='h4'>{matchday}</Typography>
        {loading ?
          (<Box className={classes.center}>
            <CircularProgress />
          </Box>)
          :
          <Grid container>
            <DisplayItalianLeagueMatches />
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

export default ItalianLeague