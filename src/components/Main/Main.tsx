import React, { useState } from 'react'
import { Container, Button, Typography, Box, Grid, Modal } from '@mui/material'
import { useStyles } from './style'
import IndividualCard from '../IndividualCard/IndividualCard'
import type { RootState } from '../../app/store'
import { useSelector } from 'react-redux'
import MyModal from '../MyModal/MyModal'

const Main: React.FC = () => {
  const classes = useStyles()
  const display = useSelector((state: RootState) => state.player.mainArray)

  const [open, setOpen] = useState(false)

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
        <MyModal />
      </Modal>

      <Box>
        <Grid container spacing={3} className={classes.center}>
          <IndividualCard display={display} />
        </Grid>
      </Box>
    </Container>
  )
}

export default Main