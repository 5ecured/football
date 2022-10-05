import React, { useState } from 'react'
import { Container, Button, Typography, Box, Grid, Modal } from '@mui/material'
import { useStyles } from './style'
import IndividualCard from '../IndividualCard/IndividualCard'
import type { RootState } from '../../app/store'
import { useSelector } from 'react-redux'
import MyModal from '../MyModal/MyModal'
import { PlayerInterface } from '../../features/player/playerSlice'
import EditPlayer from '../EditPlayer/EditPlayer'
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


interface Props {
  showSidebar: boolean
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Main: React.FC<Props> = ({ showSidebar, setShowSidebar }) => {
  const classes = useStyles()
  const display = useSelector((state: RootState) => state.player.mainArray)

  const [open, setOpen] = useState<boolean>(false)
  const [editing, setEditing] = useState<boolean>(false)
  const [playerToEdit, setPlayerToEdit] = useState<PlayerInterface>({ id: null, name: '', club: '' })

  const whichPlayerToEdit = (obj: PlayerInterface) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setEditing(true)
    setPlayerToEdit(obj)
  }


  return (
    <Box flex={5}>
      <Container maxWidth='lg'>
        <Box className={classes.center} mt={5} mb={5}>
          {editing ? (
            <EditPlayer playerToEdit={playerToEdit} setEditing={setEditing} />
          ) : (
            <Button variant='contained' onClick={() => setOpen(true)} className={classes.add}>Add player</Button>
          )}
        </Box>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          className={classes.center}
        >
          <Box>
            <MyModal setOpen={setOpen} />
          </Box>
        </Modal>

        <Box>
          <Grid container spacing={3} className={classes.center}>
            <IndividualCard display={display} whichPlayerToEdit={whichPlayerToEdit} />
          </Grid>
        </Box>

        {!showSidebar &&
          <Fab sx={{ position: 'fixed', bottom: 300, left: 20 }} onClick={() => setShowSidebar(true)}>
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

export default Main