import { CardActions, CardContent, CardMedia, Grid, Card } from '@mui/material'
import React from 'react'
import { PlayerInterface } from '../../features/player/playerSlice'

interface Props {
  display: PlayerInterface[]
}

const IndividualCard: React.FC<Props> = ({ display }) => {
  const render = display.map((el, i) => {
    return (
      <Card key={i}>
        <CardContent>This is {el.name} who currently plays for {el.club}</CardContent>
        <CardActions></CardActions>
      </Card>
    )
  })

  return (
    <Grid item>
      {render}
    </Grid>
  )
}

export default IndividualCard