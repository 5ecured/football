import React, { useState } from 'react'
import { Container, Button, Typography, Box, Grid, Modal } from '@mui/material'
import { useStyles } from './style'
import IndividualCard from '../IndividualCard/IndividualCard'
import type { RootState } from '../../app/store'
import { useSelector } from 'react-redux'
import MyModal from '../MyModal/MyModal'
import { PlayerInterface } from '../../features/player/playerSlice'

// () => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})


const Main: React.FC = () => {
  const classes = useStyles()
  const display = useSelector((state: RootState) => state.player.mainArray)

  const [open, setOpen] = useState<boolean>(false)
  const [editing, setEditing] = useState<boolean>(false)
  const [playerToEdit, setPlayerToEdit] = useState<PlayerInterface>({ id: null, name: '', club: '' })

  const whichPlayerToEdit = (obj: PlayerInterface) => {
    setEditing(true)
    setPlayerToEdit(obj)
  }

  console.log('playerToEdit', playerToEdit)

  return (
    <Container maxWidth='lg'>
      <Box className={classes.center} mt={5} mb={5}>
        <Button variant='contained' onClick={() => setOpen(true)} className={classes.add}>Add player</Button>
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
    </Container>
  )
}

export default Main