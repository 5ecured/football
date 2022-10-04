import { CardActions, CardContent, CardMedia, Grid, Card, Typography, Button } from '@mui/material'
import React from 'react'
import { PlayerInterface } from '../../features/player/playerSlice'
import { useStyles } from './style'

interface Props {
  display: PlayerInterface[]
}

const IndividualCard: React.FC<Props> = ({ display }) => {
  const classes = useStyles()

  const render = display.map((player, i) => (
    <Grid item xs={12} lg={4} className={classes.center}>
      <Card key={i}>
        <CardMedia
          image={player.image}
          className={classes.image}
        />
        <CardContent>
          <Typography>
            <b>Name</b>: {player.name}
            <br />
            <b>Club</b>: {player.club}
          </Typography>
        </CardContent>
        <CardActions className={classes.center}>
          <Button variant='contained'>Player info</Button>
          <Button variant='outlined'>Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  ))

  return (
    <>
      {render}
    </>
  )
}

export default IndividualCard