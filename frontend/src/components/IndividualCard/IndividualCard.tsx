import { CardActions, CardContent, CardMedia, Grid, Card, Typography, Button, Box } from '@mui/material'
import React from 'react'
import { PlayerInterface } from '../../features/player/playerSlice'
import { useStyles } from './style'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux'
import { deletePlayer, toggleFavourite } from '../../features/player/playerSlice'
import GradeIcon from '@mui/icons-material/Grade';
import { removePlayer, togglePlayer } from '../../api/frontToBackAPI';
import { AppDispatch } from '../../app/store'


interface Props {
  playersToDisplay: PlayerInterface[]
  whichPlayerToEdit: (obj: PlayerInterface) => void
}

const IndividualCard: React.FC<Props> = ({ playersToDisplay, whichPlayerToEdit }) => {
  const classes = useStyles()
  const dispatch = useDispatch<AppDispatch>()


  const render = playersToDisplay.map((player, i) => (
    <Grid item xs={12} lg={4} className={classes.center} mt={5} key={i}>
      <Card>
        <CardMedia
          image={player.photo}
          className={classes.image}
          component='image'
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
            <Button variant='outlined' onClick={() => whichPlayerToEdit(player)}><EditIcon /></Button>
            <Button variant='outlined' onClick={() => {
              // dispatch(deletePlayer(player.id!))

              dispatch(removePlayer(player._id))
            }}><DeleteIcon /></Button>
            <Button variant={`${player.favorite ? 'contained' : 'outlined'}`} onClick={() => {
              // dispatch(toggleFavourite(player.id!))

              dispatch(togglePlayer(player))
            }}><GradeIcon /></Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  ))




  if (playersToDisplay.length > 0) {
    return (
      <>
        {render}
      </>
    )
  } else {
    return (
      <Typography sx={{ marginTop: 5 }} variant='h6'>No player. Click the button above to start adding some!</Typography>
    )
  }
}

export default IndividualCard