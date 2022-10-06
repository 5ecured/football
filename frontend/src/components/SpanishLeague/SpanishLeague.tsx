import { Box, Container } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Fab from '@mui/material/Fab';
import laliga from '../../asset/laliga.jpg'
import { useStyles } from './style'

interface Props {
  showSidebar: boolean
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const SpanishLeague: React.FC<Props> = ({ showSidebar, setShowSidebar }) => {
  const classes = useStyles()

  
  return (
    <Box flex={5}>
      <Container maxWidth='lg'>
        <Box className={classes.center}>
          <a href='https://www.laliga.com/en-GB' target='_blank' rel="noreferrer">
            <img src={laliga} className={classes.image} alt='La Liga' />
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

export default SpanishLeague