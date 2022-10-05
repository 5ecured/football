import { Box } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Fab from '@mui/material/Fab';

interface Props {
  showSidebar: boolean
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const SpanishLeague: React.FC<Props> = ({ showSidebar, setShowSidebar }) => {
  return (
    <Box flex={5}>
      la liga

      {!showSidebar &&
        <Fab sx={{ position: 'fixed', bottom: 300, left: 20 }} onClick={() => setShowSidebar(true)}>
          <ArrowForwardIcon />
        </Fab>
      }
    </Box>
  )
}

export default SpanishLeague