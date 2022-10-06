import { Box, Container } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Fab from '@mui/material/Fab';
import championsleague from '../../asset/championsleague.jpg'
import { useStyles } from './style'
import { fetchChampionsLeague } from '../../utils/fetchChampionsLeague'

interface Props {
  showSidebar: boolean
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const ChampionsLeague: React.FC<Props> = ({ showSidebar, setShowSidebar }) => {
  const classes = useStyles()

  // fetchChampionsLeague()

  return (
    <Box flex={5}>
      <Container maxWidth='lg'>
        <Box className={classes.center} >
          <a href='https://www.uefa.com/uefachampionsleague/' target='_blank' rel="noreferrer">
            <img src={championsleague} className={classes.image} alt='Champions League' />
          </a>
        </Box>



        {!showSidebar &&
          <Fab sx={{ position: 'fixed', bottom: 300, left: 20 }} onClick={() => setShowSidebar(true)}>
            <ArrowForwardIcon />
          </Fab>
        }
      </Container>
    </Box>
  )
}

export default ChampionsLeague