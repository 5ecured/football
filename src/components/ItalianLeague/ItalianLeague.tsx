import { Box } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Fab from '@mui/material/Fab';

interface Props {
  showSidebar: boolean
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const ItalianLeague: React.FC<Props> = ({ showSidebar, setShowSidebar }) => {
  return (
    <Box flex={5}>
      serie a

      {!showSidebar &&
        <Fab sx={{ position: 'fixed', bottom: 300, left: 20 }} onClick={() => setShowSidebar(true)}>
          <ArrowForwardIcon />
        </Fab>
      }
    </Box>
  )
}

export default ItalianLeague