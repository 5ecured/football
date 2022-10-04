import { CardActions, CardContent, CardMedia, Grid, Card, Typography, Button, Box } from '@mui/material'
import React from 'react'
import { PlayerInterface } from '../../features/player/playerSlice'
import { useStyles } from './style'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux'
import { deletePlayer } from '../../features/player/playerSlice'

interface Props {
  display: PlayerInterface[]
  whichPlayerToEdit: (obj: PlayerInterface) => void
}

const IndividualCard: React.FC<Props> = ({ display, whichPlayerToEdit }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const render = display.map((player, i) => (
    <Grid item xs={12} lg={4} className={classes.center} mt={5} key={i}>
      <Card>
        <CardMedia
          image={player.image}
          className={classes.image}
        />
        <CardContent>
          <Typography textAlign='center'>
            <b>{player.name}</b>
            <br />
            <b>{player.club}</b>
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Box mb={2}>
            <Button variant='contained' onClick={() => whichPlayerToEdit(player)}><EditIcon /></Button>
            <Button variant='outlined' onClick={() => dispatch(deletePlayer(player.id))}><DeleteIcon /></Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  ))

  if (display.length > 0) {
    return (
      <>
        {render}
      </>
    )
  } else {
    return (
      <Typography variant='h6'>No player. Click the button above to start adding some!</Typography>
    )
  }
}

export default IndividualCard